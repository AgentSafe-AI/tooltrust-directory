# 🟢 xero-mcp-server

> An MCP server that integrates with the MCP protocol. https://modelcontextprotocol.io/introduction

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.0.16` |
| **Vendor** | XeroAPI |
| **Stars** | ⭐ 307 |
| **npm Package** | `@xeroapi/xero-mcp-server` |
| **npm Downloads (30d)** | 10.2k |
| **Language** | TypeScript |
| **Source** | [xero-mcp-server](https://github.com/XeroAPI/xero-mcp-server) |
| **Scan Date** | 2026-06-17 |
| **Scanner** | tooltrust-scanner/v0.3.18 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/xero-mcp-server.json)*
