# Developer Guide

Technical reference for contributors, integrators, and the AgentSentry pipeline.

---

## Repository Structure

```
tooltrust-directory/
├── data/
│   └── reports/                    # One JSON report per audited tool
│       ├── mcp-server-filesystem.json
│       ├── mcp-server-brave-search.json
│       └── mcp-server-github.json
├── docs/
│   ├── methodology.md              # Scoring formula & check categories
│   └── dev.md                      # This file
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── SCAN_REQUEST.md
│   └── workflows/
│       └── update-registry.yml     # (planned) Auto-update README registry table
├── report.schema.json              # JSON Schema Draft 2020-12
└── README.md
```

---

## Data Pipeline

```
AgentSentry (Go)
     │
     │  produces report.json
     ▼
data/reports/<tool-id>.json
     │
     │  validated against
     ▼
report.schema.json
     │
     │  triggers GitHub Actions
     ▼
README.md AGENTSENTRY:BEGIN…END block updated
```

### Adding a Report Manually

1. Run AgentSentry against the target tool version.
2. Validate the output:

```bash
npx ajv-cli validate -s report.schema.json -d data/reports/<tool-id>.json
```

3. Commit the new file to `data/reports/`.
4. Update the registry table in `README.md` inside the `AGENTSENTRY:BEGIN … END` markers.

---

## Report Schema

All reports must conform to [`report.schema.json`](../report.schema.json) (JSON Schema Draft 2020-12).

Key constraints:

| Field | Type | Notes |
|-------|------|-------|
| `tool_id` | `string` | kebab-case; must match filename without `.json` |
| `version` | `string` | semver pattern `\d+\.\d+\.\d+` |
| `grade` | `enum` | One of `A B C D F` |
| `risk_score` | `integer ≥ 0` | Derived from findings via methodology formula |
| `scanner` | `string` | Pattern `AgentSentry/\d+\.\d+\.\d+` |
| `findings[].id` | `string` | Pattern `AS-\d{3}` |
| `findings[].severity` | `enum` | `Critical High Medium Low Info` |

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

## GitHub Actions: Auto-Registry Update (Planned)

The workflow at `.github/workflows/update-registry.yml` will:

1. Trigger on `push` to `data/reports/**`.
2. Validate every modified report against `report.schema.json`.
3. Parse all reports in `data/reports/` and regenerate the Markdown table.
4. Commit the updated `README.md` back to `main` with the message `chore: update registry [skip ci]`.

Environment variables required in the repo secrets:

| Secret | Purpose |
|--------|---------|
| `AGENTSENTRY_WRITE_TOKEN` | GitHub PAT with `contents: write` scope for the auto-commit step |

---

## Local Development

No build step is required — all data is static JSON and Markdown.

To validate all reports at once:

```bash
# Install ajv-cli once
npm install -g ajv-cli ajv-formats

# Validate all reports
for f in data/reports/*.json; do
  echo "Validating $f..."
  ajv validate -s report.schema.json -d "$f" --spec=draft2020
done
```

---

## License

Report data: [CC BY 4.0](../LICENSE)
Scanner engine: © AgentSafe AI (proprietary)
