// pkg/smithery/discovery.go
//
// Fetches the top-N MCP servers from the Smithery registry by usage count.
// Used by the crawler to discover Smithery-popular tools that may not appear
// in GitHub search results (e.g. tools with few stars but high call volume).
package smithery

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

// SmitheryServer is a server entry returned by the Smithery registry listing.
type SmitheryServer struct {
	QualifiedName string `json:"qualifiedName"`
	DisplayName   string `json:"displayName"`
	Description   string `json:"description,omitempty"`
	UseCount      int    `json:"useCount,omitempty"`
	// Repository is a GitHub URL if the server has an associated repo.
	Repository string `json:"repository,omitempty"`
	Homepage   string `json:"homepage,omitempty"`
}

// listResponse is the top-level shape of GET /servers?pageSize=N.
type listResponse struct {
	Servers []SmitheryServer `json:"servers"`
}

// ListTopByUsage fetches the top n servers from the Smithery registry.
// The registry returns servers ordered by usage (call count) by default.
// Returns a nil slice (not an error) when the registry is unreachable,
// so callers can treat it as a non-fatal fallback.
func ListTopByUsage(n int) ([]SmitheryServer, error) {
	client := &http.Client{Timeout: smitheryTimeout}
	apiURL := fmt.Sprintf("%s/servers?pageSize=%d", smitheryBaseURL, n)

	resp, err := client.Get(apiURL)
	if err != nil {
		return nil, fmt.Errorf("GET %s: %w", apiURL, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("HTTP %d: %s", resp.StatusCode, body)
	}

	var lr listResponse
	if err := json.NewDecoder(resp.Body).Decode(&lr); err != nil {
		return nil, fmt.Errorf("decode: %w", err)
	}
	return lr.Servers, nil
}
