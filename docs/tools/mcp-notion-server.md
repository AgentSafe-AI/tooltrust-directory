# 🟢 mcp-notion-server

> A Model Context Protocol server for connecting Notion to MCP-compatible clients

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.0.2` |
| **Vendor** | suekou |
| **Stars** | ⭐ 919 |
| **npm Package** | `@suekou/mcp-notion-server` |
| **npm Downloads (30d)** | 9.0k |
| **Language** | TypeScript |
| **Source** | [mcp-notion-server](https://github.com/suekou/mcp-notion-server) |
| **Scan Date** | 2026-08-05 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-notion-server.json)*
