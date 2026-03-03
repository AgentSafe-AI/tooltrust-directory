// pkg/sync/github.go
//
// Provides two public functions used by cmd/sync:
//
//   - UpdateRegistry: reads all data/reports/*.json, regenerates the
//     AGENTSENTRY:BEGIN … AGENTSENTRY:END block in README.md, and writes
//     per-tool detail pages to docs/tools/<id>.md.
//
//   - GitCommitAndPush: stages the given paths, commits with the provided
//     message, and pushes to origin/HEAD (no-op when nothing changed).
package sync

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
	"time"
)

// Report mirrors the fields we need from report.schema.json.
type Report struct {
	ToolID      string    `json:"tool_id"`
	Version     string    `json:"version"`
	Grade       string    `json:"grade"`
	RiskScore   int       `json:"risk_score"`
	ScanDate    time.Time `json:"scan_date"`
	Scanner     string    `json:"scanner"`
	SourceURL   string    `json:"source_url"`
	Vendor      string    `json:"vendor"`
	Stars       int       `json:"stars"`
	License     string    `json:"license"`
	Language    string    `json:"language"`
	Category    string    `json:"category"`
	Description string    `json:"description"`
	Findings    []Finding `json:"findings"`
	Summary     struct {
		Critical int `json:"critical"`
		High     int `json:"high"`
		Medium   int `json:"medium"`
		Low      int `json:"low"`
		Info     int `json:"info"`
	} `json:"summary"`
	Methodology string `json:"methodology"`
}

// Finding mirrors the finding shape from report.schema.json.
type Finding struct {
	ID             string `json:"id"`
	Severity       string `json:"severity"`
	Title          string `json:"title"`
	Description    string `json:"description"`
	Recommendation string `json:"recommendation"`
}

var badgeCountRe = regexp.MustCompile(
	`(tools%20audited-)\d+(-brightgreen)`,
)
var badgeDateRe = regexp.MustCompile(
	`(last%20scan-)\d{4}--\d{2}--\d{2}(-blue)`,
)

func updateBadges(readme string, toolCount int) string {
	now := time.Now().UTC().Format("2006-01-02")
	datePart := strings.ReplaceAll(now, "-", "--")
	readme = badgeCountRe.ReplaceAllString(readme, fmt.Sprintf("${1}%d${2}", toolCount))
	readme = badgeDateRe.ReplaceAllString(readme, "${1}"+datePart+"${2}")
	return readme
}

// registryBlock matches the full AGENTSENTRY:BEGIN … END region, including
// the marker comment lines themselves.
var registryBlock = regexp.MustCompile(
	`(?s)(<!-- AGENTSENTRY:BEGIN[^\n]*\n).*?(<!-- AGENTSENTRY:END -->)`,
)

// UpdateRegistry reads every JSON report from reportsDir, sorts them by grade
// then risk score, builds a Markdown table, splices it into the README between
// the AGENTSENTRY markers, and generates per-tool detail pages in docs/tools/.
func UpdateRegistry(reportsDir, readmePath string) error {
	reports, err := loadReports(reportsDir)
	if err != nil {
		return fmt.Errorf("load reports: %w", err)
	}

	// Update README registry table
	raw, err := os.ReadFile(readmePath)
	if err != nil {
		return fmt.Errorf("read readme: %w", err)
	}
	readme := string(raw)
	loc := registryBlock.FindStringSubmatchIndex(readme)
	if loc == nil {
		return fmt.Errorf("AGENTSENTRY markers not found in %s — nothing updated", readmePath)
	}

	// loc[2]:loc[3] = group 1 (BEGIN marker line), loc[4]:loc[5] = group 2 (END marker)
	// Splice: keep everything before end of group 1, insert new table, keep group 2 onward.
	table := buildTable(reports)
	updated := readme[:loc[3]] + table + "\n" + readme[loc[4]:]
	updated = updateBadges(updated, len(reports))
	if err := os.WriteFile(readmePath, []byte(updated), 0o644); err != nil {
		return fmt.Errorf("write readme: %w", err)
	}

	// Generate per-tool detail pages (ready for static-site generation)
	docsDir := filepath.Join(filepath.Dir(readmePath), "docs", "tools")
	if err := os.MkdirAll(docsDir, 0o755); err != nil {
		return fmt.Errorf("mkdir docs/tools: %w", err)
	}
	for _, r := range reports {
		detailPath := filepath.Join(docsDir, r.ToolID+".md")
		if err := os.WriteFile(detailPath, []byte(buildDetailPage(r)), 0o644); err != nil {
			fmt.Printf("warning: could not write %s: %v\n", detailPath, err)
		}
	}
	return nil
}

// GitCommitAndPush stages the given paths, creates a commit, and pushes.
// Returns nil without error if the staging area is empty (nothing to commit).
func GitCommitAndPush(repoDir, message string, paths ...string) error {
	for _, p := range paths {
		if err := git(repoDir, "add", "--", p); err != nil {
			return fmt.Errorf("git add %s: %w", p, err)
		}
	}

	// Check for staged changes; exit 0 = clean, exit 1 = dirty.
	check := exec.Command("git", "diff", "--cached", "--quiet")
	check.Dir = repoDir
	if check.Run() == nil {
		fmt.Println("registry sync: nothing to commit, already up to date")
		return nil
	}

	if err := git(repoDir, "commit", "-m", message); err != nil {
		return fmt.Errorf("git commit: %w", err)
	}
	if err := git(repoDir, "push", "origin", "HEAD"); err != nil {
		return fmt.Errorf("git push: %w", err)
	}
	return nil
}

// ── internal helpers ──────────────────────────────────────────────────────────

func loadReports(dir string) ([]Report, error) {
	entries, err := os.ReadDir(dir)
	if err != nil {
		return nil, err
	}

	var reports []Report
	for _, e := range entries {
		if e.IsDir() || !strings.HasSuffix(e.Name(), ".json") {
			continue
		}
		path := filepath.Join(dir, e.Name())
		raw, err := os.ReadFile(path)
		if err != nil {
			log.Printf("warning: skip %s: %v", e.Name(), err)
			continue
		}
		var r Report
		if err := json.Unmarshal(raw, &r); err != nil {
			log.Printf("warning: skip %s (parse error): %v", e.Name(), err)
			continue
		}
		reports = append(reports, r)
	}

	// Primary sort: grade order (A→F); secondary: ascending risk score.
	sort.Slice(reports, func(i, j int) bool {
		gi, gj := gradeRank(reports[i].Grade), gradeRank(reports[j].Grade)
		if gi != gj {
			return gi < gj
		}
		return reports[i].RiskScore < reports[j].RiskScore
	})
	return reports, nil
}

func gradeRank(g string) int {
	ranks := map[string]int{"A": 0, "B": 1, "C": 2, "D": 3, "F": 4}
	if r, ok := ranks[g]; ok {
		return r
	}
	return 5 // unknown grades sort last
}

func buildTable(reports []Report) string {
	var sb strings.Builder
	sb.WriteString("\n| Tool | Version | Category | Grade | Key Findings | Scanned |\n")
	sb.WriteString("|------|---------|----------|:-----:|:-------------|:-------:|\n")
	for _, r := range reports {
		ver := r.Version
		if ver == "" {
			ver = "—"
		} else if len(ver) > 12 {
			ver = ver[:10] + "…"
		}
		scanDate := r.ScanDate.Format("Jan 2")
		fmt.Fprintf(&sb,
			"| [%s](%s) | `%s` | %s | **[%s](./docs/tools/%s.md)** | %s | %s |\n",
			r.ToolID, r.SourceURL,
			ver, orDash(r.Category),
			r.Grade, r.ToolID,
			keyFindings(r),
			scanDate,
		)
	}
	return sb.String()
}

// keyFindings returns a compact summary of finding rule IDs with counts,
// e.g. "AS-004 ×12, AS-002" — making it clear why high-risk tools scored poorly.
func keyFindings(r Report) string {
	if len(r.Findings) == 0 {
		return "None ✅"
	}

	counts := make(map[string]int)
	var order []string
	for _, f := range r.Findings {
		if counts[f.ID] == 0 {
			order = append(order, f.ID)
		}
		counts[f.ID]++
	}

	var parts []string
	for _, id := range order {
		if counts[id] > 1 {
			parts = append(parts, fmt.Sprintf("`%s` ×%d", id, counts[id]))
		} else {
			parts = append(parts, "`"+id+"`")
		}
	}
	return strings.Join(parts, ", ")
}

// buildDetailPage generates a Markdown detail page for a single tool, rich
// enough to power the future web version via static-site generation.
func buildDetailPage(r Report) string {
	var sb strings.Builder

	gradeEmoji := map[string]string{"A": "🟢", "B": "🟡", "C": "🟠", "D": "🔴", "F": "⛔"}
	emoji := gradeEmoji[r.Grade]

	fmt.Fprintf(&sb, "# %s %s\n\n", emoji, r.ToolID)

	if r.Description != "" {
		fmt.Fprintf(&sb, "> %s\n\n", r.Description)
	}

	fmt.Fprintf(&sb, "| Field | Value |\n|-------|-------|\n")
	fmt.Fprintf(&sb, "| **Grade** | **%s** |\n", r.Grade)
	fmt.Fprintf(&sb, "| **Risk Score** | %d |\n", r.RiskScore)
	fmt.Fprintf(&sb, "| **Version** | `%s` |\n", r.Version)
	if r.Vendor != "" {
		fmt.Fprintf(&sb, "| **Vendor** | %s |\n", r.Vendor)
	}
	if r.Stars > 0 {
		fmt.Fprintf(&sb, "| **Stars** | ⭐ %d |\n", r.Stars)
	}
	if r.Language != "" {
		fmt.Fprintf(&sb, "| **Language** | %s |\n", r.Language)
	}
	fmt.Fprintf(&sb, "| **Source** | [%s](%s) |\n", r.ToolID, r.SourceURL)
	fmt.Fprintf(&sb, "| **Scan Date** | %s |\n", r.ScanDate.Format("2006-01-02"))
	fmt.Fprintf(&sb, "| **Scanner** | %s |\n", r.Scanner)
	fmt.Fprintf(&sb, "\n---\n\n")

	// Summary counts
	fmt.Fprintf(&sb, "## Findings Summary\n\n")
	fmt.Fprintf(&sb, "| Severity | Count |\n|----------|:-----:|\n")
	fmt.Fprintf(&sb, "| Critical | %d |\n", r.Summary.Critical)
	fmt.Fprintf(&sb, "| High     | %d |\n", r.Summary.High)
	fmt.Fprintf(&sb, "| Medium   | %d |\n", r.Summary.Medium)
	fmt.Fprintf(&sb, "| Low      | %d |\n", r.Summary.Low)
	fmt.Fprintf(&sb, "| Info     | %d |\n", r.Summary.Info)
	fmt.Fprintf(&sb, "\n")

	// Individual findings
	if len(r.Findings) == 0 {
		fmt.Fprintf(&sb, "No findings. ✅\n\n")
	} else {
		fmt.Fprintf(&sb, "## Detailed Findings\n\n")
		sevEmoji := map[string]string{
			"Critical": "🔴", "High": "🟠", "Medium": "🟡", "Low": "🔵", "Info": "⚪",
		}
		for _, f := range r.Findings {
			sev := sevEmoji[f.Severity]
			fmt.Fprintf(&sb, "### %s `%s` — %s\n\n", sev, f.ID, f.Title)
			fmt.Fprintf(&sb, "**Severity:** %s\n\n", f.Severity)
			fmt.Fprintf(&sb, "**Description:**\n%s\n\n", f.Description)
			fmt.Fprintf(&sb, "**Recommendation:**\n%s\n\n", f.Recommendation)
			fmt.Fprintf(&sb, "---\n\n")
		}
	}

	fmt.Fprintf(&sb, "*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/%s.json)*\n", r.ToolID)
	return sb.String()
}

func sanitizeCell(s string) string {
	s = strings.ReplaceAll(s, "|", "/")
	s = strings.ReplaceAll(s, "\n", " ")
	s = strings.ReplaceAll(s, "\r", "")
	return strings.TrimSpace(s)
}

func truncateRunes(s string, n int) string {
	runes := []rune(s)
	if len(runes) <= n {
		return s
	}
	return string(runes[:n])
}

func orDash(s string) string {
	if s == "" {
		return "—"
	}
	return s
}

func git(dir string, args ...string) error {
	cmd := exec.Command("git", args...)
	cmd.Dir = dir
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}
