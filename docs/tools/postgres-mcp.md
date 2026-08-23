# 🟢 postgres-mcp

> Postgres MCP Pro provides configurable read/write access and performance analysis for you and your AI agents.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.3.0` |
| **Vendor** | crystaldba |
| **Stars** | ⭐ 3213 |
| **Language** | Python |
| **Source** | [postgres-mcp](https://github.com/crystaldba/postgres-mcp) |
| **Scan Date** | 2026-08-23 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/postgres-mcp.json)*
