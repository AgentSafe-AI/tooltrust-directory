// pkg/smithery/fetcher.go
//
// Fetches MCP tool definitions from the Smithery registry
// (https://registry.smithery.ai) and writes a MCP-standard tools manifest to
// disk.  Used as a fallback when static manifests and live npm scanning both
// fail to produce scannable tool definitions.
//
// Smithery API endpoints used:
//   GET /servers/<qualifiedName>      – direct lookup by qualified name
//   GET /servers?q=<query>            – fuzzy search fallback
package smithery

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"time"
)

const (
	smitheryBaseURL = "https://registry.smithery.ai"
	smitheryTimeout = 30 * time.Second
)

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

// searchResponse is the shape of GET /servers?q=<query>.
type searchResponse struct {
	Servers []serverDetail `json:"servers"`
}

// FetchTools fetches MCP tool definitions for packageName from the Smithery
// registry and writes a tools manifest to outPath.
//
// Strategy:
//  1. Direct lookup: GET /servers/<packageName>
//  2. If direct lookup fails: GET /servers?q=<packageName> and use the first
//     result whose tools list is non-empty.
//
// Returns the fetched tools on success, or an error if neither strategy
// returns any tool definitions.
func FetchTools(packageName, outPath string) ([]Tool, error) {
	client := &http.Client{Timeout: smitheryTimeout}

	tools, err := fetchDirect(client, packageName)
	if err != nil {
		// Fallback: fuzzy search in case the qualified name differs from the
		// npm package name (e.g. "@scope/pkg" vs "scope-pkg").
		tools, err = fetchViaSearch(client, packageName)
		if err != nil {
			return nil, fmt.Errorf("smithery lookup failed for %q: %w", packageName, err)
		}
	}

	if len(tools) == 0 {
		return nil, fmt.Errorf("smithery: no tools found for %q", packageName)
	}

	if err := writeManifest(tools, outPath); err != nil {
		return nil, fmt.Errorf("smithery: write manifest to %s: %w", outPath, err)
	}

	return tools, nil
}

// fetchDirect attempts a direct server lookup by qualifiedName.
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

// fetchViaSearch falls back to the Smithery search endpoint and returns the
// tools from the first result that has a non-empty tools list.
func fetchViaSearch(client *http.Client, query string) ([]Tool, error) {
	apiURL := fmt.Sprintf("%s/servers?q=%s", smitheryBaseURL, url.QueryEscape(query))
	resp, err := client.Get(apiURL)
	if err != nil {
		return nil, fmt.Errorf("GET %s: %w", apiURL, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("search HTTP %d from %s: %s", resp.StatusCode, apiURL, body)
	}

	var sr searchResponse
	if err := json.NewDecoder(resp.Body).Decode(&sr); err != nil {
		return nil, fmt.Errorf("decode search response: %w", err)
	}

	for _, s := range sr.Servers {
		if len(s.Tools) > 0 {
			return s.Tools, nil
		}
	}
	return nil, fmt.Errorf("search for %q returned %d server(s) but none had tools", query, len(sr.Servers))
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
