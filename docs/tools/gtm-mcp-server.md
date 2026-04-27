# 🟢 gtm-mcp-server

> An MCP server for Google Tag Manager. Connect it to your LLM, authenticate once, and start managing GTM through natural language.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.5.8` |
| **Vendor** | paolobietolini |
| **Stars** | ⭐ 74 |
| **Language** | Go |
| **Source** | [gtm-mcp-server](https://github.com/paolobietolini/gtm-mcp-server) |
| **Scan Date** | 2026-04-27 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

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
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/gtm-mcp-server.json)*
