// cmd/analyze/main.go
//
// CLI wrapper for pkg/analyzer. Scans a cloned repository directory for
// known CVEs in go.mod and package.json via the OSV API (AS-004), then
// writes the findings as a JSON array to stdout or a file.
//
// Usage:
//
//	go run ./cmd/analyze --dir /tmp/mcp-server-github
//	go run ./cmd/analyze --dir /tmp/mcp-server-github --output /tmp/osv-findings.json
package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/AgentSafe-AI/tooltrust-directory/pkg/analyzer"
)

func main() {
	dir    := flag.String("dir",    "",  "path to the cloned repository to scan (required)")
	output := flag.String("output", "-", "output path for findings JSON; use '-' for stdout")
	flag.Parse()

	if *dir == "" {
		flag.Usage()
		os.Exit(1)
	}

	log.Printf("AS-004 OSV scan: %s", *dir)
	findings, err := analyzer.ScanDir(*dir)
	if err != nil {
		log.Fatalf("OSV scan failed: %v", err)
	}
	log.Printf("Found %d CVE finding(s)", len(findings))

	data, err := json.MarshalIndent(findings, "", "  ")
	if err != nil {
		log.Fatalf("marshal findings: %v", err)
	}

	if *output == "-" {
		fmt.Println(string(data))
		return
	}
	if err := os.WriteFile(*output, data, 0o644); err != nil {
		log.Fatalf("write %s: %v", *output, err)
	}
	log.Printf("Wrote findings to %s", *output)
}
