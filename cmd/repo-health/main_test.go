package main

import (
	"errors"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/google/go-github/v68/github"
)

func TestParseGitHubRepo(t *testing.T) {
	tests := []struct {
		url       string
		wantOwner string
		wantRepo  string
		wantOK    bool
	}{
		{"https://github.com/modelcontextprotocol/servers", "modelcontextprotocol", "servers", true},
		{"https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem", "modelcontextprotocol", "servers", true},
		{"https://github.com/modelcontextprotocol/servers?tab=readme", "modelcontextprotocol", "servers", true},
		{"https://github.com/modelcontextprotocol/servers#readme", "modelcontextprotocol", "servers", true},
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

func TestLoadReportRefsSkipsInvalidAndNonPublicReports(t *testing.T) {
	dir := t.TempDir()
	files := map[string]string{
		"broken.json":                  `{"tool_id":`,
		"private.json":                 `{"tool_id":"private","source_url":"https://github.com/acme/private","stars":49}`,
		"public.json":                  `{"tool_id":"public","source_url":"https://github.com/acme/public","stars":50}`,
		"request.json":                 `{"tool_id":"request","source_url":"https://github.com/acme/request","stars":1,"category":"Scan Request"}`,
		"incomplete.json":              `{"tool_id":"incomplete","source_url":"https://github.com/acme/incomplete","stars":100,"scan_incomplete":true}`,
		"incomplete-with-finding.json": `{"tool_id":"incomplete-with-finding","source_url":"https://github.com/acme/finding","stars":100,"scan_incomplete":true,"findings":[{}]}`,
	}
	for name, contents := range files {
		if err := os.WriteFile(filepath.Join(dir, name), []byte(contents), 0o644); err != nil {
			t.Fatal(err)
		}
	}

	reports, err := loadReportRefs(dir)
	if err != nil {
		t.Fatalf("loadReportRefs returned error: %v", err)
	}
	got := map[string]bool{}
	for _, report := range reports {
		got[report.ToolID] = true
	}
	for _, toolID := range []string{"public", "request", "incomplete-with-finding"} {
		if !got[toolID] {
			t.Errorf("expected %q to be included, got %#v", toolID, got)
		}
	}
	for _, toolID := range []string{"private", "incomplete"} {
		if got[toolID] {
			t.Errorf("expected %q to be excluded, got %#v", toolID, got)
		}
	}
}

func TestHealthCandidatesDeprioritizesPreviouslyFailedRefresh(t *testing.T) {
	now := time.Now().UTC()
	reports := []reportRef{
		{ToolID: "failed", SourceURL: "https://github.com/acme/failed", Stars: 100},
		{ToolID: "unseen", SourceURL: "https://github.com/acme/unseen", Stars: 50},
	}
	index := HealthIndex{Repositories: map[string]RepositoryHealth{
		"acme/failed": {Repository: "acme/failed", LastAttemptAt: now.Format(time.RFC3339)},
	}}

	candidates := healthCandidates(reports, index)
	if len(candidates) != 2 || candidates[0].Repository != "acme/unseen" {
		t.Fatalf("unseen repository should be prioritized ahead of a recently failed attempt: %#v", candidates)
	}
}

func TestResolveLastReleaseAt(t *testing.T) {
	published := time.Date(2026, time.August, 31, 12, 0, 0, 0, time.UTC)
	tests := []struct {
		name     string
		release  *github.RepositoryRelease
		err      error
		previous string
		want     string
		wantErr  bool
	}{
		{
			name:    "uses latest release",
			release: &github.RepositoryRelease{PublishedAt: &github.Timestamp{Time: published}},
			want:    published.Format(time.RFC3339),
		},
		{
			name:     "no release clears stale value",
			err:      &github.ErrorResponse{Response: &http.Response{StatusCode: http.StatusNotFound}},
			previous: "2026-01-01T00:00:00Z",
			want:     "",
		},
		{
			name:     "rate limit fails refresh",
			err:      &github.ErrorResponse{Response: &http.Response{StatusCode: http.StatusForbidden}},
			previous: "2026-01-01T00:00:00Z",
			wantErr:  true,
		},
		{
			name:    "network error fails refresh",
			err:     errors.New("network unavailable"),
			wantErr: true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := resolveLastReleaseAt(tt.release, tt.err, tt.previous)
			if (err != nil) != tt.wantErr {
				t.Fatalf("resolveLastReleaseAt() error = %v, wantErr %t", err, tt.wantErr)
			}
			if got != tt.want {
				t.Errorf("resolveLastReleaseAt() = %q, want %q", got, tt.want)
			}
		})
	}
}

func TestIsRateLimitError(t *testing.T) {
	tests := []struct {
		name string
		err  error
		want bool
	}{
		{name: "ordinary error", err: errors.New("network unavailable"), want: false},
		{name: "primary rate limit", err: fmt.Errorf("list repositories: %w", &github.RateLimitError{}), want: true},
		{name: "secondary rate limit", err: fmt.Errorf("list repositories: %w", &github.AbuseRateLimitError{}), want: true},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isRateLimitError(tt.err); got != tt.want {
				t.Errorf("isRateLimitError() = %t, want %t", got, tt.want)
			}
		})
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
