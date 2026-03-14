# Developer Guide

Technical reference for contributors, integrators, and the ToolTrust Scanner pipeline.

---

## Repository Structure

```
tooltrust-directory/
├── cmd/
│   ├── analyze/main.go             # AS-004 OSV supply-chain CVE scanner
│   ├── crawler/main.go             # GitHub API discovery of MCP servers
│   ├── sync/main.go                # README + detail-page generator & git push
│   └── transform/main.go           # Scanner output → ToolTrust report converter
├── pkg/
│   ├── analyzer/osv.go             # OSV batch-query client
│   └── sync/github.go              # Registry table builder & git helpers
├── data/
│   └── reports/                    # One JSON report per audited tool
├── docs/
│   ├── methodology.md              # Scoring formula & check categories
│   ├── dev.md                      # This file
│   └── tools/                      # Auto-generated per-tool detail pages
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── SCAN_REQUEST.md
│   └── workflows/
│       └── daily-audit.yml         # Scheduled daily audit pipeline
├── report.schema.json              # JSON Schema Draft 2020-12
├── go.mod
└── README.md
```

---

## Data Pipeline

```
GitHub Search API
     │
     │  cmd/crawler discovers top MCP servers
     ▼
data/pending-scans.json
     │
     │  for each tool:
     │    1. git clone → ToolTrust Scanner (AS-001/002/003/005/010/011)
     │    2. go.mod / package.json → OSV API (AS-004 CVEs)
     │    3. cmd/transform merges findings → ToolTrust report
     ▼
data/reports/<tool-id>.json
     │
     │  cmd/sync regenerates
     ▼
README.md (registry table) + docs/tools/<id>.md (detail pages)
     │
     │  git commit & push
     ▼
Published to main branch
```

### Adding a Report Manually

1. Run ToolTrust Scanner against the target tool version.
2. Validate the output:

```bash
npx ajv-cli validate -s report.schema.json -d data/reports/<tool-id>.json --spec=draft2020
```

3. Commit the new file to `data/reports/`.
4. Run `go run ./cmd/sync` to regenerate the README table and detail pages.

---

## Report Schema

All reports must conform to [`report.schema.json`](../report.schema.json) (JSON Schema Draft 2020-12).

Key constraints:

| Field | Type | Notes |
|-------|------|-------|
| `tool_id` | `string` | kebab-case; must match filename without `.json` |
| `version` | `string` | Semver or tag string from the source repository |
| `grade` | `enum` | One of `A B C D F` |
| `risk_score` | `integer ≥ 0` | Derived from findings via methodology formula |
| `scanner` | `string` | Pattern `ToolTrust Scanner/\d+\.\d+\.\d+` (from [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner)) |
| `findings[].id` | `string` | Pattern `AS-\d{3}` |
| `findings[].severity` | `enum` | `Critical High Medium Low Info` |

Optional metadata fields: `category`, `vendor`, `stars`, `license`, `language`, `description`.

---

## Querying Reports Programmatically

```bash
# Single report
curl https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/data/reports/mcp-server-filesystem.json

# List all reports
curl https://api.github.com/repos/AgentSafe-AI/tooltrust-directory/contents/data/reports
```

From an AI Agent (MCP `fetch` tool):

```json
{
  "tool": "fetch",
  "arguments": {
    "url": "https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/data/reports/mcp-server-filesystem.json"
  }
}
```

---

## GitHub Actions: Daily Audit Pipeline

The workflow at `.github/workflows/daily-audit.yml`:

1. **Discover** — runs `cmd/crawler` to search GitHub for MCP servers (top 50 by stars), compares versions against existing reports, emits `pending-scans.json`.
2. **Scan** — for each pending tool: clones the repo, runs ToolTrust Scanner (tool-definition scan) and `cmd/analyze` (OSV CVE scan), then `cmd/transform` to produce a ToolTrust report.
3. **Publish** — runs `cmd/sync` to regenerate the README registry table and per-tool detail pages, commits and pushes to `main`.

Triggered by:
- **Cron**: daily at 00:00 UTC
- **Manual**: `workflow_dispatch` (with optional `force_rescan` flag)

Environment variables / secrets:

| Secret | Purpose |
|--------|---------|
| `GITHUB_TOKEN` | Automatic; used for GitHub API search and git push |
| `REGISTRY_PUSH_TOKEN` | Optional PAT with `contents: write` if branch protection is enabled |

---

## Local Development

### Prerequisites

- Go 1.24+ (see `go.mod`)
- Node.js (optional, for schema validation with `ajv-cli`)

### Build & Run

```bash
# Run the full sync locally (reads data/reports/, updates README + docs/tools/)
go run ./cmd/sync

# Run crawler locally (requires GITHUB_TOKEN)
GITHUB_TOKEN=ghp_xxx go run ./cmd/crawler

# Run OSV analysis on a cloned repo
go run ./cmd/analyze --dir /path/to/cloned-repo --output /tmp/osv-findings.json

# Run tests
go test ./...
```

### Validate Reports

```bash
npm install -g ajv-cli ajv-formats

for f in data/reports/*.json; do
  echo "Validating $f..."
  ajv validate -s report.schema.json -d "$f" --spec=draft2020
done
```

---

## License

Code and tooling: [MIT](../LICENSE)
Report data: [MIT](../LICENSE)
Scanner engine: © AgentSafe AI
