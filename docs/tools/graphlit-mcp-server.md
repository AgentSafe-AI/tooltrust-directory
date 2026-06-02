# 🟢 graphlit-mcp-server

> Model Context Protocol (MCP) Server for Graphlit Platform

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.0.1` |
| **Vendor** | graphlit |
| **Stars** | ⭐ 376 |
| **npm Package** | `graphlit-mcp-server` |
| **npm Downloads (30d)** | 1.1k |
| **Language** | TypeScript |
| **Source** | [graphlit-mcp-server](https://github.com/graphlit/graphlit-mcp-server) |
| **Scan Date** | 2026-06-02 |
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
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/graphlit-mcp-server.json)*
