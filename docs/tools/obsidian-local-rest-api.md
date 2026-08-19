# 🟢 obsidian-local-rest-api

> A secure REST API and Model Context Protocol (MCP) server for your vault.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `show` |
| **Vendor** | coddingtonbear |
| **Stars** | ⭐ 2813 |
| **npm Package** | `obsidian-local-rest-api` |
| **npm Downloads (30d)** | 486 |
| **Language** | TypeScript |
| **Source** | [obsidian-local-rest-api](https://github.com/coddingtonbear/obsidian-local-rest-api) |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/obsidian-local-rest-api.json)*
