package main

import (
	"testing"
)

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
	as := AgentSentryOutput{
		Policies: nil,
		Summary:  ASSummary{},
	}
	report := transform(as, nil, "test", "1.0.0", "https://example.com",
		"vendor", 100, "MIT", "Go", "Dev", "A test tool")

	if report.Grade != "A" {
		t.Errorf("empty scan should be grade A, got %q", report.Grade)
	}
	if report.RiskScore != 0 {
		t.Errorf("empty scan should have score 0, got %d", report.RiskScore)
	}
	if report.Findings == nil {
		t.Error("findings should be [] not nil")
	}
	if len(report.Findings) != 0 {
		t.Errorf("expected 0 findings, got %d", len(report.Findings))
	}
}

func TestTransformMergesOSVFindings(t *testing.T) {
	as := AgentSentryOutput{}
	osv := []TTFinding{
		{ID: "AS-004", Severity: "High", Title: "CVE-1", Description: "a vuln in dep@1.0", Recommendation: "upgrade dep"},
		{ID: "AS-004", Severity: "Low", Title: "CVE-2", Description: "a minor vuln in dep2@2.0", Recommendation: "upgrade dep2"},
	}
	report := transform(as, osv, "test", "1.0.0", "https://example.com",
		"", 0, "", "", "", "")

	if len(report.Findings) != 2 {
		t.Fatalf("expected 2 findings, got %d", len(report.Findings))
	}
	if report.Summary.High != 1 {
		t.Errorf("expected 1 High, got %d", report.Summary.High)
	}
	if report.Summary.Low != 1 {
		t.Errorf("expected 1 Low, got %d", report.Summary.Low)
	}
	// 15 (High) + 2 (Low) = 17 → grade B
	if report.RiskScore != 17 {
		t.Errorf("expected score 17, got %d", report.RiskScore)
	}
	if report.Grade != "B" {
		t.Errorf("expected grade B, got %q", report.Grade)
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
	ttf := toTTFinding(f)
	if ttf.ID != "AS-001" {
		t.Errorf("expected AS-001, got %q", ttf.ID)
	}
	if ttf.Severity != "Critical" {
		t.Errorf("expected severity Critical, got %q", ttf.Severity)
	}
	if ttf.Title != "Tool Poisoning (Prompt Injection)" {
		t.Errorf("unexpected title %q", ttf.Title)
	}
}

func TestToTTFindingUnknownRule(t *testing.T) {
	f := ASFinding{
		RuleID:   "AS-999",
		Severity: "info",
		Code:     "unknown_check",
	}
	ttf := toTTFinding(f)
	if ttf.Title != "unknown_check" {
		t.Errorf("unknown rule should use code as title, got %q", ttf.Title)
	}
}
