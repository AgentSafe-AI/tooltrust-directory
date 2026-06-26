# 🟢 brave-search-mcp-server

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.0.85` |
| **Vendor** | brave |
| **Stars** | ⭐ 1239 |
| **npm Package** | `@brave/brave-search-mcp-server` |
| **npm Downloads (30d)** | 62.1k |
| **Language** | TypeScript |
| **Source** | [brave-search-mcp-server](https://github.com/brave/brave-search-mcp-server) |
| **Scan Date** | 2026-06-26 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

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
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/brave-search-mcp-server.json)*
