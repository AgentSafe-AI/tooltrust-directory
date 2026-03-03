package sync

import (
	"os"
	"path/filepath"
	"strings"
	"testing"
	"time"
)

func TestGradeRank(t *testing.T) {
	tests := []struct {
		grade string
		want  int
	}{
		{"A", 0}, {"B", 1}, {"C", 2}, {"D", 3}, {"F", 4},
		{"", 5}, {"X", 5}, {"Z", 5},
	}
	for _, tt := range tests {
		if got := gradeRank(tt.grade); got != tt.want {
			t.Errorf("gradeRank(%q) = %d, want %d", tt.grade, got, tt.want)
		}
	}
}

func TestTruncateRunes(t *testing.T) {
	tests := []struct {
		input string
		n     int
		want  string
	}{
		{"hello", 10, "hello"},
		{"hello", 3, "hel"},
		{"你好世界test", 4, "你好世界"},
		{"", 5, ""},
	}
	for _, tt := range tests {
		if got := truncateRunes(tt.input, tt.n); got != tt.want {
			t.Errorf("truncateRunes(%q, %d) = %q, want %q", tt.input, tt.n, got, tt.want)
		}
	}
}

func TestSanitizeCell(t *testing.T) {
	tests := []struct {
		input, want string
	}{
		{"hello | world", "hello / world"},
		{"line1\nline2", "line1 line2"},
		{"  spaces  ", "spaces"},
		{"clean", "clean"},
	}
	for _, tt := range tests {
		if got := sanitizeCell(tt.input); got != tt.want {
			t.Errorf("sanitizeCell(%q) = %q, want %q", tt.input, got, tt.want)
		}
	}
}

func TestBuildTable(t *testing.T) {
	reports := []Report{
		{
			ToolID:      "test-tool",
			SourceURL:   "https://github.com/example/test-tool",
			Category:    "Developer Tools",
			Description: "A test tool for testing purposes",
			Grade:       "A",
			Findings:    nil,
		},
	}
	table := buildTable(reports)
	if !strings.Contains(table, "test-tool") {
		t.Error("table should contain tool name")
	}
	if !strings.Contains(table, "Developer Tools") {
		t.Error("table should contain category")
	}
	if !strings.Contains(table, "None") {
		t.Error("table should show 'None' for no findings")
	}
}

func TestBuildTableCJKTruncation(t *testing.T) {
	reports := []Report{
		{
			ToolID:      "cjk-tool",
			SourceURL:   "https://example.com",
			Description: "这是一个很长很长的中文描述，它的长度超过了七十二个字符的限制，所以它需要被截断以适应表格的宽度要求。",
			Grade:       "B",
		},
	}
	table := buildTable(reports)

	for _, b := range []byte(table) {
		_ = b
	}
	// Verify the output is valid UTF-8 by trying to range over it
	for i, r := range table {
		if r == '\uFFFD' {
			t.Errorf("invalid UTF-8 at byte %d in table output", i)
			break
		}
	}
}

func TestBuildTablePipeInDescription(t *testing.T) {
	reports := []Report{
		{
			ToolID:      "pipe-tool",
			SourceURL:   "https://example.com",
			Description: "Supports A | B | C modes",
			Grade:       "A",
		},
	}
	table := buildTable(reports)
	if strings.Contains(table, "A | B") {
		t.Error("pipe characters in description should be sanitized")
	}
}

func TestKeyFindings(t *testing.T) {
	r := Report{
		Findings: []Finding{
			{ID: "AS-001"}, {ID: "AS-002"}, {ID: "AS-001"},
		},
	}
	got := keyFindings(r)
	if !strings.Contains(got, "AS-001") || !strings.Contains(got, "AS-002") {
		t.Errorf("keyFindings should contain AS-001 and AS-002, got %q", got)
	}
	// Should deduplicate
	if strings.Count(got, "AS-001") != 1 {
		t.Errorf("keyFindings should deduplicate, got %q", got)
	}

	empty := Report{}
	if got := keyFindings(empty); got != "None ✅" {
		t.Errorf("keyFindings(empty) = %q, want %q", got, "None ✅")
	}
}

func TestUpdateBadges(t *testing.T) {
	readme := `[![Tools Audited](https://img.shields.io/badge/tools%20audited-10-brightgreen)](./data/reports/)
[![Last Scan](https://img.shields.io/badge/last%20scan-2026--01--01-blue)](./data/reports/)`

	updated := updateBadges(readme, 42)
	if !strings.Contains(updated, "tools%20audited-42-brightgreen") {
		t.Error("badge count should be updated to 42")
	}
	if strings.Contains(updated, "2026--01--01") {
		t.Error("badge date should be updated to today")
	}
}

func TestLoadReports(t *testing.T) {
	dir := t.TempDir()

	good := `{"tool_id":"test","version":"1.0.0","grade":"A","risk_score":0,
	"scan_date":"2026-01-01T00:00:00Z","scanner":"AgentSentry/0.1.2",
	"source_url":"https://example.com","findings":[],"summary":{"critical":0,"high":0,"medium":0,"low":0,"info":0},
	"methodology":"https://example.com/methodology"}`
	os.WriteFile(filepath.Join(dir, "test.json"), []byte(good), 0o644)

	bad := `{not valid json`
	os.WriteFile(filepath.Join(dir, "bad.json"), []byte(bad), 0o644)

	reports, err := loadReports(dir)
	if err != nil {
		t.Fatalf("loadReports: %v", err)
	}
	if len(reports) != 1 {
		t.Errorf("expected 1 report, got %d", len(reports))
	}
	if reports[0].ToolID != "test" {
		t.Errorf("expected tool_id 'test', got %q", reports[0].ToolID)
	}
}

func TestUpdateRegistryDollarInDescription(t *testing.T) {
	dir := t.TempDir()
	reportsDir := filepath.Join(dir, "data", "reports")
	os.MkdirAll(reportsDir, 0o755)
	os.MkdirAll(filepath.Join(dir, "docs", "tools"), 0o755)

	report := `{"tool_id":"dollar-tool","version":"1.0.0","grade":"A","risk_score":0,
	"scan_date":"2026-01-01T00:00:00Z","scanner":"AgentSentry/0.1.2",
	"source_url":"https://example.com","findings":[],"summary":{"critical":0,"high":0,"medium":0,"low":0,"info":0},
	"methodology":"https://example.com/methodology","description":"Save $100 with ${HOME} expansion $1 $2"}`
	os.WriteFile(filepath.Join(reportsDir, "dollar-tool.json"), []byte(report), 0o644)

	readme := "# Test\n<!-- AGENTSENTRY:BEGIN -->\nold\n<!-- AGENTSENTRY:END -->\n"
	readmePath := filepath.Join(dir, "README.md")
	os.WriteFile(readmePath, []byte(readme), 0o644)

	if err := UpdateRegistry(reportsDir, readmePath); err != nil {
		t.Fatalf("UpdateRegistry: %v", err)
	}

	result, _ := os.ReadFile(readmePath)
	content := string(result)
	if !strings.Contains(content, "$100") {
		t.Error("$ in description should be preserved literally")
	}
	if !strings.Contains(content, "${HOME}") {
		t.Error("${HOME} in description should be preserved literally")
	}
}

func TestUpdateRegistry(t *testing.T) {
	dir := t.TempDir()
	reportsDir := filepath.Join(dir, "data", "reports")
	os.MkdirAll(reportsDir, 0o755)
	os.MkdirAll(filepath.Join(dir, "docs", "tools"), 0o755)

	report := `{"tool_id":"demo","version":"1.0.0","grade":"A","risk_score":0,
	"scan_date":"2026-01-01T00:00:00Z","scanner":"AgentSentry/0.1.2",
	"source_url":"https://example.com","findings":[],"summary":{"critical":0,"high":0,"medium":0,"low":0,"info":0},
	"methodology":"https://example.com/methodology","category":"Dev","description":"A demo tool"}`
	os.WriteFile(filepath.Join(reportsDir, "demo.json"), []byte(report), 0o644)

	readme := "# Test\n<!-- AGENTSENTRY:BEGIN -->\nold content\n<!-- AGENTSENTRY:END -->\n"
	readmePath := filepath.Join(dir, "README.md")
	os.WriteFile(readmePath, []byte(readme), 0o644)

	err := UpdateRegistry(reportsDir, readmePath)
	if err != nil {
		t.Fatalf("UpdateRegistry: %v", err)
	}

	result, _ := os.ReadFile(readmePath)
	if !strings.Contains(string(result), "demo") {
		t.Error("README should contain the demo tool")
	}
	if strings.Contains(string(result), "old content") {
		t.Error("old content should be replaced")
	}

	// Check detail page was created
	detailPath := filepath.Join(dir, "docs", "tools", "demo.md")
	if _, err := os.Stat(detailPath); os.IsNotExist(err) {
		t.Error("detail page should be created")
	}
}

func TestBuildDetailPage(t *testing.T) {
	r := Report{
		ToolID:      "test-tool",
		Grade:       "B",
		RiskScore:   15,
		Version:     "1.0.0",
		Vendor:      "example",
		Stars:       100,
		Language:    "Go",
		SourceURL:   "https://example.com",
		ScanDate:    time.Date(2026, 3, 1, 0, 0, 0, 0, time.UTC),
		Scanner:     "AgentSentry/0.1.2",
		Description: "A test tool",
		Findings: []Finding{
			{ID: "AS-002", Severity: "Medium", Title: "Test Finding", Description: "A test", Recommendation: "Fix it"},
		},
		Summary: struct {
			Critical int `json:"critical"`
			High     int `json:"high"`
			Medium   int `json:"medium"`
			Low      int `json:"low"`
			Info     int `json:"info"`
		}{Medium: 1},
	}
	page := buildDetailPage(r)
	if !strings.Contains(page, "test-tool") {
		t.Error("detail page should contain tool name")
	}
	if !strings.Contains(page, "AS-002") {
		t.Error("detail page should contain finding ID")
	}
	if !strings.Contains(page, "⭐ 100") {
		t.Error("detail page should show stars")
	}
}
