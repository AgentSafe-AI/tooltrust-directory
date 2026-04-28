# 🟢 tomohiro-owada-devrag

> Markdown vector search MCP server for Claude Code. Natural language search for markdown files using multilingual-e5-small embeddings.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.4.4` |
| **Vendor** | tomohiro-owada |
| **Stars** | ⭐ 54 |
| **Language** | Go |
| **Source** | [tomohiro-owada-devrag](https://github.com/tomohiro-owada/devrag) |
| **Scan Date** | 2026-04-28 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/tomohiro-owada-devrag.json)*
