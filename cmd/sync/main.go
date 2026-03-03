// cmd/sync/main.go
//
// CLI entrypoint that:
//  1. Regenerates the AGENTSENTRY:BEGIN…END registry table in README.md.
//  2. Commits and pushes the updated README (and any new reports) to origin.
//
// Environment variables:
//
//	REPORTS_DIR   – path to data/reports/ (default: "data/reports")
//	README_PATH   – path to README.md    (default: "README.md")
//	REPO_DIR      – git working tree root (default: ".")
//	COMMIT_MSG    – override commit message
package main

import (
	"fmt"
	"log"
	"os"
	"time"

	syncer "github.com/AgentSafe-AI/tooltrust-directory/pkg/sync"
)

func main() {
	reportsDir := envOr("REPORTS_DIR", "data/reports")
	readmePath := envOr("README_PATH", "README.md")
	repoDir := envOr("REPO_DIR", ".")
	commitMsg := envOr("COMMIT_MSG", fmt.Sprintf(
		"chore: update security registry %s [skip ci]",
		time.Now().UTC().Format("2006-01-02"),
	))

	log.Printf("Regenerating registry table from %s …", reportsDir)
	if err := syncer.UpdateRegistry(reportsDir, readmePath); err != nil {
		log.Fatalf("UpdateRegistry: %v", err)
	}
	log.Println("README.md updated.")

	log.Println("Staging and pushing changes …")
	if err := syncer.GitCommitAndPush(repoDir, commitMsg, readmePath, reportsDir, "docs/"); err != nil {
		log.Fatalf("GitCommitAndPush: %v", err)
	}
	log.Println("Done.")
}

func envOr(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
