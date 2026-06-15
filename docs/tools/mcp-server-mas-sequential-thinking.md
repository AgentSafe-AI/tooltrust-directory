# 🟢 mcp-server-mas-sequential-thinking

> An advanced sequential thinking process using a Multi-Agent System (MAS) built with the Agno framework and served via MCP.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.8.0` |
| **Vendor** | FradSer |
| **Stars** | ⭐ 303 |
| **Language** | Python |
| **Source** | [mcp-server-mas-sequential-thinking](https://github.com/FradSer/mcp-server-mas-sequential-thinking) |
| **Scan Date** | 2026-06-15 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-mas-sequential-thinking.json)*
