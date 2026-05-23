# 🟢 pg-mcp-server

> MCP Server for Postgres

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.3.0` |
| **Vendor** | ericzakariasson |
| **Stars** | ⭐ 176 |
| **npm Package** | `pg-mcp-server` |
| **npm Downloads (30d)** | 609 |
| **Language** | TypeScript |
| **Source** | [pg-mcp-server](https://github.com/ericzakariasson/pg-mcp-server) |
| **Scan Date** | 2026-05-23 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/pg-mcp-server.json)*
