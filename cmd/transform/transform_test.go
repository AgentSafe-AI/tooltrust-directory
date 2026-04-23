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
		"vendor", 100, "@example/test-tool", 12000, "MIT", "Go", "Dev", "A test tool", "tooltrust-scanner/v0.2.0", false, nil)

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
		"", 0, "", 0, "", "", "", "", "", false, nil)

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

func TestTransform_CarriesToolContexts(t *testing.T) {
	as := ScannerOutput{
		Policies: []Policy{
			{
				ToolName:             "search_files",
				Action:               "REQUIRE_APPROVAL",
				Behavior:             []string{"reads_files", "uses_network"},
				Destinations:         []string{"dynamic URL input (url)"},
				DependencyVisibility: "No dependency data",
				DependencyNote:       "No metadata.dependencies or repo_url were exposed by this MCP server.",
				Score: Score{
					RiskScore: 25,
					Grade:     "C",
					Findings: []ASFinding{
						{RuleID: "AS-002", Severity: "HIGH", Code: "permission_network", Description: "tool declares network permission"},
					},
				},
			},
		},
	}

	report := transform(as, nil, nil, "demo", "1.0.0", "https://example.com",
		"vendor", 0, "", 0, "", "", "", "", "tooltrust-scanner/v0.3.3", false, nil)

	if len(report.ToolContexts) != 1 {
		t.Fatalf("expected 1 tool context, got %d", len(report.ToolContexts))
	}
	ctx := report.ToolContexts[0]
	if ctx.ToolName != "search_files" {
		t.Fatalf("unexpected tool context name %q", ctx.ToolName)
	}
	if ctx.Grade != "C" || ctx.Action != "REQUIRE_APPROVAL" {
		t.Fatalf("unexpected context decision %s/%s", ctx.Action, ctx.Grade)
	}
	if len(ctx.Behavior) != 2 || ctx.Behavior[0] != "reads_files" {
		t.Fatalf("unexpected behavior: %#v", ctx.Behavior)
	}
	if len(ctx.Destinations) != 1 || ctx.Destinations[0] != "dynamic URL input (url)" {
		t.Fatalf("unexpected destinations: %#v", ctx.Destinations)
	}
}

func TestTransform_EmbeddedMCPReplacesAS007(t *testing.T) {
	as := ScannerOutput{Policies: nil, Summary: ASSummary{}}
	report := transform(as, nil, nil, "nginx-ui", "1.0.0", "https://example.com",
		"vendor", 0, "", 0, "", "Go", "", "", "tooltrust-scanner/v0.3.5", true, []EmbedEvidence{
			{Kind: "import", File: "internal/mcp/server.go", Line: 14, Language: "go"},
			{Kind: "init", File: "internal/mcp/server.go", Line: 38, Language: "go"},
		})

	if report.Grade != "I" {
		t.Fatalf("embedded MCP scan should stay incomplete grade I, got %q", report.Grade)
	}
	if !report.ScanIncomplete || !report.HasEmbeddedMCP {
		t.Fatalf("expected scan_incomplete and has_embedded_mcp to be true")
	}
	if len(report.EmbeddedMCPEvidence) != 2 {
		t.Fatalf("expected 2 embedded MCP evidence entries, got %d", len(report.EmbeddedMCPEvidence))
	}

	hasAS018 := false
	hasAS007 := false
	for _, f := range report.Findings {
		if f.ID == "AS-018" {
			hasAS018 = true
		}
		if f.ID == "AS-007" {
			hasAS007 = true
		}
	}
	if !hasAS018 {
		t.Fatal("expected AS-018 finding")
	}
	if hasAS007 {
		t.Fatal("AS-007 should be replaced by AS-018 when embedded MCP is detected")
	}
}
