// Command repo-metadata enriches directory reports with current GitHub
// repository health metadata. It is deliberately separate from the scanner:
// security reports remain reproducible while GitHub fields can refresh daily.
package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/url"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"time"

	"github.com/google/go-github/v68/github"
	"golang.org/x/oauth2"
)

type report struct {
	ToolID    string `json:"tool_id"`
	SourceURL string `json:"source_url"`
}

type metadata struct {
	Stars                int    `json:"stars"`
	Forks                int    `json:"forks"`
	Contributors         int    `json:"contributors"`
	LastCommitAt         string `json:"last_commit_at,omitempty"`
	LatestReleaseVersion string `json:"latest_release_version,omitempty"`
	LatestReleaseTag     string `json:"latest_release_tag,omitempty"`
	LatestReleaseName    string `json:"latest_release_name,omitempty"`
	LatestReleaseAt      string `json:"last_release_at,omitempty"`
	LatestReleaseURL     string `json:"latest_release_url,omitempty"`
}

func main() {
	reportsDir := flag.String("reports-dir", envOr("REPORTS_DIR", "data/reports"), "directory containing report JSON files")
	maxRepos := flag.Int("max-repos", envInt("METADATA_MAX_REPOS", 0), "maximum repos to enrich; 0 means all")
	toolFilter := flag.String("tool-id", os.Getenv("METADATA_TOOL_ID"), "only enrich this report tool_id")
	flag.Parse()

	ctx := context.Background()
	client := github.NewClient(nil)
	if token := os.Getenv("GITHUB_TOKEN"); token != "" {
		client = github.NewClient(oauth2.NewClient(ctx, oauth2.StaticTokenSource(&oauth2.Token{AccessToken: token})))
	}

	paths, err := filepath.Glob(filepath.Join(*reportsDir, "*.json"))
	if err != nil {
		log.Fatal(err)
	}
	sort.Strings(paths)
	updated := 0
	seen := 0
	for _, path := range paths {
		if *maxRepos > 0 && seen >= *maxRepos {
			break
		}
		var r report
		raw, err := os.ReadFile(path)
		if err != nil {
			log.Printf("read %s: %v", path, err)
			continue
		}
		if json.Unmarshal(raw, &r) != nil || r.ToolID == "" {
			continue
		}
		if *toolFilter != "" && r.ToolID != *toolFilter {
			continue
		}
		owner, repo, ok := parseGitHubRepo(r.SourceURL)
		if !ok {
			continue
		}
		seen++
		m, err := collect(ctx, client, owner, repo)
		if err != nil {
			log.Printf("%s (%s/%s): %v", r.ToolID, owner, repo, err)
			continue
		}
		var doc map[string]json.RawMessage
		if err := json.Unmarshal(raw, &doc); err != nil {
			log.Printf("decode %s: %v", path, err)
			continue
		}
		set := func(key string, value any) {
			encoded, _ := json.Marshal(value)
			doc[key] = encoded
		}
		set("stars", m.Stars)
		set("forks", m.Forks)
		set("contributors", m.Contributors)
		set("last_commit_at", m.LastCommitAt)
		set("latest_release_version", m.LatestReleaseVersion)
		set("latest_release_tag", m.LatestReleaseTag)
		set("latest_release_name", m.LatestReleaseName)
		set("last_release_at", m.LatestReleaseAt)
		set("latest_release_url", m.LatestReleaseURL)
		out, err := json.MarshalIndent(doc, "", "  ")
		if err != nil {
			log.Printf("encode %s: %v", path, err)
			continue
		}
		out = append(out, '\n')
		if err := os.WriteFile(path, out, 0o644); err != nil {
			log.Printf("write %s: %v", path, err)
			continue
		}
		updated++
		log.Printf("updated %s: stars=%d forks=%d contributors=%d release=%s", r.ToolID, m.Stars, m.Forks, m.Contributors, m.LatestReleaseVersion)
	}
	log.Printf("GitHub metadata: updated %d/%d repositories", updated, seen)
}

func collect(ctx context.Context, client *github.Client, owner, repo string) (metadata, error) {
	r, _, err := client.Repositories.Get(ctx, owner, repo)
	if err != nil {
		return metadata{}, err
	}
	m := metadata{Stars: r.GetStargazersCount(), Forks: r.GetForksCount()}
	commits, _, err := client.Repositories.ListCommits(ctx, owner, repo, &github.CommitsListOptions{ListOptions: github.ListOptions{PerPage: 1}})
	if err != nil {
		return metadata{}, fmt.Errorf("last commit: %w", err)
	}
	if len(commits) > 0 && commits[0].GetCommit().GetAuthor().GetDate().Time.Unix() > 0 {
		m.LastCommitAt = commits[0].GetCommit().GetAuthor().GetDate().Time.UTC().Format(time.RFC3339)
	}

	release, _, releaseErr := client.Repositories.GetLatestRelease(ctx, owner, repo)
	if releaseErr != nil {
		fallback, _, listErr := client.Repositories.ListReleases(ctx, owner, repo, &github.ListOptions{PerPage: 1})
		if listErr != nil {
			return metadata{}, fmt.Errorf("release: %w", releaseErr)
		}
		if len(fallback) > 0 {
			release = fallback[0]
		}
	}
	if release != nil {
		m.LatestReleaseVersion = release.GetTagName()
		m.LatestReleaseTag = release.GetTagName()
		m.LatestReleaseName = release.GetName()
		if release.GetPublishedAt().Time.Unix() > 0 {
			m.LatestReleaseAt = release.GetPublishedAt().Time.UTC().Format(time.RFC3339)
		}
		m.LatestReleaseURL = release.GetHTMLURL()
	}

	contributors, response, err := client.Repositories.ListContributors(ctx, owner, repo, &github.ListContributorsOptions{ListOptions: github.ListOptions{PerPage: 100}})
	if err != nil {
		return metadata{}, fmt.Errorf("contributors: %w", err)
	}
	m.Contributors = len(contributors)
	if response != nil && response.LastPage > 1 {
		last, _, err := client.Repositories.ListContributors(ctx, owner, repo, &github.ListContributorsOptions{ListOptions: github.ListOptions{Page: response.LastPage, PerPage: 100}})
		if err != nil {
			return metadata{}, fmt.Errorf("contributors last page: %w", err)
		}
		m.Contributors = (response.LastPage-1)*100 + len(last)
	}
	return m, nil
}

func parseGitHubRepo(raw string) (string, string, bool) {
	u, err := url.Parse(raw)
	if err != nil || !strings.EqualFold(u.Host, "github.com") {
		return "", "", false
	}
	parts := strings.Split(strings.Trim(u.Path, "/"), "/")
	if len(parts) < 2 || parts[0] == "" || parts[1] == "" {
		return "", "", false
	}
	return parts[0], strings.TrimSuffix(parts[1], ".git"), true
}

func envOr(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}

func envInt(key string, fallback int) int {
	var value int
	if _, err := fmt.Sscanf(os.Getenv(key), "%d", &value); err == nil {
		return value
	}
	return fallback
}
