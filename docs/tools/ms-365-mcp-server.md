# 🟢 ms-365-mcp-server

> A Model Context Protocol (MCP) server for interacting with Microsoft 365 and Microsoft Office services through the Graph API

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.178.0` |
| **Vendor** | Softeria |
| **Stars** | ⭐ 1103 |
| **npm Package** | `@softeria/ms-365-mcp-server` |
| **npm Downloads (30d)** | 233.0k |
| **Language** | TypeScript |
| **Source** | [ms-365-mcp-server](https://github.com/Softeria/ms-365-mcp-server) |
| **Scan Date** | 2026-11-02 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ms-365-mcp-server.json)*
