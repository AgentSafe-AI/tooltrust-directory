// cmd/badge/main.go
//
// Generates Grade A–F SVG badges for ToolTrust Directory. Audited projects
// can add these badges to their README to show their security rating.
//
// Usage:
//
//	go run ./cmd/badge
//
// Output: docs/badges/grade-a.svg through grade-f.svg
package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

const (
	height   = 20
	fontSize = 11
)

var grades = []struct {
	grade  string
	color  string
	label  string
	title  string
}{
	{"S", "#FFD700", "Grade S", "Security audited by ToolTrust — Grade S"},
	{"A", "#4CAF50", "Grade A", "Security audited by ToolTrust — Grade A"},
	{"B", "#FFC107", "Grade B", "Security audited by ToolTrust — Grade B"},
	{"C", "#FF9800", "Grade C", "Security audited by ToolTrust — Grade C"},
	{"D", "#F44336", "Grade D", "Security audited by ToolTrust — Grade D"},
	{"F", "#B71C1C", "Grade F", "Security audited by ToolTrust — Grade F"},
}

func main() {
	outDir := "docs/badges"
	if err := os.MkdirAll(outDir, 0o755); err != nil {
		fmt.Fprintf(os.Stderr, "mkdir %s: %v\n", outDir, err)
		os.Exit(1)
	}

	baseURL := "https://github.com/AgentSafe-AI/tooltrust-directory"

	for _, g := range grades {
		svg := genBadge(g.grade, g.color, g.label, g.title, baseURL)
		path := filepath.Join(outDir, "grade-"+strings.ToLower(g.grade)+".svg")
		if err := os.WriteFile(path, []byte(svg), 0o644); err != nil {
			fmt.Fprintf(os.Stderr, "write %s: %v\n", path, err)
			os.Exit(1)
		}
		fmt.Printf("Generated %s\n", path)
	}
}

// genBadge returns a shields.io-style SVG badge. Left segment: "ToolTrust",
// right segment: "Grade X" with grade-specific color.
func genBadge(grade, color, label, title, link string) string {
	leftW := 72
	rightW := 54
	totalW := leftW + rightW

	return fmt.Sprintf(`<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" role="img" aria-label="%s" viewBox="0 0 %d %d">
  <title>%s</title>
  <a href="%s">
    <linearGradient id="g" x2="0" y2="100%%">
      <stop offset="0" stop-color="#f4f4f4"/>
      <stop offset="1" stop-color="#e0e0e0"/>
    </linearGradient>
    <rect width="%d" height="%d" fill="url(#g)"/>
    <rect x="%d" width="%d" height="%d" fill="%s"/>
    <rect width="%d" height="%d" rx="3" fill="none" stroke="#ccc" stroke-width="1"/>
    <text x="36" y="14" fill="#333" font-family="DejaVu Sans,Verdana,sans-serif" font-size="%d" text-anchor="middle">ToolTrust</text>
    <text x="99" y="14" fill="white" font-family="DejaVu Sans,Verdana,sans-serif" font-size="%d" text-anchor="middle" font-weight="bold">%s</text>
  </a>
</svg>
`, totalW, height, title, totalW, height,
		title, link,
		leftW, height, leftW, rightW, height, color,
		totalW, height,
		fontSize, fontSize, label,
	)
}
