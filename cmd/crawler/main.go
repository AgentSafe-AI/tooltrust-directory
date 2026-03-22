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
	"sort"
	"strings"
	"time"

	"github.com/AgentSafe-AI/tooltrust-directory/pkg/smithery"
	"github.com/google/go-github/v68/github"
	"golang.org/x/oauth2"
)

// ExistingReport captures the fields we need from a stored report.
type ExistingReport struct {
	ToolID      string `json:"tool_id"`
	Version     string `json:"version"`
	SourceURL   string `json:"source_url"`
	Vendor      string `json:"vendor"`
	Stars       int    `json:"stars"`
	Language    string `json:"language"`
	Category    string `json:"category"`
	Description string `json:"description"`
	License     string `json:"license"`
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
	Category     string    `json:"category"`
	Description  string    `json:"description"`
	License      string    `json:"license"`
	DiscoveredAt time.Time `json:"discovered_at"`
	// NPMPackage overrides auto-detection from package.json. Required for tools
	// that live inside a monorepo where the root package.json does not name
	// the individual MCP server (e.g. @modelcontextprotocol/server-filesystem
	// inside modelcontextprotocol/servers).
	NPMPackage string `json:"npm_package,omitempty"`
	// SmitheryQualifiedName is set for Smithery-native tools (and optionally
	// GitHub-discovered tools). The CI uses this for a direct Smithery lookup,
	// bypassing keyword search which can match the wrong server.
	SmitheryQualifiedName string `json:"smithery_qualified_name,omitempty"`
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

	seedPath := envOr("SEED_POPULAR_PATH", filepath.Join("data", "seed-popular.json"))
	seedRepos, _ := loadSeed(seedPath)
	log.Printf("Loaded %d seed repos from %s (mcpmarket/smithery popular)", len(seedRepos), seedPath)

	pending, err := discoverTools(ctx, client, existing, seedRepos)
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

// loadExistingReports returns a map of tool_id → ExistingReport for every JSON
// file in reportsDir. Missing directory is treated as empty (first run).
func loadExistingReports(dir string) (map[string]*ExistingReport, error) {
	out := make(map[string]*ExistingReport)

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
		out[r.ToolID] = &r
	}
	return out, nil
}

// seedFile is the shape of data/seed-popular.json.
type seedFile struct {
	Repos          []string       `json:"repos"`
	Overrides      []SeedOverride `json:"overrides"`
	SmitherySeeds  []SmitherySeed `json:"smithery_seeds"`
}

// SmitherySeed is an explicit Smithery-native tool entry — a server that lives
// on the Smithery platform and has no standalone GitHub repo.  The crawler
// queues these directly so popular tools (Instagram, Google Sheets, etc.) are
// always included regardless of whether the Smithery top-200 API is reachable.
type SmitherySeed struct {
	// QualifiedName is the Smithery registry slug (e.g. "instagram", "googlesheets").
	QualifiedName string `json:"qualified_name"`
	// ToolID is the kebab-case identifier used for the report filename.
	// Defaults to toToolID(QualifiedName) if omitted.
	ToolID      string `json:"tool_id,omitempty"`
	Description string `json:"description,omitempty"`
}

// SeedOverride is an explicit tool entry for tools that cannot be reliably
// discovered by GitHub search — typically individual servers inside a monorepo.
// All fields except Repo are required.
type SeedOverride struct {
	// Repo is the GitHub owner/repo that contains the tool (e.g. "modelcontextprotocol/servers").
	Repo string `json:"repo"`
	// ToolID is the canonical kebab-case identifier for the tool (e.g. "mcp-server-filesystem").
	ToolID string `json:"tool_id"`
	// NPMPackage is the exact npm package name used for live scanning (e.g. "@modelcontextprotocol/server-filesystem").
	NPMPackage string `json:"npm_package"`
	// SourceURL is the canonical URL for this specific tool within the repo.
	SourceURL string `json:"source_url"`
}

func loadSeed(path string) ([]string, error) {
	raw, err := os.ReadFile(path)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil, nil
		}
		return nil, err
	}
	var s seedFile
	if err := json.Unmarshal(raw, &s); err != nil {
		return nil, err
	}
	return s.Repos, nil
}

func loadSeedOverrides(path string) ([]SeedOverride, error) {
	raw, err := os.ReadFile(path)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil, nil
		}
		return nil, err
	}
	var s seedFile
	if err := json.Unmarshal(raw, &s); err != nil {
		return nil, err
	}
	return s.Overrides, nil
}

func loadSmitherySeeds(path string) ([]SmitherySeed, error) {
	raw, err := os.ReadFile(path)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil, nil
		}
		return nil, err
	}
	var s seedFile
	if err := json.Unmarshal(raw, &s); err != nil {
		return nil, err
	}
	return s.SmitherySeeds, nil
}

// discoverFromSeed fetches seed repos from GitHub and returns PendingScans for
// those needing (re-)scan. Popular MCPs from mcpmarket/smithery that may lack
// "mcp-server" in name/topic.
func discoverFromSeed(ctx context.Context, client *github.Client, seed []string, existing map[string]*ExistingReport, seen map[string]bool) ([]PendingScan, error) {
	var pending []PendingScan
	for _, spec := range seed {
		parts := strings.SplitN(spec, "/", 2)
		if len(parts) != 2 {
			continue
		}
		owner, repo := parts[0], parts[1]
		toolID := toToolID(repo)
		if seen[toolID] {
			continue
		}
		seen[toolID] = true

		ghRepo, _, err := client.Repositories.Get(ctx, owner, repo)
		if err != nil {
			log.Printf("seed %s: %v", spec, err)
			continue
		}
		if ghRepo.GetArchived() || ghRepo.GetFork() {
			continue
		}

		version, err := latestVersion(ctx, client, owner, repo)
		if err != nil {
			log.Printf("seed %s: no release/tag (%v)", toolID, err)
			continue
		}

		if cur, ok := existing[toolID]; ok && cur.Version == version {
			if os.Getenv("FORCE_RESCAN") != "true" {
				log.Printf("up-to-date %s @ %s (seed)", toolID, version)
				continue
			}
		}

		license := ""
		if ghRepo.GetLicense() != nil {
			license = ghRepo.GetLicense().GetSPDXID()
		}
		pending = append(pending, PendingScan{
			ToolID:       toolID,
			RepoOwner:    owner,
			RepoName:     repo,
			Version:      version,
			SourceURL:    ghRepo.GetHTMLURL(),
			Vendor:       owner,
			Stars:        ghRepo.GetStargazersCount(),
			Language:     ghRepo.GetLanguage(),
			Category:     languageToCategory(ghRepo.GetLanguage()),
			Description:  ghRepo.GetDescription(),
			License:      license,
			DiscoveredAt: time.Now().UTC(),
		})
	}
	return pending, nil
}

// discoverFromOverrides handles explicit monorepo tool entries from seed-popular.json.
// Each override specifies the containing repo, an explicit tool_id, and the npm
// package name — bypassing the auto-detection that fails for monorepos.
func discoverFromOverrides(ctx context.Context, client *github.Client, overrides []SeedOverride, existing map[string]*ExistingReport, seen map[string]bool) ([]PendingScan, error) {
	var pending []PendingScan
	for _, ov := range overrides {
		if ov.ToolID == "" || ov.Repo == "" || ov.NPMPackage == "" {
			log.Printf("seed override: skipping incomplete entry %+v", ov)
			continue
		}
		if seen[ov.ToolID] {
			continue
		}
		seen[ov.ToolID] = true

		parts := strings.SplitN(ov.Repo, "/", 2)
		if len(parts) != 2 {
			log.Printf("seed override: invalid repo %q", ov.Repo)
			continue
		}
		owner, repo := parts[0], parts[1]

		ghRepo, _, err := client.Repositories.Get(ctx, owner, repo)
		if err != nil {
			log.Printf("seed override %s: %v", ov.ToolID, err)
			continue
		}

		version, err := latestVersion(ctx, client, owner, repo)
		if err != nil {
			log.Printf("seed override %s: no release/tag (%v)", ov.ToolID, err)
			continue
		}

		if cur, ok := existing[ov.ToolID]; ok && cur.Version == version {
			if os.Getenv("FORCE_RESCAN") != "true" {
				log.Printf("up-to-date %s @ %s (override)", ov.ToolID, version)
				continue
			}
		}

		sourceURL := ov.SourceURL
		if sourceURL == "" {
			sourceURL = ghRepo.GetHTMLURL()
		}
		license := ""
		if ghRepo.GetLicense() != nil {
			license = ghRepo.GetLicense().GetSPDXID()
		}
		pending = append(pending, PendingScan{
			ToolID:       ov.ToolID,
			RepoOwner:    owner,
			RepoName:     repo,
			Version:      version,
			SourceURL:    sourceURL,
			Vendor:       owner,
			Stars:        ghRepo.GetStargazersCount(),
			Language:     ghRepo.GetLanguage(),
			Category:     languageToCategory(ghRepo.GetLanguage()),
			Description:  ghRepo.GetDescription(),
			License:      license,
			NPMPackage:   ov.NPMPackage,
			DiscoveredAt: time.Now().UTC(),
		})
		log.Printf("queued override %s @ %s (npm: %s)", ov.ToolID, version, ov.NPMPackage)
	}
	return pending, nil
}

// discoverFromSmithery fetches all Smithery servers by usage and queues
// those not already covered by GitHub/seed discovery. Tools that have a GitHub
// repo are enriched with stars/version data; Smithery-native tools (no GitHub)
// get queued with SmitheryQualifiedName so the CI can scan them directly.
func discoverFromSmithery(ctx context.Context, client *github.Client, existing map[string]*ExistingReport, seen map[string]bool) ([]PendingScan, error) {
	servers, err := smithery.ListAll()
	if err != nil {
		log.Printf("Smithery discovery: %v (skipping)", err)
		return nil, nil // non-fatal
	}
	log.Printf("Smithery discovery: fetched %d server(s)", len(servers))

	var pending []PendingScan
	for _, s := range servers {
		toolID := toToolID(s.QualifiedName)
		if seen[toolID] {
			continue
		}
		seen[toolID] = true

		sourceURL := "https://smithery.ai/server/" + s.QualifiedName
		scan := PendingScan{
			ToolID:                toolID,
			Version:               "smithery",
			SourceURL:             sourceURL,
			Description:           s.Description,
			DiscoveredAt:          time.Now().UTC(),
			SmitheryQualifiedName: s.QualifiedName,
		}

		// Try to resolve a GitHub owner/repo from repository field or qualifiedName.
		var ghOwner, ghRepo string
		if s.Repository != "" {
			if parts := parseGitHubURL(s.Repository); len(parts) == 2 {
				ghOwner, ghRepo = parts[0], parts[1]
			}
		}
		if ghOwner == "" {
			// qualifiedName is often "owner/repo" for GitHub-hosted tools.
			if parts := strings.SplitN(s.QualifiedName, "/", 2); len(parts) == 2 {
				ghOwner, ghRepo = parts[0], parts[1]
			}
		}

		if ghOwner != "" && ghRepo != "" {
			ghRepoData, _, err := client.Repositories.Get(ctx, ghOwner, ghRepo)
			if err == nil && !ghRepoData.GetArchived() && !ghRepoData.GetFork() {
				if ghRepoData.GetStargazersCount() < 50 {
					log.Printf("skip smithery %s — %d stars < 50", toolID, ghRepoData.GetStargazersCount())
					continue
				}
				version, verErr := latestVersion(ctx, client, ghOwner, ghRepo)
				if verErr == nil {
					if cur, ok := existing[toolID]; ok && cur.Version == version {
						if os.Getenv("FORCE_RESCAN") != "true" {
							log.Printf("up-to-date %s @ %s (smithery+gh)", toolID, version)
							continue
						}
					}
					license := ""
					if ghRepoData.GetLicense() != nil {
						license = ghRepoData.GetLicense().GetSPDXID()
					}
					scan.RepoOwner = ghOwner
					scan.RepoName = ghRepo
					scan.Version = version
					scan.SourceURL = ghRepoData.GetHTMLURL()
					scan.Vendor = ghOwner
					scan.Stars = ghRepoData.GetStargazersCount()
					scan.Language = ghRepoData.GetLanguage()
					scan.Category = languageToCategory(ghRepoData.GetLanguage())
					scan.Description = ghRepoData.GetDescription()
					scan.License = license
					log.Printf("queued smithery+gh %s @ %s (⭐%d)", toolID, version, scan.Stars)
				}
			}
		}

		if scan.RepoOwner == "" {
			if s.UseCount < 50 {
				log.Printf("skip smithery-native %s — %d useCount < 50", toolID, s.UseCount)
				continue
			}
			if _, ok := existing[toolID]; ok && os.Getenv("FORCE_RESCAN") != "true" {
				log.Printf("up-to-date %s (smithery-native)", toolID)
				continue
			}
			log.Printf("queued smithery-native %s", toolID)
		}

		pending = append(pending, scan)
	}
	return pending, nil
}

// parseGitHubURL extracts [owner, repo] from a GitHub URL.
// Handles https://github.com/owner/repo and github.com/owner/repo forms.
func parseGitHubURL(u string) []string {
	u = strings.TrimPrefix(u, "https://")
	u = strings.TrimPrefix(u, "http://")
	u = strings.TrimPrefix(u, "github.com/")
	parts := strings.SplitN(strings.TrimSuffix(u, "/"), "/", 2)
	if len(parts) == 2 && parts[0] != "" && parts[1] != "" {
		return parts
	}
	return nil
}

// discoverFromSmitherySeeds enqueues explicitly listed Smithery-native tools.
// These are popular servers (Instagram, Google Sheets, etc.) that live on the
// Smithery platform with no GitHub repo.  Seeding them explicitly guarantees
// discovery even when the Smithery top-200 API is unreachable.
func discoverFromSmitherySeeds(seeds []SmitherySeed, existing map[string]*ExistingReport, seen map[string]bool) []PendingScan {
	var pending []PendingScan
	for _, s := range seeds {
		toolID := s.ToolID
		if toolID == "" {
			toolID = toToolID(s.QualifiedName)
		}
		if seen[toolID] {
			continue
		}
		seen[toolID] = true
		if _, ok := existing[toolID]; ok && os.Getenv("FORCE_RESCAN") != "true" {
			log.Printf("up-to-date %s (smithery-seed)", toolID)
			continue
		}
		log.Printf("queued smithery-seed %s (qn=%s)", toolID, s.QualifiedName)
		pending = append(pending, PendingScan{
			ToolID:                toolID,
			Version:               "smithery",
			SourceURL:             "https://smithery.ai/server/" + s.QualifiedName,
			Description:           s.Description,
			DiscoveredAt:          time.Now().UTC(),
			SmitheryQualifiedName: s.QualifiedName,
		})
	}
	return pending
}

// discoverTools queries GitHub Search and seed file, merges results, and returns
// tools whose latest version is newer than (or absent from) existing.
func discoverTools(ctx context.Context, client *github.Client, existing map[string]*ExistingReport, seedRepos []string) ([]PendingScan, error) {
	seen := make(map[string]bool)

	var pending []PendingScan

	seedPath := envOr("SEED_POPULAR_PATH", filepath.Join("data", "seed-popular.json"))
	overrides, _ := loadSeedOverrides(seedPath)
	if len(overrides) > 0 {
		fromOverrides, err := discoverFromOverrides(ctx, client, overrides, existing, seen)
		if err != nil {
			return nil, fmt.Errorf("override discovery: %w", err)
		}
		pending = append(pending, fromOverrides...)
		log.Printf("Override discovery: %d tool(s) queued", len(fromOverrides))
	}

	// Smithery-native seeds: explicit popular tools that have no GitHub repo.
	// Processed before API-based discovery to guarantee inclusion.
	smitherySeeds, _ := loadSmitherySeeds(seedPath)
	fromSmitherySeeds := discoverFromSmitherySeeds(smitherySeeds, existing, seen)
	pending = append(pending, fromSmitherySeeds...)
	log.Printf("Smithery seed discovery: %d tool(s) queued", len(fromSmitherySeeds))

	if len(seedRepos) > 0 {
		fromSeed, err := discoverFromSeed(ctx, client, seedRepos, existing, seen)
		if err != nil {
			return nil, fmt.Errorf("seed discovery: %w", err)
		}
		pending = append(pending, fromSeed...)
	}

	// Smithery discovery: all tools by usage — covers the full Smithery catalog
	// (~4k tools) including those with few GitHub stars or no standalone repo.
	fromSmithery, err := discoverFromSmithery(ctx, client, existing, seen)
	if err != nil {
		log.Printf("Smithery discovery error: %v", err)
	}
	pending = append(pending, fromSmithery...)
	log.Printf("Smithery discovery: %d new tool(s) queued", len(fromSmithery))

	// GitHub Search: topic-based and name-based.
	// PerPage:100 (API max) sorted by stars captures the top ~400 repos across
	// 4 queries. A minimum-star threshold filters out stub/test repos that
	// crowd out genuine tools with lower star counts.
	const minStars = 100
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
			ListOptions: github.ListOptions{PerPage: 100},
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
			if repo.GetStargazersCount() < minStars {
				// Results are star-sorted; once we drop below the threshold
				// all remaining results are also below it.
				break
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

			if cur, ok := existing[toolID]; ok && cur.Version == version {
				if os.Getenv("FORCE_RESCAN") != "true" {
					log.Printf("up-to-date %s @ %s", toolID, version)
					continue
				}
			}

			license := ""
			if repo.GetLicense() != nil {
				license = repo.GetLicense().GetSPDXID()
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
				Category:     languageToCategory(repo.GetLanguage()),
				Description:  repo.GetDescription(),
				License:      license,
				DiscoveredAt: time.Now().UTC(),
			})
		}
	}

	// Backfill: when force-rescanning, re-queue any existing report that was
	// not reached by any discovery path above (e.g. tools that have fallen out
	// of Smithery top-200 and don't match GitHub search queries).  Without
	// this, tools like trendradar (49k stars but no "mcp-server" in the name
	// and no matching topic) are silently skipped on every force rescan.
	if os.Getenv("FORCE_RESCAN") == "true" {
		backfilled := 0
		for toolID, r := range existing {
			if seen[toolID] {
				continue
			}
			seen[toolID] = true
			// Parse owner/repo from source_url if it's a GitHub URL.
			owner, repo := parseGitHubOwnerRepo(r.SourceURL)
			pending = append(pending, PendingScan{
				ToolID:      toolID,
				RepoOwner:   owner,
				RepoName:    repo,
				Version:     r.Version,
				SourceURL:   r.SourceURL,
				Vendor:      r.Vendor,
				Stars:       r.Stars,
				Language:    r.Language,
				Category:    r.Category,
				Description: r.Description,
				License:     r.License,
				DiscoveredAt: time.Now().UTC(),
			})
			backfilled++
		}
		if backfilled > 0 {
			log.Printf("Backfill (FORCE_RESCAN): %d tool(s) re-queued from existing reports", backfilled)
		}
	}

	sort.Slice(pending, func(i, j int) bool {
		return pending[i].Stars > pending[j].Stars
	})
	return pending, nil
}

// parseGitHubOwnerRepo extracts the owner and repo name from a GitHub URL.
// Returns empty strings for non-GitHub or unparseable URLs.
func parseGitHubOwnerRepo(sourceURL string) (owner, repo string) {
	// e.g. https://github.com/sansan0/TrendRadar
	trimmed := strings.TrimPrefix(sourceURL, "https://github.com/")
	trimmed = strings.TrimPrefix(trimmed, "http://github.com/")
	if trimmed == sourceURL {
		return "", "" // not a GitHub URL
	}
	parts := strings.SplitN(strings.TrimSuffix(trimmed, "/"), "/", 2)
	if len(parts) != 2 || parts[0] == "" || parts[1] == "" {
		return "", ""
	}
	return parts[0], parts[1]
}

// latestVersion returns the semver string (without leading "v") of the latest
// release or tag. For repos that publish to npm but don't cut git releases
// (e.g. exa-mcp-server, mcp-server-browserbase), it falls back to the
// "version" field in the root package.json fetched from the default branch.
func latestVersion(ctx context.Context, client *github.Client, owner, repo string) (string, error) {
	release, _, err := client.Repositories.GetLatestRelease(ctx, owner, repo)
	if err == nil {
		return strings.TrimPrefix(release.GetTagName(), "v"), nil
	}

	tags, _, err := client.Repositories.ListTags(ctx, owner, repo, &github.ListOptions{PerPage: 1})
	if err != nil {
		return "", fmt.Errorf("ListTags: %w", err)
	}
	if len(tags) > 0 {
		return strings.TrimPrefix(tags[0].GetName(), "v"), nil
	}

	// Last resort: read version from package.json on the default branch.
	// This covers popular npm-published MCP servers that never cut git releases.
	return packageJSONVersion(ctx, client, owner, repo)
}

// packageJSONVersion fetches the root package.json from the repo's default
// branch and returns the "version" field, or an error if unavailable.
func packageJSONVersion(ctx context.Context, client *github.Client, owner, repo string) (string, error) {
	ghRepo, _, err := client.Repositories.Get(ctx, owner, repo)
	if err != nil {
		return "", fmt.Errorf("get repo: %w", err)
	}
	branch := ghRepo.GetDefaultBranch()
	if branch == "" {
		branch = "main"
	}

	fc, _, _, err := client.Repositories.GetContents(ctx, owner, repo, "package.json",
		&github.RepositoryContentGetOptions{Ref: branch})
	if err != nil {
		return "", fmt.Errorf("no release, tag, or package.json found")
	}
	content, err := fc.GetContent()
	if err != nil {
		return "", fmt.Errorf("decode package.json: %w", err)
	}

	var pkg struct {
		Version string `json:"version"`
	}
	if err := json.Unmarshal([]byte(content), &pkg); err != nil || pkg.Version == "" {
		return "", fmt.Errorf("no version in package.json")
	}
	return pkg.Version, nil
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

// languageToCategory provides a best-effort category from the primary language.
// This is overridden by mcpmarket.com data when available.
func languageToCategory(lang string) string {
	switch lang {
	case "TypeScript", "JavaScript":
		return "Developer Tools"
	case "Python":
		return "Developer Tools"
	case "Go":
		return "Developer Tools"
	default:
		return "Other"
	}
}

func envOr(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
