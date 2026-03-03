package analyzer

import (
	"os"
	"path/filepath"
	"testing"
)

func TestParseGoMod(t *testing.T) {
	dir := t.TempDir()
	gomod := `module example.com/test

go 1.21

require (
	github.com/gin-gonic/gin v1.9.1
	golang.org/x/text v0.14.0
)

require (
	github.com/indirect/dep v0.1.0 // indirect
)
`
	path := filepath.Join(dir, "go.mod")
	os.WriteFile(path, []byte(gomod), 0o644)

	deps, err := parseGoMod(path)
	if err != nil {
		t.Fatalf("parseGoMod: %v", err)
	}
	if len(deps) != 3 {
		t.Fatalf("expected 3 deps, got %d", len(deps))
	}
	if deps[0].Ecosystem != "Go" {
		t.Errorf("ecosystem should be Go, got %q", deps[0].Ecosystem)
	}
	if deps[0].Name != "github.com/gin-gonic/gin" {
		t.Errorf("unexpected dep name: %q", deps[0].Name)
	}
	if deps[0].Version != "1.9.1" {
		t.Errorf("version should be 1.9.1, got %q", deps[0].Version)
	}
}

func TestParseGoModMissing(t *testing.T) {
	_, err := parseGoMod("/nonexistent/go.mod")
	if err == nil {
		t.Error("expected error for missing file")
	}
}

func TestParsePackageJSON(t *testing.T) {
	dir := t.TempDir()
	pkg := `{
  "name": "test",
  "dependencies": {
    "express": "^4.18.2",
    "lodash": "~4.17.21"
  },
  "devDependencies": {
    "jest": ">=29.0.0"
  }
}`
	path := filepath.Join(dir, "package.json")
	os.WriteFile(path, []byte(pkg), 0o644)

	deps, err := parsePackageJSON(path)
	if err != nil {
		t.Fatalf("parsePackageJSON: %v", err)
	}
	if len(deps) != 3 {
		t.Fatalf("expected 3 deps, got %d", len(deps))
	}
	found := make(map[string]string)
	for _, d := range deps {
		found[d.Name] = d.Version
		if d.Ecosystem != "npm" {
			t.Errorf("ecosystem should be npm, got %q", d.Ecosystem)
		}
	}
	if found["express"] != "4.18.2" {
		t.Errorf("express version should be 4.18.2 (^ stripped), got %q", found["express"])
	}
}

func TestParsePackageJSONSkipsWildcards(t *testing.T) {
	dir := t.TempDir()
	pkg := `{"dependencies": {"star": "*", "http": "https://example.com/foo.tgz"}}`
	path := filepath.Join(dir, "package.json")
	os.WriteFile(path, []byte(pkg), 0o644)

	deps, err := parsePackageJSON(path)
	if err != nil {
		t.Fatalf("parsePackageJSON: %v", err)
	}
	if len(deps) != 0 {
		t.Errorf("expected 0 deps (wildcards and URLs skipped), got %d", len(deps))
	}
}

func TestScanDirNoManifests(t *testing.T) {
	dir := t.TempDir()
	findings, err := ScanDir(dir)
	if err != nil {
		t.Fatalf("ScanDir: %v", err)
	}
	if findings != nil {
		t.Errorf("expected nil findings for empty dir, got %d", len(findings))
	}
}

func TestCvssToSeverity(t *testing.T) {
	tests := []struct {
		score string
		want  string
	}{
		{"9.8", "Critical"},
		{"7.5", "High"},
		{"5.0", "Medium"},
		{"2.0", "Low"},
	}
	for _, tt := range tests {
		v := osvVuln{
			Severity: []struct {
				Type  string `json:"type"`
				Score string `json:"score"`
			}{{Type: "CVSS_V3", Score: tt.score}},
		}
		if got := cvssToSeverity(v); got != tt.want {
			t.Errorf("cvssToSeverity(%.1s) = %q, want %q", tt.score, got, tt.want)
		}
	}
}

func TestCvssToSeverityFallback(t *testing.T) {
	v := osvVuln{}
	if got := cvssToSeverity(v); got != "Medium" {
		t.Errorf("no CVSS should fall back to Medium, got %q", got)
	}
}

func TestParseCVSSScore(t *testing.T) {
	tests := []struct {
		raw  string
		want float64
	}{
		{"7.5", 7.5},
		{"CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H", 7.0},
		{"invalid", 0},
	}
	for _, tt := range tests {
		if got := parseCVSSScore(tt.raw); got != tt.want {
			t.Errorf("parseCVSSScore(%q) = %f, want %f", tt.raw, got, tt.want)
		}
	}
}

func TestToFinding(t *testing.T) {
	v := osvVuln{
		ID:      "GHSA-1234-5678-abcd",
		Summary: "Test vulnerability",
	}
	dep := Dep{Name: "express", Version: "4.17.1", Ecosystem: "npm"}
	f := toFinding(v, dep)
	if f.ID != "AS-004" {
		t.Errorf("finding ID should be AS-004, got %q", f.ID)
	}
	if f.Severity != "Medium" {
		t.Errorf("no CVSS should map to Medium, got %q", f.Severity)
	}
}
