// Command repo-health refreshes GitHub repository health metadata used by the
// directory detail pages. It is intentionally separate from security scans so
// popularity and activity can update without rescanning every MCP server.
package main

import (
	"context"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"time"

	"github.com/AgentSafe-AI/tooltrust-directory/pkg/sync"
	"github.com/google/go-github/v68/github"
	"golang.org/x/oauth2"
)

const defaultHistoryDays = 28
const defaultRefreshLimit = 200
const refreshTimeout = 10 * time.Minute

type reportRef = sync.Report

type HealthSnapshot struct {
	Date             string `json:"date"`
	Stars            int    `json:"stars"`
	OpenPullRequests int    `json:"open_pull_requests"`
}

type RepositoryHealth struct {
	Repository       string           `json:"repository"`
	Stars            int              `json:"stars"`
	Forks            int              `json:"forks"`
	Contributors     int              `json:"contributors"`
	OpenIssues       int              `json:"open_issues"`
	OpenPullRequests int              `json:"open_pull_requests"`
	LastReleaseAt    string           `json:"last_release_at,omitempty"`
	LastCommitAt     string           `json:"last_commit_at,omitempty"`
	RefreshedAt      string           `json:"refreshed_at"`
	LastAttemptAt    string           `json:"last_attempt_at,omitempty"`
	History          []HealthSnapshot `json:"history,omitempty"`
}

type HealthIndex struct {
	SchemaVersion string                      `json:"schema_version"`
	RefreshedAt   string                      `json:"refreshed_at"`
	Repositories  map[string]RepositoryHealth `json:"repositories"`
}

type candidate struct {
	ToolID     string
	Repository string
	Stars      int
	CheckedAt  time.Time
}

func main() {
	reportsDir := flag.String("reports-dir", "data/reports", "directory containing ToolTrust report JSON files")
	output := flag.String("output", "data/repo-health.json", "health index JSON output path")
	limit := flag.Int("limit", defaultRefreshLimit, "maximum GitHub repositories to refresh per run; 0 refreshes all")
	historyDays := flag.Int("history-days", defaultHistoryDays, "number of daily snapshots to retain")
	publishOnly := flag.Bool("publish-only", false, "commit and push the output file using the repository sync helper")
	flag.Parse()

	if *publishOnly {
		if err := sync.GitCommitAndPush(".", "chore: refresh repository health [skip actions]", *output); err != nil {
			log.Fatalf("publish health index: %v", err)
		}
		return
	}

	if *limit < 0 || *historyDays < 1 {
		log.Fatal("limit must be >= 0 and history-days must be >= 1")
	}

	index, err := loadIndex(*output)
	if err != nil {
		log.Fatalf("load health index: %v", err)
	}
	reports, err := loadReportRefs(*reportsDir)
	if err != nil {
		log.Fatalf("load reports: %v", err)
	}
	candidates := healthCandidates(reports, index)
	if *limit > 0 && len(candidates) > *limit {
		candidates = candidates[:*limit]
	}
	if len(candidates) == 0 {
		log.Println("No GitHub repositories require health refresh")
		return
	}

	runCtx, cancel := context.WithTimeout(context.Background(), refreshTimeout)
	defer cancel()
	client := newGitHubClient(runCtx, os.Getenv("GITHUB_TOKEN"))
	now := time.Now().UTC()
	for _, c := range candidates {
		if err := runCtx.Err(); err != nil {
			log.Printf("repository health refresh stopped: %v", err)
			break
		}
		owner, repo, _ := strings.Cut(c.Repository, "/")
		previous := index.Repositories[c.Repository]
		health, err := fetchHealth(runCtx, client, owner, repo, previous, now, *historyDays)
		if err != nil {
			log.Printf("%s: %v", c.Repository, err)
			if runCtx.Err() != nil || isContextError(err) {
				log.Printf("repository health refresh stopped after %s", c.Repository)
				break
			}
			previous.Repository = c.Repository
			previous.LastAttemptAt = now.Format(time.RFC3339)
			index.Repositories[c.Repository] = previous
			if shouldStopRefresh(runCtx, err) {
				log.Printf("GitHub rate limit reached; stopping refresh after %s", c.Repository)
				break
			}
			continue
		}
		index.Repositories[c.Repository] = health
		log.Printf("refreshed %s", c.Repository)
	}
	index.SchemaVersion = "1.0"
	index.RefreshedAt = now.Format(time.RFC3339)
	if err := writeIndex(*output, index); err != nil {
		log.Fatalf("write health index: %v", err)
	}
}

func newGitHubClient(ctx context.Context, token string) *github.Client {
	if token == "" {
		return github.NewClient(nil)
	}
	ts := oauth2.StaticTokenSource(&oauth2.Token{AccessToken: token})
	return github.NewClient(oauth2.NewClient(ctx, ts))
}

func loadReportRefs(dir string) ([]reportRef, error) {
	entries, err := os.ReadDir(dir)
	if err != nil {
		return nil, err
	}
	var reports []reportRef
	for _, entry := range entries {
		if entry.IsDir() || !strings.HasSuffix(entry.Name(), ".json") {
			continue
		}
		data, err := os.ReadFile(filepath.Join(dir, entry.Name()))
		if err != nil {
			log.Printf("warning: skip %s: %v", entry.Name(), err)
			continue
		}
		var report reportRef
		if err := json.Unmarshal(data, &report); err != nil {
			log.Printf("warning: skip %s (parse error): %v", entry.Name(), err)
			continue
		}
		if report.ToolID != "" && sync.IsPublicReport(report) {
			reports = append(reports, report)
		}
	}
	return reports, nil
}

func loadIndex(path string) (HealthIndex, error) {
	index := HealthIndex{SchemaVersion: "1.0", Repositories: map[string]RepositoryHealth{}}
	data, err := os.ReadFile(path)
	if os.IsNotExist(err) {
		return index, nil
	}
	if err != nil {
		return index, err
	}
	if err := json.Unmarshal(data, &index); err != nil {
		return index, err
	}
	if index.Repositories == nil {
		index.Repositories = map[string]RepositoryHealth{}
	}
	return index, nil
}

func healthCandidates(reports []reportRef, index HealthIndex) []candidate {
	seen := map[string]bool{}
	var candidates []candidate
	for _, report := range reports {
		owner, repo, ok := parseGitHubRepo(report.SourceURL)
		if !ok {
			continue
		}
		name := owner + "/" + repo
		if seen[name] {
			continue
		}
		seen[name] = true
		var checkedAt time.Time
		if entry, ok := index.Repositories[name]; ok {
			checkedAt = laterTimestamp(entry.RefreshedAt, entry.LastAttemptAt)
		}
		candidates = append(candidates, candidate{ToolID: report.ToolID, Repository: name, Stars: report.Stars, CheckedAt: checkedAt})
	}
	sort.Slice(candidates, func(i, j int) bool {
		if candidates[i].CheckedAt.Equal(candidates[j].CheckedAt) {
			return candidates[i].Stars > candidates[j].Stars
		}
		if candidates[i].CheckedAt.IsZero() {
			return true
		}
		if candidates[j].CheckedAt.IsZero() {
			return false
		}
		return candidates[i].CheckedAt.Before(candidates[j].CheckedAt)
	})
	return candidates
}

func laterTimestamp(values ...string) time.Time {
	var latest time.Time
	for _, value := range values {
		parsed, err := time.Parse(time.RFC3339, value)
		if err == nil && parsed.After(latest) {
			latest = parsed
		}
	}
	return latest
}

func fetchHealth(ctx context.Context, client *github.Client, owner, repo string, previous RepositoryHealth, now time.Time, historyDays int) (RepositoryHealth, error) {
	ghRepo, _, err := client.Repositories.Get(ctx, owner, repo)
	if err != nil {
		return RepositoryHealth{}, fmt.Errorf("get repository: %w", err)
	}

	contributors, contributorResp, err := client.Repositories.ListContributors(ctx, owner, repo, &github.ListContributorsOptions{ListOptions: github.ListOptions{PerPage: 1}})
	if err != nil {
		return RepositoryHealth{}, fmt.Errorf("list contributors: %w", err)
	}
	contributorCount := len(contributors)
	if contributorResp != nil && contributorResp.LastPage > 0 {
		contributorCount = contributorResp.LastPage
	}

	prs, prResp, err := client.PullRequests.List(ctx, owner, repo, &github.PullRequestListOptions{State: "open", ListOptions: github.ListOptions{PerPage: 1}})
	if err != nil {
		return RepositoryHealth{}, fmt.Errorf("list open pull requests: %w", err)
	}
	openPRs := len(prs)
	if prResp != nil && prResp.LastPage > 0 {
		openPRs = prResp.LastPage
	}

	health := RepositoryHealth{
		Repository:       owner + "/" + repo,
		Stars:            ghRepo.GetStargazersCount(),
		Forks:            ghRepo.GetForksCount(),
		Contributors:     contributorCount,
		OpenIssues:       ghRepo.GetOpenIssuesCount(),
		OpenPullRequests: openPRs,
		LastCommitAt:     formatTimestamp(ghRepo.GetPushedAt().Time),
		RefreshedAt:      now.Format(time.RFC3339),
		LastAttemptAt:    now.Format(time.RFC3339),
		History: appendSnapshot(previous.History, HealthSnapshot{
			Date:             now.Format("2006-01-02"),
			Stars:            ghRepo.GetStargazersCount(),
			OpenPullRequests: openPRs,
		}, historyDays),
	}

	release, _, releaseErr := client.Repositories.GetLatestRelease(ctx, owner, repo)
	health.LastReleaseAt, err = resolveLastReleaseAt(release, releaseErr, previous.LastReleaseAt)
	if err != nil {
		log.Printf("%s/%s: %v; retaining the previous release timestamp", owner, repo, err)
	}
	return health, nil
}

func resolveLastReleaseAt(release *github.RepositoryRelease, releaseErr error, previous string) (string, error) {
	if releaseErr != nil {
		var githubErr *github.ErrorResponse
		if errors.As(releaseErr, &githubErr) && githubErr.Response != nil && githubErr.Response.StatusCode == http.StatusNotFound {
			return "", nil
		}
		return previous, fmt.Errorf("get latest release: %w", releaseErr)
	}
	if release == nil {
		return previous, nil
	}
	return formatTimestamp(release.GetPublishedAt().Time), nil
}

func isRateLimitError(err error) bool {
	var primary *github.RateLimitError
	if errors.As(err, &primary) {
		return true
	}
	var secondary *github.AbuseRateLimitError
	return errors.As(err, &secondary)
}

func isContextError(err error) bool {
	return errors.Is(err, context.Canceled) || errors.Is(err, context.DeadlineExceeded)
}

func shouldStopRefresh(ctx context.Context, err error) bool {
	return ctx.Err() != nil || isContextError(err) || isRateLimitError(err)
}

func formatTimestamp(t time.Time) string {
	if t.IsZero() {
		return ""
	}
	return t.UTC().Format(time.RFC3339)
}

func appendSnapshot(history []HealthSnapshot, next HealthSnapshot, keep int) []HealthSnapshot {
	result := append([]HealthSnapshot(nil), history...)
	if len(result) > 0 && result[len(result)-1].Date == next.Date {
		result[len(result)-1] = next
	} else {
		result = append(result, next)
	}
	if len(result) > keep {
		result = result[len(result)-keep:]
	}
	return result
}

func parseGitHubRepo(sourceURL string) (owner, repo string, ok bool) {
	parsed, err := url.Parse(sourceURL)
	if err != nil || parsed.Scheme != "https" || parsed.Hostname() != "github.com" {
		return "", "", false
	}
	parts := strings.Split(strings.Trim(parsed.Path, "/"), "/")
	if len(parts) < 2 || parts[0] == "" || parts[1] == "" {
		return "", "", false
	}
	return parts[0], strings.TrimSuffix(parts[1], ".git"), true
}

func writeIndex(path string, index HealthIndex) error {
	data, err := json.MarshalIndent(index, "", "  ")
	if err != nil {
		return err
	}
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	return os.WriteFile(path, append(data, '\n'), 0o644)
}
