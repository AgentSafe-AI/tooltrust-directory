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

// pagination is the shape of the pagination block in the Smithery list response.
type pagination struct {
	CurrentPage int `json:"currentPage"`
	PageSize    int `json:"pageSize"`
	TotalPages  int `json:"totalPages"`
	TotalCount  int `json:"totalCount"`
}

// listResponse is the top-level shape of GET /servers?pageSize=N&page=P.
type listResponse struct {
	Servers    []SmitheryServer `json:"servers"`
	Pagination pagination       `json:"pagination"`
}

const maxPageSize = 200 // Smithery API hard limit per request

// ListAll fetches every server from the Smithery registry by paginating
// through all pages (pageSize=200). The registry returns servers ordered by
// usage (call count) descending. Returns a nil slice (not an error) when the
// registry is unreachable, so callers can treat it as a non-fatal fallback.
func ListAll() ([]SmitheryServer, error) {
	client := &http.Client{Timeout: smitheryTimeout}
	var all []SmitheryServer

	for page := 1; ; page++ {
		apiURL := fmt.Sprintf("%s/servers?pageSize=%d&page=%d", smitheryBaseURL, maxPageSize, page)
		resp, err := client.Get(apiURL)
		if err != nil {
			return nil, fmt.Errorf("GET %s: %w", apiURL, err)
		}
		body, readErr := io.ReadAll(resp.Body)
		resp.Body.Close()
		if readErr != nil {
			return nil, fmt.Errorf("read page %d: %w", page, readErr)
		}
		if resp.StatusCode != http.StatusOK {
			return nil, fmt.Errorf("HTTP %d page %d: %s", resp.StatusCode, page, body)
		}

		var lr listResponse
		if err := json.Unmarshal(body, &lr); err != nil {
			return nil, fmt.Errorf("decode page %d: %w", page, err)
		}
		all = append(all, lr.Servers...)

		if page >= lr.Pagination.TotalPages || len(lr.Servers) == 0 {
			break
		}
	}
	return all, nil
}
