# 🟢 foundry-mcp-server

> An experimental MCP Server for foundry built for Solidity devs

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.5` |
| **Vendor** | PraneshASP |
| **Stars** | ⭐ 250 |
| **npm Package** | `@pranesh.asp/foundry-mcp-server` |
| **npm Downloads (30d)** | 241 |
| **Language** | TypeScript |
| **Source** | [foundry-mcp-server](https://github.com/PraneshASP/foundry-mcp-server) |
| **Scan Date** | 2026-06-12 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/foundry-mcp-server.json)*
