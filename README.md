# ToolTrust Directory

> **The trust layer for AI Agents.** Security-audited MCP servers and AI Skills with transparent A–F risk grading.

[![Scanned by AgentSentry](https://img.shields.io/badge/scanned%20by-AgentSentry-blue)](https://github.com/AgentSafe-AI/agentsentry)
[![Reports](https://img.shields.io/badge/reports-3-brightgreen)](./data/reports/)
[![Methodology](https://img.shields.io/badge/methodology-v1.0-lightgrey)](./docs/methodology.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## What is ToolTrust?

In 2026, AI Agents invoke dozens of tools autonomously. A single compromised MCP server can exfiltrate files, leak credentials, or pivot across your infrastructure — without the user ever knowing.

ToolTrust is the **security rating registry** for the MCP ecosystem. Every report is:

- **Deterministic** — produced by [AgentSentry](https://github.com/AgentSafe-AI/agentsentry), a static-analysis engine written in Go.
- **Auditable** — stored as plain JSON in `data/reports/`, with full Git history.
- **Machine-readable** — your agent can `GET` any report directly from this repo.
- **Standardised** — all reports conform to [`report.schema.json`](./report.schema.json).

---

## Verified Tools

| Tool | Version | Grade | Risk Score | Scan Date | Report |
|------|---------|:-----:|:----------:|-----------|--------|
| [mcp-server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | 1.2.0 | **B** | 18 | 2026-03-01 | [↗](./data/reports/mcp-server-filesystem.json) |
| [mcp-server-brave-search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | 0.6.2 | **A** | 4 | 2026-03-01 | [↗](./data/reports/mcp-server-brave-search.json) |
| [mcp-server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github) | 2.0.0 | **C** | 34 | 2026-03-01 | [↗](./data/reports/mcp-server-github.json) |

### Grade Reference

| Grade | Risk Score | Meaning |
|-------|:----------:|---------|
| **A** | 0 – 9 | Minimal risk. Safe for production agents. |
| **B** | 10 – 24 | Low risk. Minor issues; review findings before deploying. |
| **C** | 25 – 49 | Moderate risk. Remediation recommended. |
| **D** | 50 – 74 | High risk. Sandboxed environments only. |
| **F** | 75+ | Critical risk. Do not use in agentic pipelines. |

---

## Query a Report Programmatically

```bash
# Fetch the filesystem server report
curl https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/data/reports/mcp-server-filesystem.json
```

From an AI Agent (MCP tool call example):

```json
{
  "tool": "fetch",
  "arguments": {
    "url": "https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/data/reports/mcp-server-filesystem.json"
  }
}
```

---

## Repository Structure

```
tooltrust-directory/
├── data/
│   └── reports/          # One JSON report per audited tool
├── docs/
│   └── methodology.md    # Scoring formula & check categories
├── .github/
│   └── ISSUE_TEMPLATE/
│       └── SCAN_REQUEST.md
├── report.schema.json    # JSON Schema for all reports
└── README.md
```

---

## Request a Scan

Want a tool audited? [Open a Scan Request →](.github/ISSUE_TEMPLATE/SCAN_REQUEST.md)

---

## Methodology

Risk scores are calculated using:

$$\text{RiskScore} = \sum_{i=1}^{n} \left( \text{SeverityWeight}_{i} \times \text{FindingCount}_{i} \right)$$

Full specification: [docs/methodology.md](./docs/methodology.md)

---

## Contributing

- **Submit a scan request:** open an issue with the `scan-request` template.
- **Dispute a finding:** open an issue referencing the finding ID (e.g. `AS-002`).
- **Integrate AgentSentry:** see the [AgentSentry repo](https://github.com/AgentSafe-AI/agentsentry) for the Go scanner.

---

## License

MIT © AgentSafe AI
