# 🟢 deepseek-pp

> DeepSeek Web browser extension: AI agent workspace with MCP tools, memory, Skills, automation, web search, and conversation export.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `1.14.0` |
| **Vendor** | zhu1090093659 |
| **Stars** | ⭐ 1697 |
| **npm Package** | `deepseek-plus-plus` |
| **Language** | TypeScript |
| **Source** | [deepseek-pp](https://github.com/zhu1090093659/deepseek-pp) |
| **Scan Date** | 2026-08-28 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 2 |

## Detailed Findings

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "max_tokens" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/deepseek-pp.json)*
