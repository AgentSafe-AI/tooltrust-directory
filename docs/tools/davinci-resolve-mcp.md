# 🟢 davinci-resolve-mcp

> MCP server integration for DaVinci Resolve Studio

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.98.2` |
| **Vendor** | samuelgursky |
| **Stars** | ⭐ 2184 |
| **npm Package** | `davinci-resolve-mcp` |
| **npm Downloads (30d)** | 20.9k |
| **Language** | Python |
| **Source** | [davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) |
| **Scan Date** | 2026-08-19 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/davinci-resolve-mcp.json)*
