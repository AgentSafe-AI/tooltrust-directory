# 🟡 deepseek-mcp-server

> Model Context Protocol server for DeepSeek's advanced language models

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.5.0` |
| **Vendor** | DMontgomery40 |
| **Stars** | ⭐ 338 |
| **npm Package** | `deepseek-mcp-server` |
| **npm Downloads (30d)** | 1.7k |
| **Language** | TypeScript |
| **Source** | [deepseek-mcp-server](https://github.com/DMontgomery40/deepseek-mcp-server) |
| **Scan Date** | 2026-05-26 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "max_tokens" appears to accept a secret or credential

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/deepseek-mcp-server.json)*
