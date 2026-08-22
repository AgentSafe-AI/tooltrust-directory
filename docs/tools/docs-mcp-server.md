# 🟢 docs-mcp-server

> Grounded Docs MCP Server: Open-Source Alternative to Context7, Nia, and Ref.Tools

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `3.0.1` |
| **Vendor** | arabold |
| **Stars** | ⭐ 1672 |
| **npm Package** | `@arabold/docs-mcp-server` |
| **npm Downloads (30d)** | 13.0k |
| **Language** | TypeScript |
| **Source** | [docs-mcp-server](https://github.com/arabold/docs-mcp-server) |
| **Scan Date** | 2026-08-22 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/docs-mcp-server.json)*
