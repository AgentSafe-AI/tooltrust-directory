# 🟢 google-tag-manager-mcp-server

> MCP server for Google Tag Manager

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `3.0.6` |
| **Vendor** | stape-io |
| **Stars** | ⭐ 161 |
| **npm Package** | `google-tag-manager-mcp-server` |
| **npm Downloads (30d)** | 126 |
| **Language** | TypeScript |
| **Source** | [google-tag-manager-mcp-server](https://github.com/stape-io/google-tag-manager-mcp-server) |
| **Scan Date** | 2026-05-31 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/google-tag-manager-mcp-server.json)*
