// cmd/smithery-fetch/main.go
//
// Fetches MCP tool definitions from the Smithery registry and writes a
// MCP-standard tools manifest to disk.  Intended to be called from the
// daily-audit workflow as a fallback when live npm scanning fails.
//
// Usage:
//
//	go run ./cmd/smithery-fetch \
//	  --package <qualifiedName|npmName> \
//	  --output  /tmp/smithery-tools.json
//
// Exit codes:
//
//	0  success — manifest written
//	1  error   — no tools found or API unreachable
package main

import (
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/AgentSafe-AI/tooltrust-directory/pkg/smithery"
)

func main() {
	pkg := flag.String("package", "", "Smithery qualified name or npm package name (required)")
	out := flag.String("output", "/tmp/smithery-tools.json", "destination path for the MCP tools manifest")
	flag.Parse()

	if *pkg == "" {
		fmt.Fprintln(os.Stderr, "error: --package is required")
		flag.Usage()
		os.Exit(1)
	}

	tools, err := smithery.FetchTools(*pkg, *out)
	if err != nil {
		log.Fatalf("smithery-fetch: %v", err)
	}

	fmt.Printf("smithery-fetch: fetched %d tool(s) for %q → %s\n", len(tools), *pkg, *out)
}
