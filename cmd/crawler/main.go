// cmd/crawler/main.go
//
// Discovers popular MCP server repositories on GitHub, compares their latest
// release version against existing reports in data/reports/, and emits a
// data/pending-scans.json list of tools that need (re-)scanning.
//
// Usage:
//
//	GITHUB_TOKEN=<pat> go run ./cmd/crawler
package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"time"

	"github.com/google/go-github/v68/github"
	"golang.org/x/oauth2"
)

// ExistingReport captures the fields we need from a stored report.
type ExistingReport struct {
	ToolID  string `json:"tool_id"`
	Version string `json:"version"`
}

// PendingScan is one entry in the output pending-scans.json.
type PendingScan struct {
	ToolID       string    `json:"tool_id"`
	RepoOwner    string    `json:"repo_owner"`
	RepoName     string    `json:"repo_name"`
	Version      string    `json:"version"`
	SourceURL    string    `json:"source_url"`
	Vendor       string    `json:"vendor"`
	Stars        int       `json:"stars"`
	Language     string    `json:"language"`
	Description  string    `json:"description"`
	DiscoveredAt time.Time `json:"discovered_at"`
}

// nonAlphanumHyphen matches characters that should be stripped / replaced.
var nonAlphanumHyphen = regexp.MustCompile(`[^a-z0-9-]+`)

func main() {
	token := os.Getenv("GITHUB_TOKEN")
	reportsDir := envOr("REPORTS_DIR", "data/reports")
	outPath := envOr("PENDING_SCANS_PATH", filepath.Join("data", "pending-scans.json"))

	ctx := context.Background()
	client := newGitHubClient(ctx, token)

	existing, err := loadExistingReports(reportsDir)
	if err != nil {
		log.Fatalf("load existing reports: %v", err)
	}
	log.Printf("Loaded %d existing reports from %s", len(existing), reportsDir)

	pending, err := discoverTools(ctx, client, existing)
	if err != nil {
		log.Fatalf("tool discovery: %v", err)
	}
	log.Printf("Discovered %d tool(s) pending scan", len(pending))

	if err := writePendingScans(outPath, pending); err != nil {
		log.Fatalf("write pending scans: %v", err)
	}
	log.Printf("Wrote pending scans to %s", outPath)
}

// newGitHubClient returns an authenticated client when a token is provided,
// or an unauthenticated client (60 req/h) otherwise.
func newGitHubClient(ctx context.Context, token string) *github.Client {
	if token == "" {
		log.Println("GITHUB_TOKEN not set — using unauthenticated client (60 req/h)")
		return github.NewClient(nil)
	}
	ts := oauth2.StaticTokenSource(&oauth2.Token{AccessToken: token})
	return github.NewClient(oauth2.NewClient(ctx, ts))
}

// loadExistingReports returns a map of tool_id → version for every JSON file
// in reportsDir. Missing directory is treated as empty (first run).
func loadExistingReports(dir string) (map[string]string, error) {
	out := make(map[string]string)

	entries, err := os.ReadDir(dir)
	if errors.Is(err, os.ErrNotExist) {
		return out, nil
	}
	if err != nil {
		return nil, err
	}

	for _, e := range entries {
		if e.IsDir() || !strings.HasSuffix(e.Name(), ".json") {
			continue
		}
		raw, err := os.ReadFile(filepath.Join(dir, e.Name()))
		if err != nil {
			log.Printf("skip %s: %v", e.Name(), err)
			continue
		}
		var r ExistingReport
		if err := json.Unmarshal(raw, &r); err != nil {
			log.Printf("skip %s (parse error): %v", e.Name(), err)
			continue
		}
		out[r.ToolID] = r.Version
	}
	return out, nil
}

// discoverTools queries GitHub Search for mcp-server repositories and returns
// those whose latest release version is newer than (or absent from) existing.
func discoverTools(ctx context.Context, client *github.Client, existing map[string]string) ([]PendingScan, error) {
	var pending []PendingScan
	seen := make(map[string]bool)

	// Two complementary queries: topic-based and name-based.
	queries := []string{
		"topic:mcp-server",
		"mcp-server in:name language:TypeScript",
		"mcp-server in:name language:Python",
		"mcp-server in:name language:Go",
	}

	for _, q := range queries {
		opts := &github.SearchOptions{
			Sort:  "stars",
			Order: "desc",
			ListOptions: github.ListOptions{PerPage: 30},
		}
		result, resp, err := client.Search.Repositories(ctx, q, opts)
		if err != nil {
			if resp != nil && resp.StatusCode == http.StatusForbidden {
				log.Printf("rate-limited on query %q — sleeping 60s", q)
				time.Sleep(60 * time.Second)
			} else {
				log.Printf("search %q failed: %v", q, err)
			}
			continue
		}

		for _, repo := range result.Repositories {
			if repo.GetArchived() || repo.GetFork() {
				continue
			}
			toolID := toToolID(repo.GetName())
			if seen[toolID] {
				continue
			}
			seen[toolID] = true

			version, err := latestVersion(ctx, client, repo.GetOwner().GetLogin(), repo.GetName())
			if err != nil {
				log.Printf("skip %s: no release/tag (%v)", toolID, err)
				continue
			}

			if cur, ok := existing[toolID]; ok && cur == version {
				log.Printf("up-to-date %s @ %s", toolID, version)
				continue
			}

			pending = append(pending, PendingScan{
				ToolID:       toolID,
				RepoOwner:    repo.GetOwner().GetLogin(),
				RepoName:     repo.GetName(),
				Version:      version,
				SourceURL:    repo.GetHTMLURL(),
				Vendor:       repo.GetOwner().GetLogin(),
				Stars:        repo.GetStargazersCount(),
				Language:     repo.GetLanguage(),
				Description:  repo.GetDescription(),
				DiscoveredAt: time.Now().UTC(),
			})
		}
	}
	return pending, nil
}

// latestVersion returns the semver string (without leading "v") of the latest
// release, falling back to the most recent tag.
func latestVersion(ctx context.Context, client *github.Client, owner, repo string) (string, error) {
	release, _, err := client.Repositories.GetLatestRelease(ctx, owner, repo)
	if err == nil {
		return strings.TrimPrefix(release.GetTagName(), "v"), nil
	}

	tags, _, err := client.Repositories.ListTags(ctx, owner, repo, &github.ListOptions{PerPage: 1})
	if err != nil {
		return "", fmt.Errorf("ListTags: %w", err)
	}
	if len(tags) == 0 {
		return "", errors.New("no tags found")
	}
	return strings.TrimPrefix(tags[0].GetName(), "v"), nil
}

// toToolID normalises a GitHub repo name to a lowercase kebab-case string
// that can serve as a tool_id and as a filename base.
func toToolID(name string) string {
	s := strings.ToLower(name)
	s = strings.ReplaceAll(s, "_", "-")
	s = nonAlphanumHyphen.ReplaceAllString(s, "-")
	s = strings.Trim(s, "-")
	return s
}

func writePendingScans(path string, scans []PendingScan) error {
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	data, err := json.MarshalIndent(scans, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0o644)
}

func envOr(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
