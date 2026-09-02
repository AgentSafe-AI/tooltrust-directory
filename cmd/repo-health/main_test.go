package main

import "testing"

func TestParseGitHubRepo(t *testing.T) {
	tests := []struct {
		url       string
		wantOwner string
		wantRepo  string
		wantOK    bool
	}{
		{"https://github.com/modelcontextprotocol/servers", "modelcontextprotocol", "servers", true},
		{"https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem", "modelcontextprotocol", "servers", true},
		{"https://smithery.ai/server/example/tool", "", "", false},
		{"not a URL", "", "", false},
	}

	for _, tt := range tests {
		owner, repo, ok := parseGitHubRepo(tt.url)
		if owner != tt.wantOwner || repo != tt.wantRepo || ok != tt.wantOK {
			t.Errorf("parseGitHubRepo(%q) = (%q, %q, %t), want (%q, %q, %t)", tt.url, owner, repo, ok, tt.wantOwner, tt.wantRepo, tt.wantOK)
		}
	}
}

func TestAppendSnapshotReplacesTodayAndKeepsRecentHistory(t *testing.T) {
	history := []HealthSnapshot{
		{Date: "2026-08-01", Stars: 10, OpenPullRequests: 1},
		{Date: "2026-08-02", Stars: 12, OpenPullRequests: 2},
	}

	history = appendSnapshot(history, HealthSnapshot{Date: "2026-08-02", Stars: 15, OpenPullRequests: 3}, 2)
	if len(history) != 2 || history[1].Stars != 15 || history[1].OpenPullRequests != 3 {
		t.Fatalf("same-day snapshot should replace the previous value: %#v", history)
	}

	history = appendSnapshot(history, HealthSnapshot{Date: "2026-08-03", Stars: 18, OpenPullRequests: 4}, 2)
	if len(history) != 2 || history[0].Date != "2026-08-02" || history[1].Date != "2026-08-03" {
		t.Fatalf("history should retain only the two newest dates: %#v", history)
	}
}
