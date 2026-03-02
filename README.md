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
| [mcp-server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github) | 2.0.0 | **B** | 1 High, 1 Low | 2026-03-01 | [JSON](./data/reports/mcp-server-github.json) |
| [mcp-server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | 1.2.0 | **B** | 1 Medium | 2026-03-01 | [JSON](./data/reports/mcp-server-filesystem.json) |

<!-- AGENTSENTRY:END -->

---

## ⚖️ Grading System (A–F)

Risk scores are calculated using a weighted severity model:

$$\text{RiskScore} = \sum_{i=1}^{n} \left( \text{SeverityWeight}_{i} \times \text{FindingCount}_{i} \right)$$

| Grade | Score | Gateway | Weights: Crit·High·Med·Low |
|:-----:|:-----:|:-------:|----------------------------|
| **A** | 0 – 9 | ALLOW | 25 · 15 · 8 · 2 |
| **B** | 10 – 24 | ALLOW + rate limit | 25 · 15 · 8 · 2 |
| **C** | 25 – 49 | REQUIRE_APPROVAL | 25 · 15 · 8 · 2 |
| **D** | 50 – 74 | REQUIRE_APPROVAL | 25 · 15 · 8 · 2 |
| **F** | 75+ | BLOCK | 25 · 15 · 8 · 2 |

Full methodology: [docs/methodology.md](./docs/methodology.md)

---

## 🔍 Scanner Catalog

AgentSentry check IDs referenced in all reports:

| ID | Sev | Category | Detects |
|----|:---:|----------|---------|
| AS-001 | Critical | Tool Poisoning | Adversarial prompts hidden in tool descriptions (`ignore previous instructions`, `<INST>`) |
| AS-002 | High/Low | Permission Surface | `exec`, `network`, `db`, `fs` beyond stated purpose; over-broad input schema |
| AS-003 | High | Scope Mismatch | Tool name contradicts its permissions (e.g. `read_config` with `exec`) |
| AS-004 | High/Critical | Supply Chain | Known CVEs in bundled dependencies via [OSV](https://osv.dev) |
| AS-005 | High | Privilege Escalation | `admin`/`:write` OAuth scopes; `sudo`/`impersonate` in descriptions |
| AS-010 | Medium | Secret Handling | Input params accepting API keys/passwords; credentials logged insecurely |
| AS-011 | Low | DoS Resilience | No rate-limit, timeout, or retry config on network/exec tools |

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
