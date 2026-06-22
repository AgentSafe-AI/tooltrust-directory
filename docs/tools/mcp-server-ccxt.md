# 🟢 mcp-server-ccxt

> High-performance CCXT MCP server for cryptocurrency exchange integration

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.2.1` |
| **Vendor** | doggybee |
| **Stars** | ⭐ 139 |
| **npm Package** | `@mcpfun/mcp-server-ccxt` |
| **npm Downloads (30d)** | 734 |
| **Language** | TypeScript |
| **Source** | [mcp-server-ccxt](https://github.com/doggybee/mcp-server-ccxt) |
| **Scan Date** | 2026-06-22 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-ccxt.json)*
