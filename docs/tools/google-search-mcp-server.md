# 🟢 google-search-mcp-server

> MCP Server built for use with Claude Code, Claude Desktop, VS Code, Cline  - enable google search and ability to follow links and research websites

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `3.0.0` |
| **Vendor** | mixelpixx |
| **Stars** | ⭐ 237 |
| **npm Package** | `google-search-mcp` |
| **npm Downloads (30d)** | 146 |
| **Language** | TypeScript |
| **Source** | [google-search-mcp-server](https://github.com/mixelpixx/Google-Search-MCP-Server) |
| **Scan Date** | 2026-06-15 |
| **Scanner** | tooltrust-scanner/v0.3.17 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/google-search-mcp-server.json)*
