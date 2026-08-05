# 🟢 mcp-server-fetch

> Model Context Protocol Servers

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `typescript-servers-0.6.2` |
| **Vendor** | modelcontextprotocol |
| **Stars** | ⭐ 89211 |
| **npm Package** | `mcp-server-fetch` |
| **npm Downloads (30d)** | 15.1k |
| **Language** | TypeScript |
| **Source** | [mcp-server-fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-fetch.json)*
