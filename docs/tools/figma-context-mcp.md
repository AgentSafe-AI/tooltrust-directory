# 🟢 figma-context-mcp

> MCP server to provide Figma layout information to AI coding agents like Cursor

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.13.2` |
| **Vendor** | GLips |
| **Stars** | ⭐ 15289 |
| **npm Package** | `figma-developer-mcp` |
| **npm Downloads (30d)** | 383.8k |
| **Language** | TypeScript |
| **Source** | [figma-context-mcp](https://github.com/GLips/Figma-Context-MCP) |
| **Scan Date** | 2026-07-03 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/figma-context-mcp.json)*
