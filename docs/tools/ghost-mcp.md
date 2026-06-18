# 🟢 ghost-mcp

> A Model Context Protocol (MCP) server for interacting with Ghost CMS through LLM interfaces like Claude. Allow you to control your Ghost blog by simply asking Claude etc.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.2.0` |
| **Vendor** | MFYDev |
| **Stars** | ⭐ 198 |
| **npm Package** | `@fanyangmeng/ghost-mcp` |
| **npm Downloads (30d)** | 5.2k |
| **Language** | TypeScript |
| **Source** | [ghost-mcp](https://github.com/MFYDev/ghost-mcp) |
| **Scan Date** | 2026-06-18 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ghost-mcp.json)*
