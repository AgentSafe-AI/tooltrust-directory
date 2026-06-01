# 🟢 facebook-mcp-server

> Facebook MCP server for automating posts, comment moderation, insights, and sentiment filtering.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `sha-e4cebff4c43b` |
| **Vendor** | HagaiHen |
| **Stars** | ⭐ 164 |
| **Language** | Python |
| **Source** | [facebook-mcp-server](https://github.com/HagaiHen/facebook-mcp-server) |
| **Scan Date** | 2026-06-01 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/facebook-mcp-server.json)*
