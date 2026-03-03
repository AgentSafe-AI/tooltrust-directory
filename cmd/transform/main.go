// cmd/transform/main.go
//
// Converts an AgentSentry scan output (schema_version / policies / summary)
// into the ToolTrust Directory report format (report.schema.json v1.0).
//
// Usage:
//
//	go run ./cmd/transform \
//	  --input   /tmp/tooltrust-scan.json \
//	  --tool-id mcp-server-filesystem \
//	  --version 1.2.0 \
//	  --source  https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem \
//	  --output  data/reports/mcp-server-filesystem.json
package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"os"
	"strings"
	"time"
)

// ── AgentSentry output schema ────────────────────────────────────────────────

type AgentSentryOutput struct {
	SchemaVersion string     `json:"schema_version"`
	Policies      []Policy   `json:"policies"`
	Summary       ASSummary  `json:"summary"`
}

type Policy struct {
	ToolName string `json:"tool_name"`
	Action   string `json:"action"`
	Score    Score  `json:"score"`
}

type Score struct {
	RiskScore int         `json:"risk_score"`
	Grade     string      `json:"grade"`
	Findings  []ASFinding `json:"findings"`
}

type ASSummary struct {
	Total           int    `json:"total"`
	Allowed         int    `json:"allowed"`
	RequireApproval int    `json:"require_approval"`
	Blocked         int    `json:"blocked"`
	ScannedAt       string `json:"scanned_at"`
}

type ASFinding struct {
	RuleID      string `json:"rule_id"`
	Severity    string `json:"severity"`
	Code        string `json:"code"`
	Description string `json:"description"`
	Location    string `json:"location"`
}

// ── ToolTrust report schema ───────────────────────────────────────────────────

type TrustReport struct {
	ToolID      string      `json:"tool_id"`
	Version     string      `json:"version"`
	Grade       string      `json:"grade"`
	RiskScore   int         `json:"risk_score"`
	ScanDate    time.Time   `json:"scan_date"`
	Scanner     string      `json:"scanner"`
	SourceURL   string      `json:"source_url"`
	Category    string      `json:"category,omitempty"`
	Vendor      string      `json:"vendor,omitempty"`
	Stars       int         `json:"stars,omitempty"`
	License     string      `json:"license,omitempty"`
	Language    string      `json:"language,omitempty"`
	Description string      `json:"description,omitempty"`
	Findings    []TTFinding `json:"findings"`
	Summary     TTSummary   `json:"summary"`
	Methodology string      `json:"methodology"`
}

type TTFinding struct {
	ID             string `json:"id"`
	Severity       string `json:"severity"`
	Title          string `json:"title"`
	Description    string `json:"description"`
	Recommendation string `json:"recommendation"`
}

type TTSummary struct {
	Critical int `json:"critical"`
	High     int `json:"high"`
	Medium   int `json:"medium"`
	Low      int `json:"low"`
	Info     int `json:"info"`
}

// ── Rule metadata (canonical titles + recommendations per AS-XXX) ────────────
// Source: https://github.com/AgentSafe-AI/tooltrust-scanner#scan-catalog

type ruleMeta struct{ title, recommendation string }

var rules = map[string]ruleMeta{
	"AS-001": {
		title: "Tool Poisoning (Prompt Injection)",
		recommendation: "Remove adversarial instructions from tool descriptions. " +
			"Validate all tool-definition strings against a safe-pattern allowlist before registration.",
	},
	"AS-002": {
		title: "Excessive Permission Surface",
		recommendation: "Restrict tool capabilities to the minimum required. " +
			"Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.",
	},
	"AS-003": {
		title: "Scope Mismatch",
		recommendation: "Ensure tool names, descriptions, and permission declarations are internally consistent. " +
			"Use explicit naming conventions that fully reflect actual capabilities.",
	},
	"AS-004": {
		title: "Supply Chain Vulnerability (CVE)",
		recommendation: "Upgrade or replace the vulnerable dependency. " +
			"Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).",
	},
	"AS-005": {
		title: "Privilege Escalation",
		recommendation: "Restrict OAuth/token scopes to the minimum necessary. " +
			"Remove admin, :write wildcards, and any description-level escalation signals (sudo, impersonate).",
	},
	"AS-010": {
		title: "Insecure Secret Handling",
		recommendation: "Avoid accepting raw credentials as input parameters. " +
			"Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.",
	},
	"AS-011": {
		title: "DoS Resilience — Missing Rate Limit / Timeout",
		recommendation: "Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. " +
			"Implement exponential back-off and surface resource state to the calling agent.",
	},
}

const (
	scannerVersion = "AgentSentry/0.1.2"
	methodologyURL = "https://github.com/AgentSafe-AI/tooltrust-directory/blob/main/docs/methodology.md"
)

func main() {
	inputPath   := flag.String("input",        "",  "path to AgentSentry JSON output (required)")
	toolID      := flag.String("tool-id",     "",  "kebab-case tool_id (required)")
	version     := flag.String("version",     "",  "scanned semver (required)")
	sourceURL   := flag.String("source",      "",  "canonical source URL (required)")
	outputPath  := flag.String("output",      "",  "destination path for ToolTrust report (required)")
	vendor      := flag.String("vendor",      "",  "GitHub org/user that owns the repo")
	stars       := flag.Int(  "stars",        0,   "GitHub star count at scan time")
	license     := flag.String("license",     "",  "SPDX license identifier, e.g. MIT")
	language    := flag.String("language",    "",  "primary programming language")
	category    := flag.String("category",   "",  "functional category, e.g. Developer Tools")
	description := flag.String("description", "",  "repository description")
	osvFindings := flag.String("osv-findings","",  "path to AS-004 OSV findings JSON from cmd/analyze")
	flag.Parse()

	if *inputPath == "" || *toolID == "" || *version == "" || *sourceURL == "" || *outputPath == "" {
		flag.Usage()
		os.Exit(1)
	}

	raw, err := os.ReadFile(*inputPath)
	if err != nil {
		log.Fatalf("read %s: %v", *inputPath, err)
	}

	var as AgentSentryOutput
	if err := json.Unmarshal(raw, &as); err != nil {
		log.Fatalf("parse AgentSentry output: %v", err)
	}

	// Load optional AS-004 OSV findings from cmd/analyze
	var extraFindings []TTFinding
	if *osvFindings != "" {
		raw2, err := os.ReadFile(*osvFindings)
		if err != nil {
			log.Printf("warning: cannot read osv-findings %s: %v", *osvFindings, err)
		} else {
			// pkg/analyzer.Finding matches TTFinding shape exactly
			if err := json.Unmarshal(raw2, &extraFindings); err != nil {
				log.Printf("warning: parse osv-findings: %v", err)
				extraFindings = nil
			}
		}
	}

	report := transform(as, extraFindings, *toolID, *version, *sourceURL,
		*vendor, *stars, *license, *language, *category, *description)

	out, err := json.MarshalIndent(report, "", "  ")
	if err != nil {
		log.Fatalf("marshal report: %v", err)
	}
	if err := os.WriteFile(*outputPath, out, 0o644); err != nil {
		log.Fatalf("write %s: %v", *outputPath, err)
	}

	fmt.Printf("✓ %s @ %s  →  Grade %s  (score %d)  →  %s\n",
		*toolID, *version, report.Grade, report.RiskScore, *outputPath)
}

// transform converts an AgentSentry multi-policy output into a single
// ToolTrust report. When a scan covers multiple tool definitions (e.g. a
// server exposing several tools), we take the worst-case risk score and
// aggregate all findings.
func transform(as AgentSentryOutput, extra []TTFinding, toolID, version, sourceURL, vendor string, stars int, license, language, category, description string) TrustReport {
	allFindings := make([]TTFinding, 0)
	maxScore := 0
	summary := TTSummary{}

	for _, policy := range as.Policies {
		if policy.Score.RiskScore > maxScore {
			maxScore = policy.Score.RiskScore
		}
		for _, f := range policy.Score.Findings {
			ttf := toTTFinding(f)
			allFindings = append(allFindings, ttf)
			switch strings.ToLower(ttf.Severity) {
			case "critical":
				summary.Critical++
			case "high":
				summary.High++
			case "medium":
				summary.Medium++
			case "low":
				summary.Low++
			default:
				summary.Info++
			}
		}
	}

	scanDate := time.Now().UTC()
	if as.Summary.ScannedAt != "" {
		if t, err := time.Parse(time.RFC3339, as.Summary.ScannedAt); err == nil {
			scanDate = t
		}
	}

	// Merge AS-004 OSV findings and recalculate score
	for _, f := range extra {
		allFindings = append(allFindings, f)
		w := severityWeight(f.Severity)
		maxScore += w
		switch strings.ToLower(f.Severity) {
		case "critical":
			summary.Critical++
		case "high":
			summary.High++
		case "medium":
			summary.Medium++
		case "low":
			summary.Low++
		default:
			summary.Info++
		}
	}

	return TrustReport{
		ToolID:      toolID,
		Version:     version,
		Grade:       computeGrade(maxScore, allFindings),
		RiskScore:   maxScore,
		ScanDate:    scanDate,
		Scanner:     scannerVersion,
		SourceURL:   sourceURL,
		Category:    category,
		Vendor:      vendor,
		Stars:       stars,
		License:     license,
		Language:    language,
		Description: description,
		Findings:    allFindings,
		Summary:     summary,
		Methodology: methodologyURL,
	}
}

// toTTFinding maps an AgentSentry finding to the ToolTrust TTFinding shape,
// enriching it with our canonical title and recommendation.
func toTTFinding(f ASFinding) TTFinding {
	meta, known := rules[f.RuleID]

	title := f.Code
	recommendation := "Review and remediate the identified issue."
	if known {
		title = meta.title
		recommendation = meta.recommendation
	}

	desc := f.Description
	if desc == "" {
		desc = fmt.Sprintf("%s detected at %s", f.Code, f.Location)
	}

	return TTFinding{
		ID:             f.RuleID,
		Severity:       titleCase(f.Severity),
		Title:          title,
		Description:    desc,
		Recommendation: recommendation,
	}
}

// computeGrade assigns S when score==0 and no findings; otherwise uses scoreToGrade.
// S = zero risk, perfect score. A = 0–9 with any findings.
func computeGrade(score int, findings []TTFinding) string {
	if score == 0 && len(findings) == 0 {
		return "S"
	}
	return scoreToGrade(score)
}

// scoreToGrade matches AgentSentry's published grade boundaries exactly.
// https://github.com/AgentSafe-AI/tooltrust-scanner#risk-grades
//
//	A  0–9    ALLOW
//	B  10–24  ALLOW + rate limit
//	C  25–49  REQUIRE_APPROVAL
//	D  50–74  REQUIRE_APPROVAL
//	F  75+    BLOCK
func scoreToGrade(score int) string {
	switch {
	case score <= 9:
		return "A"
	case score <= 24:
		return "B"
	case score <= 49:
		return "C"
	case score <= 74:
		return "D"
	default:
		return "F"
	}
}

// severityWeight maps severity labels to AS-XXX scoring weights.
func severityWeight(sev string) int {
	switch strings.ToLower(sev) {
	case "critical":
		return 25
	case "high":
		return 15
	case "medium":
		return 8
	case "low":
		return 2
	default:
		return 0
	}
}

func titleCase(s string) string {
	if s == "" {
		return s
	}
	return strings.ToUpper(s[:1]) + strings.ToLower(s[1:])
}
