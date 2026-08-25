# 🟢 mcp-server-excel

> Automate real Microsoft Excel with AI via MCP Server or CLI — Power Query, DAX, VBA, PivotTables, charts, and 326 operations.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.0.1` |
| **Vendor** | sbroenne |
| **Stars** | ⭐ 565 |
| **npm Package** | `excelmcp` |
| **Language** | C# |
| **Source** | [mcp-server-excel](https://github.com/sbroenne/mcp-server-excel) |
| **Scan Date** | 2026-08-25 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-excel.json)*
