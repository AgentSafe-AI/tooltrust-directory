# 🟢 mcp-neovim-server

> Control Neovim using Model Context Protocol (MCP) and the official neovim/node-client JavaScript library

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.5.5` |
| **Vendor** | bigcodegen |
| **Stars** | ⭐ 318 |
| **npm Package** | `mcp-neovim-server` |
| **npm Downloads (30d)** | 259 |
| **Language** | TypeScript |
| **Source** | [mcp-neovim-server](https://github.com/bigcodegen/mcp-neovim-server) |
| **Scan Date** | 2026-09-04 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-neovim-server.json)*
