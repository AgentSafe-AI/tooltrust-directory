package main

import (
	"testing"
)

func TestComputeGrade(t *testing.T) {
	tests := []struct {
		score    int
		findings []TTFinding
		want     string
	}{
		{0, nil, "A"},
		{0, []TTFinding{}, "A"},
		{0, []TTFinding{{ID: "AS-004"}}, "A"}, // score 0 but has findings → A
		{5, []TTFinding{{ID: "AS-002"}}, "A"},
		{10, nil, "B"},
	}
	for _, tt := range tests {
		if got := computeGrade(tt.score, tt.findings); got != tt.want {
			t.Errorf("computeGrade(%d, len=%d) = %q, want %q", tt.score, len(tt.findings), got, tt.want)
		}
	}
}

func TestGradeForReport(t *testing.T) {
	tests := []struct {
		score          int
		findings       []TTFinding
		scanIncomplete bool
		want           string
	}{
		{0, nil, false, "A"},
		{0, nil, true, "I"},
		{10, []TTFinding{{ID: "AS-002"}}, true, "I"},
		{50, []TTFinding{{ID: "AS-001"}}, false, "D"},
	}
	for _, tt := range tests {
		if got := gradeForReport(tt.score, tt.findings, tt.scanIncomplete); got != tt.want {
			t.Errorf("gradeForReport(%d, len=%d, incomplete=%v) = %q, want %q",
				tt.score, len(tt.findings), tt.scanIncomplete, got, tt.want)
		}
	}
}

func TestScoreToGrade(t *testing.T) {
	tests := []struct {
		score int
		want  string
	}{
		{0, "A"}, {9, "A"},
		{10, "B"}, {24, "B"},
		{25, "C"}, {49, "C"},
		{50, "D"}, {74, "D"},
		{75, "F"}, {100, "F"},
	}
	for _, tt := range tests {
		if got := scoreToGrade(tt.score); got != tt.want {
			t.Errorf("scoreToGrade(%d) = %q, want %q", tt.score, got, tt.want)
		}
	}
}

func TestSeverityWeight(t *testing.T) {
	tests := []struct {
		sev  string
		want int
	}{
		{"Critical", 25}, {"critical", 25},
		{"High", 15}, {"high", 15},
		{"Medium", 8}, {"medium", 8},
		{"Low", 2}, {"low", 2},
		{"Info", 0}, {"info", 0},
		{"Unknown", 0}, {"", 0},
	}
	for _, tt := range tests {
		if got := severityWeight(tt.sev); got != tt.want {
			t.Errorf("severityWeight(%q) = %d, want %d", tt.sev, got, tt.want)
		}
	}
}

func TestTitleCase(t *testing.T) {
	tests := []struct {
		input, want string
	}{
		{"high", "High"},
		{"CRITICAL", "Critical"},
		{"", ""},
		{"medium", "Medium"},
	}
	for _, tt := range tests {
		if got := titleCase(tt.input); got != tt.want {
			t.Errorf("titleCase(%q) = %q, want %q", tt.input, got, tt.want)
		}
	}
}

func TestTransformEmptyInput(t *testing.T) {
	as := ScannerOutput{
		Policies: nil,
		Summary:  ASSummary{},
	}
	report := transform(as, nil, nil, "test", "1.0.0", "https://example.com",
		"vendor", 100, "MIT", "Go", "Dev", "A test tool", "tooltrust-scanner/v0.2.0")

	// Empty scan with no tools → scan_incomplete → grade I
	if report.Grade != "I" {
		t.Errorf("empty scan should be grade I (incomplete), got %q", report.Grade)
	}
	if !report.ScanIncomplete {
		t.Error("empty scan should have ScanIncomplete=true")
	}
}

func TestTransformMergesOSVFindings(t *testing.T) {
	as := ScannerOutput{}
	osv := []TTFinding{
		{ID: "AS-004", Severity: "High", Title: "CVE-1", Description: "a vuln in dep@1.0", Recommendation: "upgrade dep"},
		{ID: "AS-004", Severity: "Low", Title: "CVE-2", Description: "a minor vuln in dep2@2.0", Recommendation: "upgrade dep2"},
	}
	report := transform(as, osv, nil, "test", "1.0.0", "https://example.com",
		"", 0, "", "", "", "", "")

	// Even with 0 policies, OSV findings means the scan did something.
	// But scanIncomplete is true (no tool definitions found), so grade is I.
	// The OSV findings still get merged.
	if len(report.Findings) < 2 {
		t.Fatalf("expected at least 2 OSV findings, got %d", len(report.Findings))
	}
	if report.Summary.High != 1 {
		t.Errorf("expected 1 High, got %d", report.Summary.High)
	}
	if report.Summary.Low != 1 {
		t.Errorf("expected 1 Low, got %d", report.Summary.Low)
	}
}

func TestToTTFindingKnownRule(t *testing.T) {
	f := ASFinding{
		RuleID:      "AS-001",
		Severity:    "CRITICAL",
		Code:        "tool_poisoning",
		Description: "Found adversarial prompt",
		Location:    "tools.json:5",
	}
	ttf := toTTFinding(f, "my-tool")
	if ttf.ID != "AS-001" {
		t.Errorf("expected AS-001, got %q", ttf.ID)
	}
	if ttf.Severity != "Critical" {
		t.Errorf("expected severity Critical, got %q", ttf.Severity)
	}
	if ttf.Title != "Tool Poisoning (Prompt Injection)" {
		t.Errorf("unexpected title %q", ttf.Title)
	}
	if ttf.ToolName != "my-tool" {
		t.Errorf("expected tool name 'my-tool', got %q", ttf.ToolName)
	}
}

func TestToTTFindingUnknownRule(t *testing.T) {
	f := ASFinding{
		RuleID:   "AS-999",
		Severity: "info",
		Code:     "unknown_check",
	}
	ttf := toTTFinding(f, "")
	if ttf.Title != "unknown_check" {
		t.Errorf("unknown rule should use code as title, got %q", ttf.Title)
	}
}
