// cmd/analyze/main.go
//
// CLI wrapper for pkg/analyzer. Scans a cloned repository directory for
// known CVEs in go.mod and package.json via the OSV API (AS-004), then
// renders results as a rich terminal UI (default) or raw JSON (--output json).
//
// Usage:
//
//	go run ./cmd/analyze --dir /tmp/mcp-server-github
//	go run ./cmd/analyze --dir /tmp/mcp-server-github --output json
//	go run ./cmd/analyze --dir /tmp/mcp-server-github --output json --output-file /tmp/findings.json
package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/AgentSafe-AI/tooltrust-directory/pkg/analyzer"
	"github.com/pterm/pterm"
)

func main() {
	dir := flag.String("dir", "", "path to the cloned repository to scan (required)")
	outputFmt := flag.String("output", "text", "output format: text (default) or json")
	outputFile := flag.String("output-file", "-", "file path for JSON output; use '-' for stdout (only used with --output json)")
	flag.Parse()

	if *dir == "" {
		flag.Usage()
		os.Exit(1)
	}

	// ── Header (text mode only) ────────────────────────────────────────────────

	if *outputFmt == "text" {
		pterm.DefaultHeader.
			WithFullWidth(true).
			WithBackgroundStyle(pterm.NewStyle(pterm.BgDarkGray)).
			WithTextStyle(pterm.NewStyle(pterm.FgLightWhite, pterm.Bold)).
			Println("🛡️  ToolTrust Scanner  ·  Security Audit")
		pterm.Println()
	} else {
		log.Printf("AS-004 OSV scan: %s", *dir)
	}

	// ── Scan ──────────────────────────────────────────────────────────────────

	findings, err := analyzer.ScanDir(*dir)
	if err != nil {
		if *outputFmt == "text" {
			pterm.Error.Printf("OSV scan failed: %v\n", err)
		} else {
			log.Fatalf("OSV scan failed: %v", err)
		}
		os.Exit(1)
	}

	// ── Output ────────────────────────────────────────────────────────────────

	if *outputFmt == "json" {
		log.Printf("Found %d CVE finding(s)", len(findings))
		data, err := json.MarshalIndent(findings, "", "  ")
		if err != nil {
			log.Fatalf("marshal findings: %v", err)
		}
		if *outputFile == "-" {
			fmt.Println(string(data))
			return
		}
		if err := os.WriteFile(*outputFile, data, 0o644); err != nil {
			log.Fatalf("write %s: %v", *outputFile, err)
		}
		log.Printf("Wrote findings to %s", *outputFile)
		return
	}

	// ── Text / pterm rendering ────────────────────────────────────────────────

	toolName := filepath.Base(*dir)
	renderTextUI(toolName, findings)
}

// renderTextUI prints a Snyk-style scan tree + summary panel using pterm.
func renderTextUI(toolName string, findings []analyzer.Finding) {

	// ── Spinner ───────────────────────────────────────────────────────────────
	spinner, _ := pterm.DefaultSpinner.
		WithSequence("⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏").
		Start(fmt.Sprintf("Scanning %s ...", pterm.Bold.Sprint(toolName)))
	spinner.Success(fmt.Sprintf("Scan complete — %s", pterm.Bold.Sprint(toolName)))
	pterm.Println()

	// ── Tree of findings ──────────────────────────────────────────────────────
	var children []pterm.TreeNode

	if len(findings) == 0 {
		children = append(children, pterm.TreeNode{
			Text: pterm.Green("✅  No vulnerabilities found — all clear"),
		})
	} else {
		for _, f := range findings {
			// Extract CVE/vuln ID from the title: "Supply Chain CVE: GHSA-… in pkg@ver"
			//   f.Title  = "Supply Chain CVE: GHSA-xxx-yyy-zzz in some-pkg@1.2.3"
			//   f.ID     = "AS-004"    (rule ID, not the CVE ID)
			// The real CVE/OSV ID is embedded in the title and also in Description.
			vulnID, pkgRef := extractVulnInfo(f)

			var icon, sevColored string
			switch strings.ToLower(f.Severity) {
			case "critical":
				icon = "🚨"
				sevColored = pterm.Red("[CRITICAL]")
			case "high":
				icon = "🚨"
				sevColored = pterm.Red("[HIGH]")
			case "medium":
				icon = "⚠️ "
				sevColored = pterm.Yellow("[MEDIUM]")
			default:
				icon = "ℹ️ "
				sevColored = pterm.Gray("[" + strings.ToUpper(f.Severity) + "]")
			}

			label := fmt.Sprintf("%s  %s  %s  %s",
				icon,
				sevColored,
				pterm.Bold.Sprint(vulnID),
				pterm.Gray(pkgRef),
			)
			children = append(children, pterm.TreeNode{Text: label})
		}
	}

	tree := pterm.TreeNode{
		Text:     pterm.Bold.Sprintf("📦  %s", toolName),
		Children: children,
	}

	_ = pterm.DefaultTree.WithRoot(tree).Render()
	pterm.Println()

	// ── Summary panel ─────────────────────────────────────────────────────────
	grade, gradeColored := calcGrade(len(findings), findings)
	crit, high, med, low := countBySeverity(findings)

	summaryLines := []string{
		fmt.Sprintf("  Scanned tool   : %s", pterm.Bold.Sprint(toolName)),
		"",
		fmt.Sprintf("  Total findings : %s", styleCount(len(findings))),
		fmt.Sprintf("    🚨 Critical   : %s", styleCountSev(crit, "critical")),
		fmt.Sprintf("    🚨 High       : %s", styleCountSev(high, "high")),
		fmt.Sprintf("    ⚠️  Medium     : %s", styleCountSev(med, "medium")),
		fmt.Sprintf("    ℹ️  Low        : %s", styleCountSev(low, "low")),
		"",
		fmt.Sprintf("  Risk Score     : %s", styleRiskScore(crit, high, med)),
		fmt.Sprintf("  Grade          : %s", gradeColored),
	}

	_ = pterm.DefaultBox.
		WithTitle(pterm.Bold.Sprint(" Security Summary ")).
		WithTitleTopLeft().
		WithRightPadding(4).
		WithLeftPadding(2).
		WithTopPadding(1).
		WithBottomPadding(1).
		Println(strings.Join(summaryLines, "\n"))

	// ── Exit code ─────────────────────────────────────────────────────────────
	for _, f := range findings {
		sev := strings.ToLower(f.Severity)
		if sev == "critical" || sev == "high" {
			_ = grade
			os.Exit(1)
		}
	}
}

// extractVulnInfo parses the vuln ID and package reference from a Finding.
// Title format: "Supply Chain CVE: GHSA-xxx in pkg@ver"
func extractVulnInfo(f analyzer.Finding) (vulnID, pkgRef string) {
	title := f.Title
	// Strip prefix "Supply Chain CVE: "
	title = strings.TrimPrefix(title, "Supply Chain CVE: ")
	// Split on " in " to separate vuln ID from pkg reference
	parts := strings.SplitN(title, " in ", 2)
	if len(parts) == 2 {
		return strings.TrimSpace(parts[0]), strings.TrimSpace(parts[1])
	}
	// Fallback: use description first word
	return f.ID, title
}

// countBySeverity returns counts for each severity level.
func countBySeverity(findings []analyzer.Finding) (critical, high, medium, low int) {
	for _, f := range findings {
		switch strings.ToLower(f.Severity) {
		case "critical":
			critical++
		case "high":
			high++
		case "medium":
			medium++
		default:
			low++
		}
	}
	return
}

// calcGrade computes a letter grade from findings severity breakdown.
func calcGrade(count int, findings []analyzer.Finding) (string, string) {
	critical, high, medium, _ := countBySeverity(findings)

	var grade string
	switch {
	case critical > 0:
		grade = "F"
	case high > 2:
		grade = "D"
	case high > 0:
		grade = "C"
	case medium > 3:
		grade = "C"
	case medium > 0:
		grade = "B"
	case count == 0:
		grade = "A"
	default:
		grade = "B"
	}

	var colored string
	switch grade {
	case "A", "S":
		colored = pterm.Green(fmt.Sprintf("[ %s ]", grade))
	case "B", "C":
		colored = pterm.Yellow(fmt.Sprintf("[ %s ]", grade))
	default:
		colored = pterm.Red(fmt.Sprintf("[ %s ]", grade))
	}

	return grade, colored
}

func styleCount(n int) string {
	if n == 0 {
		return pterm.Green("0")
	}
	return pterm.Red(fmt.Sprintf("%d", n))
}

func styleCountSev(n int, sev string) string {
	if n == 0 {
		return pterm.Gray("0")
	}
	switch sev {
	case "critical", "high":
		return pterm.Red(fmt.Sprintf("%d", n))
	case "medium":
		return pterm.Yellow(fmt.Sprintf("%d", n))
	default:
		return pterm.Gray(fmt.Sprintf("%d", n))
	}
}

// styleRiskScore computes a 0–100 score weighted by severity.
func styleRiskScore(critical, high, medium int) string {
	score := critical*40 + high*20 + medium*5
	if score > 100 {
		score = 100
	}
	s := fmt.Sprintf("%d / 100", score)
	switch {
	case score == 0:
		return pterm.Green(s)
	case score < 40:
		return pterm.Yellow(s)
	default:
		return pterm.Red(s)
	}
}
