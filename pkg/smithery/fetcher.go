// pkg/smithery/fetcher.go
//
// Fetches MCP tool definitions from the Smithery registry
// (https://registry.smithery.ai) and writes a MCP-standard tools manifest to
// disk.  Used as a fallback when static manifests and live npm scanning both
// fail to produce scannable tool definitions.
//
// Smithery API endpoints used:
//
//	GET /servers/<qualifiedName>         – direct lookup by qualified name
//	GET /servers?q=<keywords>&pageSize=N – keyword search (returns no tools inline)
//
// Two important Smithery API behaviours:
//   - The search endpoint returns server metadata but NEVER includes the tools
//     array.  To get tools you must do a second GET /servers/:qualifiedName.
//   - qualifiedNames are short registry slugs (e.g. "brave", "notion",
//     "clay-inc/clay-mcp") and do NOT match npm package names or GitHub repo
//     slugs directly.
//
// Strategy (tried in order, stopping at first success):
//  1. Direct lookup: exact packageName (works when packageName IS a qualifiedName)
//  2. Direct lookup: keyword-stripped name (e.g. "brave-search" from
//     "mcp-server-brave-search")
//  3. Two-phase search: keyword search → score results → resolve each
//     relevant hit via direct lookup until one returns tools
package smithery

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"strings"
	"time"
)

const (
	smitheryBaseURL = "https://registry.smithery.ai"
	smitheryTimeout = 30 * time.Second
	searchPageSize  = 10 // candidates to evaluate per keyword search
)

// mcpBoilerplatePrefixes are stripped from tool/package names before searching.
var mcpBoilerplatePrefixes = []string{
	"mcp-server-", "server-mcp-", "mcp-",
}

// mcpBoilerplateSuffixes are stripped from tool/package names before searching.
var mcpBoilerplateSuffixes = []string{
	"-mcp-server", "-mcp", "-server",
}

// stopWords are ignored when scoring search results for relevance.
var stopWords = map[string]bool{
	"mcp": true, "server": true, "api": true, "the": true,
	"and": true, "for": true, "with": true,
}

// Tool represents a single MCP tool definition as returned by the Smithery API.
type Tool struct {
	Name        string          `json:"name"`
	Description string          `json:"description"`
	InputSchema json.RawMessage `json:"inputSchema,omitempty"`
}

// ToolsManifest is the MCP-standard tools manifest written to disk.
// The tooltrust-scanner --input flag expects a JSON file whose top-level
// "tools" key holds an array of tool definitions.
type ToolsManifest struct {
	Tools []Tool `json:"tools"`
}

// serverDetail is the shape of GET /servers/:qualifiedName.
type serverDetail struct {
	QualifiedName string `json:"qualifiedName"`
	DisplayName   string `json:"displayName"`
	Description   string `json:"description"`
	Tools         []Tool `json:"tools"`
}

// searchServer is the per-entry shape returned by GET /servers?q=...
// The tools array is always absent from search results; use the qualifiedName
// for a subsequent direct lookup.
type searchServer struct {
	QualifiedName string `json:"qualifiedName"`
	DisplayName   string `json:"displayName"`
}

// searchResponse is the shape of GET /servers?q=<query>.
type searchResponse struct {
	Servers []searchServer `json:"servers"`
}

// FetchTools fetches MCP tool definitions for packageName from the Smithery
// registry and writes a tools manifest to outPath.
//
// Three strategies are tried in order:
//  1. Direct lookup using packageName as-is.
//  2. Direct lookup using keyword-stripped name (strips MCP boilerplate).
//  3. Two-phase: keyword search → score top results → resolve each relevant
//     hit via direct lookup until one yields tools.
func FetchTools(packageName, outPath string) ([]Tool, error) {
	client := &http.Client{Timeout: smitheryTimeout}

	// Strategy 1: exact direct lookup.
	if tools, err := fetchDirect(client, packageName); err == nil && len(tools) > 0 {
		return tools, writeManifest(tools, outPath)
	}

	// Strategy 2: direct lookup by keyword-stripped name.
	keywords := keywordsFromName(packageName)
	if keywords != "" && keywords != strings.ToLower(packageName) {
		slug := strings.ReplaceAll(keywords, " ", "-")
		if tools, err := fetchDirect(client, slug); err == nil && len(tools) > 0 {
			return tools, writeManifest(tools, outPath)
		}
	}

	// Strategy 3: two-phase keyword search + resolve.
	if keywords != "" {
		if tools, err := fetchByKeywords(client, keywords); err == nil && len(tools) > 0 {
			return tools, writeManifest(tools, outPath)
		}
	}

	return nil, fmt.Errorf("smithery: no tools found for %q", packageName)
}

// keywordsFromName strips MCP boilerplate from an npm package name, tool-id,
// or GitHub owner/repo slug to produce clean search keywords.
//
// Examples:
//
//	"@modelcontextprotocol/server-brave-search" → "brave search"
//	"mcp-server-brave-search"                  → "brave search"
//	"notion-mcp-server"                        → "notion"
//	"n8n-mcp"                                  → "n8n"
//	"clay-inc/clay-mcp"                        → "clay"
func keywordsFromName(name string) string {
	s := strings.ToLower(name)

	// Strip npm scope prefix or take last path segment: @scope/pkg → pkg
	if i := strings.LastIndex(s, "/"); i >= 0 {
		s = s[i+1:]
	}

	// Strip MCP boilerplate prefixes and suffixes.
	for _, pfx := range mcpBoilerplatePrefixes {
		s = strings.TrimPrefix(s, pfx)
	}
	for _, sfx := range mcpBoilerplateSuffixes {
		s = strings.TrimSuffix(s, sfx)
	}

	// Replace separators with spaces.
	s = strings.NewReplacer("-", " ", "_", " ").Replace(s)
	return strings.TrimSpace(s)
}

// relevantMatch returns true when a search result's qualifiedName or
// displayName shares at least one significant keyword with the search query.
// This prevents accepting obviously wrong results (e.g. "Maximum Sats" for a
// "mongodb" query).
func relevantMatch(qualifiedName, displayName, keywords string) bool {
	target := strings.ToLower(qualifiedName + " " + displayName)
	for _, word := range strings.Fields(keywords) {
		if len(word) < 3 {
			continue
		}
		if stopWords[word] {
			continue
		}
		if strings.Contains(target, word) {
			return true
		}
	}
	return false
}

// fetchByKeywords performs a keyword search against the Smithery registry,
// scores results for relevance, then resolves each relevant hit via a direct
// lookup until one returns a non-empty tools list.
func fetchByKeywords(client *http.Client, keywords string) ([]Tool, error) {
	apiURL := fmt.Sprintf("%s/servers?q=%s&pageSize=%d",
		smitheryBaseURL, url.QueryEscape(keywords), searchPageSize)

	resp, err := client.Get(apiURL)
	if err != nil {
		return nil, fmt.Errorf("GET %s: %w", apiURL, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("search HTTP %d: %s", resp.StatusCode, body)
	}

	var sr searchResponse
	if err := json.NewDecoder(resp.Body).Decode(&sr); err != nil {
		return nil, fmt.Errorf("decode search response: %w", err)
	}

	for _, s := range sr.Servers {
		if !relevantMatch(s.QualifiedName, s.DisplayName, keywords) {
			continue
		}
		tools, err := fetchDirect(client, s.QualifiedName)
		if err == nil && len(tools) > 0 {
			return tools, nil
		}
	}

	return nil, fmt.Errorf("search for %q returned no usable tool definitions", keywords)
}

// fetchDirect performs a single GET /servers/:name and returns the tools list.
func fetchDirect(client *http.Client, name string) ([]Tool, error) {
	apiURL := fmt.Sprintf("%s/servers/%s", smitheryBaseURL, url.PathEscape(name))
	resp, err := client.Get(apiURL)
	if err != nil {
		return nil, fmt.Errorf("GET %s: %w", apiURL, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusNotFound {
		return nil, fmt.Errorf("server %q not found (404)", name)
	}
	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("HTTP %d from %s: %s", resp.StatusCode, apiURL, body)
	}

	var s serverDetail
	if err := json.NewDecoder(resp.Body).Decode(&s); err != nil {
		return nil, fmt.Errorf("decode response from %s: %w", apiURL, err)
	}
	return s.Tools, nil
}

// writeManifest serialises tools as a MCP-standard tools manifest and writes
// it to path with 0644 permissions.
func writeManifest(tools []Tool, path string) error {
	manifest := ToolsManifest{Tools: tools}
	data, err := json.MarshalIndent(manifest, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0644)
}
