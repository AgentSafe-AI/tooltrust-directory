# 🟢 horizondatawave-hdw-mcp-server

> A Model Context Protocol (MCP) server that provides comprehensive access to LinkedIn data and functionalities using the Anysite API, enabling not only data retrieval but also robust management of user accounts.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.7.1` |
| **Vendor** | horizondatawave |
| **Stars** | ⭐ 60 |
| **npm Package** | `@anysiteio/mcp` |
| **npm Downloads (30d)** | 305 |
| **Language** | JavaScript |
| **Source** | [horizondatawave-hdw-mcp-server](https://github.com/anysiteio/anysite-mcp-server) |
| **Scan Date** | 2026-05-30 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/horizondatawave-hdw-mcp-server.json)*
