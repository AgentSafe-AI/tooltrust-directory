# 🟢 backlog-mcp-server

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `v0.3.1` |
| **Vendor** | nulab |
| **Stars** | ⭐ 196 |
| **npm Package** | `backlog-mcp-server` |
| **npm Downloads (30d)** | 13.5k |
| **Language** | TypeScript |
| **Source** | [backlog-mcp-server](https://github.com/nulab/backlog-mcp-server) |
| **Scan Date** | 2026-06-02 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/backlog-mcp-server.json)*
