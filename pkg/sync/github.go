// pkg/sync/github.go
//
// Provides two public functions used by cmd/sync:
//
//   - UpdateRegistry: reads all data/reports/*.json and regenerates the
//     AGENTSENTRY:BEGIN … AGENTSENTRY:END block in README.md.
//
//   - GitCommitAndPush: stages the given paths, commits with the provided
//     message, and pushes to origin/HEAD (no-op when nothing changed).
package sync

import (
	"encoding/json"
	"fmt"
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
	ToolID    string    `json:"tool_id"`
	Version   string    `json:"version"`
	Grade     string    `json:"grade"`
	RiskScore int       `json:"risk_score"`
	ScanDate  time.Time `json:"scan_date"`
	SourceURL string    `json:"source_url"`
	Summary   struct {
		Critical int `json:"critical"`
		High     int `json:"high"`
		Medium   int `json:"medium"`
		Low      int `json:"low"`
		Info     int `json:"info"`
	} `json:"summary"`
}

// registryBlock matches the full AGENTSENTRY:BEGIN … END region, including
// the marker comment lines themselves.
var registryBlock = regexp.MustCompile(
	`(?s)(<!-- AGENTSENTRY:BEGIN[^\n]*\n).*?(<!-- AGENTSENTRY:END -->)`,
)

// UpdateRegistry reads every JSON report from reportsDir, sorts them by grade
// then risk score, builds a Markdown table, and splices it into the README
// between the AGENTSENTRY:BEGIN / END markers.
func UpdateRegistry(reportsDir, readmePath string) error {
	reports, err := loadReports(reportsDir)
	if err != nil {
		return fmt.Errorf("load reports: %w", err)
	}

	raw, err := os.ReadFile(readmePath)
	if err != nil {
		return fmt.Errorf("read readme: %w", err)
	}

	table := buildTable(reports)
	updated := registryBlock.ReplaceAllString(
		string(raw),
		"${1}"+table+"\n${2}",
	)

	if updated == string(raw) {
		return fmt.Errorf("AGENTSENTRY markers not found in %s — nothing updated", readmePath)
	}

	return os.WriteFile(readmePath, []byte(updated), 0o644)
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
		raw, err := os.ReadFile(filepath.Join(dir, e.Name()))
		if err != nil {
			continue
		}
		var r Report
		if err := json.Unmarshal(raw, &r); err != nil {
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
	return map[string]int{"A": 0, "B": 1, "C": 2, "D": 3, "F": 4}[g]
}

func buildTable(reports []Report) string {
	var sb strings.Builder
	sb.WriteString("\n| Tool | Version | Grade | Findings | Scan Date | Report |\n")
	sb.WriteString("|------|---------|:-----:|:--------:|-----------|--------|\n")
	for _, r := range reports {
		fmt.Fprintf(&sb,
			"| [%s](%s) | %s | **%s** | %s | %s | [JSON](./data/reports/%s.json) |\n",
			r.ToolID,
			r.SourceURL,
			r.Version,
			r.Grade,
			summarise(r),
			r.ScanDate.Format("2006-01-02"),
			r.ToolID,
		)
	}
	return sb.String()
}

// summarise returns a short human-readable findings summary, e.g. "1 High, 2 Medium".
func summarise(r Report) string {
	type pair struct {
		n    int
		label string
	}
	items := []pair{
		{r.Summary.Critical, "Critical"},
		{r.Summary.High, "High"},
		{r.Summary.Medium, "Medium"},
		{r.Summary.Low, "Low"},
	}
	var parts []string
	for _, p := range items {
		if p.n > 0 {
			parts = append(parts, fmt.Sprintf("%d %s", p.n, p.label))
		}
	}
	if len(parts) == 0 {
		return "None"
	}
	return strings.Join(parts, ", ")
}

func git(dir string, args ...string) error {
	cmd := exec.Command("git", args...)
	cmd.Dir = dir
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}
