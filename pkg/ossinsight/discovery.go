// Package ossinsight fetches OSSInsight's curated "MCP Servers" collection
// (a high-signal, hand-curated list of canonical MCP server repos) for use as
// a crawler discovery seed.
package ossinsight

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"time"
)

const (
	ossinsightBaseURL      = "https://api.ossinsight.io/v1"
	ossinsightTimeout      = 30 * time.Second
	mcpServersCollectionID = 10105
)

// MCPRepo is one repo in the OSSInsight MCP Servers collection.
type MCPRepo struct {
	RepoName string // "owner/repo"
	Growth   int    // current-period star growth (trending signal)
}

// ossinsightResponse is the top-level shape of the OSSInsight ranking endpoint.
type ossinsightResponse struct {
	Type string `json:"type"`
	Data struct {
		Columns []struct {
			Col      string `json:"col"`
			DataType string `json:"data_type"`
		} `json:"columns"`
		Rows []struct {
			RepoName            string `json:"repo_name"`
			CurrentPeriodGrowth string `json:"current_period_growth"`
		} `json:"rows"`
	} `json:"data"`
}

// ListMCPServers fetches the MCP Servers collection ranked by star growth for
// the current calendar month, falling back to the previous month if the
// current month has no data yet. Returns a nil slice (not an error) on any
// failure, so callers treat it as a non-fatal seed.
func ListMCPServers() ([]MCPRepo, error) {
	client := &http.Client{Timeout: ossinsightTimeout}

	now := time.Now().UTC()
	month := now.Format("2006-01")
	repos, err := fetchForMonth(client, month)
	if err != nil {
		log.Printf("OSSInsight: fetch for %s failed: %v", month, err)
		return nil, nil
	}

	if len(repos) == 0 {
		// Current month has no data yet — fall back to previous month.
		prevMonth := now.AddDate(0, -1, 0).Format("2006-01")
		log.Printf("OSSInsight: no data for %s, falling back to %s", month, prevMonth)
		repos, err = fetchForMonth(client, prevMonth)
		if err != nil {
			log.Printf("OSSInsight: fetch for %s failed: %v", prevMonth, err)
			return nil, nil
		}
		if len(repos) == 0 {
			log.Printf("OSSInsight: no data for %s either, skipping", prevMonth)
			return nil, nil
		}
	}

	return repos, nil
}

// fetchForMonth performs one GET request for the given calendar month (YYYY-MM)
// and returns the parsed repo list.
func fetchForMonth(client *http.Client, month string) ([]MCPRepo, error) {
	apiURL := fmt.Sprintf("%s/collections/%d/ranking_by_stars/?calendar_month=%s",
		ossinsightBaseURL, mcpServersCollectionID, month)

	resp, err := client.Get(apiURL)
	if err != nil {
		return nil, fmt.Errorf("GET %s: %w", apiURL, err)
	}
	body, readErr := io.ReadAll(resp.Body)
	resp.Body.Close()
	if readErr != nil {
		return nil, fmt.Errorf("read response: %w", readErr)
	}
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("HTTP %d: %s", resp.StatusCode, body)
	}

	var osr ossinsightResponse
	if err := json.Unmarshal(body, &osr); err != nil {
		return nil, fmt.Errorf("decode response: %w", err)
	}

	var repos []MCPRepo
	for _, row := range osr.Data.Rows {
		if row.RepoName == "" {
			continue
		}
		var growth int
		fmt.Sscanf(row.CurrentPeriodGrowth, "%d", &growth)
		repos = append(repos, MCPRepo{
			RepoName: row.RepoName,
			Growth:   growth,
		})
	}
	return repos, nil
}
