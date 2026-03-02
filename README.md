# 🛡️ ToolTrust Directory

**The Security Trust Layer for AI Agent Tools.**

Independent, automated security audits for MCP servers, OpenAI Skills, and AI agent tools.
Every rating is verified by [AgentSentry](https://github.com/AgentSafe-AI/agentsentry) — a deterministic static-analysis engine written in Go.

[![Grade A Tools](https://img.shields.io/badge/Grade%20A%20tools-1-brightgreen)](./data/reports/)
[![Last Scan](https://img.shields.io/badge/last%20scan-2026--03--01-blue)](./data/reports/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](./LICENSE)
[![Schema](https://img.shields.io/badge/schema-v1.0-orange)](./report.schema.json)

---

## 📊 Security Registry

<!-- AGENTSENTRY:BEGIN — Do not edit this section manually. Updated automatically by .github/workflows/update-registry.yml -->

| Tool | Version | Grade | Findings | Scan Date | Report |
|------|---------|:-----:|:--------:|-----------|--------|
| [mcp-server-brave-search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | 0.6.2 | **A** | 1 Low | 2026-03-01 | [JSON](./data/reports/mcp-server-brave-search.json) |
| [mcp-server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | 1.2.0 | **B** | 1 Medium | 2026-03-01 | [JSON](./data/reports/mcp-server-filesystem.json) |
| [mcp-server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github) | 2.0.0 | **C** | 1 High, 1 Medium | 2026-03-01 | [JSON](./data/reports/mcp-server-github.json) |

<!-- AGENTSENTRY:END -->

---

## ⚖️ Grading System (A–F)

Risk scores are calculated using a weighted severity model:

$$\text{RiskScore} = \sum_{i=1}^{n} \left( \text{SeverityWeight}_{i} \times \text{FindingCount}_{i} \right)$$

| Grade | Risk Score | Severity Weights Used | Meaning |
|:-----:|:----------:|----------------------|---------|
| **A** | 0 – 9 | Info (0) | Safe for production. No significant risks found. |
| **B** | 10 – 24 | Low (2) | Low risk. Review findings before deploying. |
| **C** | 25 – 49 | Medium (8) | Use with caution. Minor permission or scope overlaps. |
| **D** | 50 – 74 | High (15) | High risk. Sandboxed environments only. |
| **F** | 75+ | Critical (25) | **CRITICAL RISK.** Found active injection or unauthorized access. |

Full methodology: [docs/methodology.md](./docs/methodology.md)

---

## 🔍 Scanner Catalog

AgentSentry check IDs referenced in all reports:

| ID | Category | Description |
|----|----------|-------------|
| AS-001 | Tool Poisoning | Detects hidden adversarial prompts embedded in tool descriptions |
| AS-002 | Permission Surface | Detects path traversal and file-system escape vulnerabilities |
| AS-003 | Scope Mismatch | Detects contradictions between tool names and actual API schemas |
| AS-004 | Supply Chain | Checks for known CVEs in underlying dependencies |
| AS-005 | Privilege Escalation | Verifies OAuth / token scopes are not broader than necessary |
| AS-010 | Secret Handling | Identifies API keys or credentials at risk of leakage |
| AS-011 | DoS Resilience | Detects missing rate-limit and retry handling |

Full catalog: [docs/methodology.md#3-check-categories](./docs/methodology.md#3-check-categories)

---

## 🤝 Contribute

**Request a scan** — [open an issue](https://github.com/AgentSafe-AI/tooltrust-directory/issues/new?template=SCAN_REQUEST.md) with the tool's public URL and version.

**Dispute a finding** — open an issue referencing the finding ID (e.g. `AS-002`).

**Integrate AgentSentry** — see [docs/dev.md](./docs/dev.md) for the data pipeline and schema spec.

---

## ⚙️ Automation

The registry table above is kept up to date by a GitHub Actions workflow:

```
.github/workflows/update-registry.yml   ← triggers on AgentSentry scan completion
```

When AgentSentry publishes a new report to `data/reports/`, the workflow:
1. Validates the report against `report.schema.json`
2. Re-generates the `AGENTSENTRY:BEGIN … END` block in this README
3. Opens a PR (or commits directly to `main` if auto-merge is enabled)

> Workflow not yet active — tracked in [#1](https://github.com/AgentSafe-AI/tooltrust-directory/issues/1).

---

*Reports are licensed [CC BY 4.0](./LICENSE). Scanner engine © AgentSafe AI.*
