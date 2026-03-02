// pkg/analyzer/osv.go
//
// AS-004 Supply Chain CVE scanner.
//
// Parses go.mod and/or package.json from a cloned repository, then batch-
// queries the open-source OSV API (https://osv.dev) to find known CVEs in
// every declared dependency. Returns findings ready to be merged into a
// ToolTrust report.
//
// OSV API reference: https://google.github.io/osv.dev/api/
package analyzer

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"time"
)

const (
	osvBatchURL    = "https://api.osv.dev/v1/querybatch"
	osvTimeout     = 30 * time.Second
	ruleID         = "AS-004"
	maxQueryBatch  = 100 // OSV hard limit per request
)

// Finding is a single AS-004 CVE finding ready for the ToolTrust report.
type Finding struct {
	ID             string `json:"id"`
	Severity       string `json:"severity"`
	Title          string `json:"title"`
	Description    string `json:"description"`
	Recommendation string `json:"recommendation"`
}

// Dep is one resolved dependency (name + version + ecosystem).
type Dep struct {
	Name      string
	Version   string
	Ecosystem string // "Go", "npm", "PyPI"
}

// ScanDir detects go.mod and/or package.json in dir and returns all AS-004
// findings. Returns an empty slice (not an error) when no manifest is found.
func ScanDir(dir string) ([]Finding, error) {
	var deps []Dep

	if d, err := parseGoMod(filepath.Join(dir, "go.mod")); err == nil {
		deps = append(deps, d...)
	}
	if d, err := parsePackageJSON(filepath.Join(dir, "package.json")); err == nil {
		deps = append(deps, d...)
	}

	if len(deps) == 0 {
		return nil, nil
	}
	return queryOSV(deps)
}

// ── manifest parsers ──────────────────────────────────────────────────────────

var goRequireRe = regexp.MustCompile(`^\s*([\w./\-]+)\s+v([\w.\-+]+)`)

func parseGoMod(path string) ([]Dep, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	var deps []Dep
	inRequire := false
	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "require (" {
			inRequire = true
			continue
		}
		if inRequire && line == ")" {
			inRequire = false
			continue
		}
		// single-line: require foo/bar v1.2.3
		if strings.HasPrefix(line, "require ") {
			line = strings.TrimPrefix(line, "require ")
		}
		if inRequire || strings.HasPrefix(line, "require ") {
			if m := goRequireRe.FindStringSubmatch(line); m != nil {
				deps = append(deps, Dep{
					Name:      m[1],
					Version:   m[2],
					Ecosystem: "Go",
				})
			}
		}
	}
	return deps, scanner.Err()
}

type pkgJSON struct {
	Dependencies    map[string]string `json:"dependencies"`
	DevDependencies map[string]string `json:"devDependencies"`
}

func parsePackageJSON(path string) ([]Dep, error) {
	raw, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	var p pkgJSON
	if err := json.Unmarshal(raw, &p); err != nil {
		return nil, err
	}

	var deps []Dep
	add := func(name, ver string) {
		// strip semver ranges: ^1.2.3 → 1.2.3
		ver = strings.TrimLeft(ver, "^~>=<")
		if ver == "" || ver == "*" || strings.HasPrefix(ver, "http") {
			return
		}
		deps = append(deps, Dep{Name: name, Version: ver, Ecosystem: "npm"})
	}
	for n, v := range p.Dependencies {
		add(n, v)
	}
	for n, v := range p.DevDependencies {
		add(n, v)
	}
	return deps, nil
}

// ── OSV API client ────────────────────────────────────────────────────────────

type osvQuery struct {
	Package struct {
		Name      string `json:"name"`
		Ecosystem string `json:"ecosystem"`
	} `json:"package"`
	Version string `json:"version"`
}

type osvBatchRequest struct {
	Queries []osvQuery `json:"queries"`
}

type osvBatchResponse struct {
	Results []struct {
		Vulns []osvVuln `json:"vulns"`
	} `json:"results"`
}

type osvVuln struct {
	ID       string `json:"id"`
	Summary  string `json:"summary"`
	Details  string `json:"details"`
	Severity []struct {
		Type  string `json:"type"`
		Score string `json:"score"`
	} `json:"severity"`
	Affected []struct {
		Package struct {
			Name      string `json:"name"`
			Ecosystem string `json:"ecosystem"`
		} `json:"package"`
		Versions []string `json:"versions"`
	} `json:"affected"`
}

func queryOSV(deps []Dep) ([]Finding, error) {
	client := &http.Client{Timeout: osvTimeout}
	var all []Finding

	// Process in batches of maxQueryBatch
	for i := 0; i < len(deps); i += maxQueryBatch {
		end := i + maxQueryBatch
		if end > len(deps) {
			end = len(deps)
		}
		batch := deps[i:end]

		queries := make([]osvQuery, len(batch))
		for j, d := range batch {
			queries[j].Package.Name = d.Name
			queries[j].Package.Ecosystem = d.Ecosystem
			queries[j].Version = d.Version
		}

		body, err := json.Marshal(osvBatchRequest{Queries: queries})
		if err != nil {
			return nil, fmt.Errorf("marshal osv request: %w", err)
		}

		resp, err := client.Post(osvBatchURL, "application/json", bytes.NewReader(body))
		if err != nil {
			return nil, fmt.Errorf("osv request: %w", err)
		}
		respBody, _ := io.ReadAll(resp.Body)
		resp.Body.Close()

		if resp.StatusCode != http.StatusOK {
			return nil, fmt.Errorf("osv returned HTTP %d: %s", resp.StatusCode, respBody)
		}

		var result osvBatchResponse
		if err := json.Unmarshal(respBody, &result); err != nil {
			return nil, fmt.Errorf("parse osv response: %w", err)
		}

		for j, r := range result.Results {
			dep := batch[j]
			for _, v := range r.Vulns {
				all = append(all, toFinding(v, dep))
			}
		}
	}
	return all, nil
}

func toFinding(v osvVuln, dep Dep) Finding {
	sev := cvssToSeverity(v)
	summary := v.Summary
	if summary == "" {
		summary = v.ID
	}

	desc := fmt.Sprintf("%s in %s@%s (%s ecosystem).",
		v.ID, dep.Name, dep.Version, dep.Ecosystem)
	if v.Details != "" {
		// keep details concise
		details := v.Details
		if len(details) > 300 {
			details = details[:297] + "..."
		}
		desc += " " + details
	}

	return Finding{
		ID:       ruleID,
		Severity: sev,
		Title:    fmt.Sprintf("Supply Chain CVE: %s in %s@%s", v.ID, dep.Name, dep.Version),
		Description: desc,
		Recommendation: fmt.Sprintf(
			"Upgrade %s to a version that resolves %s. "+
				"Check https://osv.dev/vulnerability/%s for patched versions. "+
				"Enable Dependabot or OSV-Scanner in CI to catch future CVEs automatically.",
			dep.Name, v.ID, v.ID),
	}
}

// cvssToSeverity maps CVSS score to ToolTrust severity labels.
func cvssToSeverity(v osvVuln) string {
	for _, s := range v.Severity {
		if s.Type == "CVSS_V3" || s.Type == "CVSS_V2" {
			score := parseCVSSScore(s.Score)
			switch {
			case score >= 9.0:
				return "Critical"
			case score >= 7.0:
				return "High"
			case score >= 4.0:
				return "Medium"
			default:
				return "Low"
			}
		}
	}
	// fallback: if no CVSS but there's a vuln, treat as Medium
	return "Medium"
}

// parseCVSSScore extracts the base score from a CVSS vector string or plain float.
// Handles both "7.5" and "CVSS:3.1/AV:N/AC:L/..." formats.
func parseCVSSScore(raw string) float64 {
	// Try plain float first
	if f, err := strconv.ParseFloat(raw, 64); err == nil {
		return f
	}
	// CVSS vector: look for /AV:... and extract the score prefix (not in vector)
	// OSV sometimes returns just the vector; we conservatively return 7.0 (High)
	if strings.HasPrefix(raw, "CVSS:") {
		return 7.0
	}
	return 0
}
