# 🟢 mongodb-mcp-server

> A Model Context Protocol server to connect to MongoDB databases and MongoDB Atlas Clusters.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.14.0-prerelease.2` |
| **Vendor** | mongodb-js |
| **Stars** | ⭐ 1077 |
| **npm Package** | `mongodb-mcp-server` |
| **npm Downloads (30d)** | 320.0k |
| **Language** | TypeScript |
| **Source** | [mongodb-mcp-server](https://github.com/mongodb-js/mongodb-mcp-server) |
| **Scan Date** | 2026-07-11 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mongodb-mcp-server.json)*
