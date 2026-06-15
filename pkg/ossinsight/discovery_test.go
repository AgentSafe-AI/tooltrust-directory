package ossinsight

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestParseOSSInsightResponse(t *testing.T) {
	// Captured subset of the real OSSInsight response shape.
	raw := `{
		"type": "sql_endpoint",
		"data": {
			"columns": [
				{"col": "repo_id", "data_type": "BIGINT", "nullable": false},
				{"col": "repo_name", "data_type": "VARCHAR", "nullable": false},
				{"col": "current_period_growth", "data_type": "BIGINT", "nullable": false}
			],
			"rows": [
				{"repo_name": "upstash/context7", "current_period_growth": "100"},
				{"repo_name": "microsoft/playwright-mcp", "current_period_growth": "59"},
				{"repo_name": "github/github-mcp-server", "current_period_growth": "46"}
			]
		}
	}`

	var osr ossinsightResponse
	if err := json.Unmarshal([]byte(raw), &osr); err != nil {
		t.Fatalf("unmarshal failed: %v", err)
	}

	if len(osr.Data.Rows) != 3 {
		t.Fatalf("expected 3 rows, got %d", len(osr.Data.Rows))
	}

	rows := osr.Data.Rows
	if rows[0].RepoName != "upstash/context7" {
		t.Errorf("row[0].RepoName = %q, want %q", rows[0].RepoName, "upstash/context7")
	}
	if rows[0].CurrentPeriodGrowth != "100" {
		t.Errorf("row[0].CurrentPeriodGrowth = %q, want %q", rows[0].CurrentPeriodGrowth, "100")
	}

	// Verify the full parsing pipeline (repo list extraction).
	var repos []MCPRepo
	for _, row := range osr.Data.Rows {
		if row.RepoName == "" {
			continue
		}
		var growth int
		_, _ = fmt.Sscanf(row.CurrentPeriodGrowth, "%d", &growth)
		repos = append(repos, MCPRepo{RepoName: row.RepoName, Growth: growth})
	}

	if len(repos) != 3 {
		t.Fatalf("expected 3 MCPRepo entries, got %d", len(repos))
	}
	if repos[0].RepoName != "upstash/context7" {
		t.Errorf("repos[0].RepoName = %q, want %q", repos[0].RepoName, "upstash/context7")
	}
	if repos[0].Growth != 100 {
		t.Errorf("repos[0].Growth = %d, want %d", repos[0].Growth, 100)
	}
	if repos[1].RepoName != "microsoft/playwright-mcp" {
		t.Errorf("repos[1].RepoName = %q, want %q", repos[1].RepoName, "microsoft/playwright-mcp")
	}
}
