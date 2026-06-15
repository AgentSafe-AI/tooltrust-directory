# 🟢 hustcc-mcp-mermaid

> ❤️ Generate mermaid diagram and chart with AI MCP dynamically.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.4.1` |
| **Vendor** | hustcc |
| **Stars** | ⭐ 539 |
| **npm Package** | `mcp-mermaid` |
| **npm Downloads (30d)** | 17.8k |
| **Language** | TypeScript |
| **Source** | [hustcc-mcp-mermaid](https://github.com/hustcc/mcp-mermaid) |
| **Scan Date** | 2026-06-15 |
| **Scanner** | tooltrust-scanner/v0.3.16 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/hustcc-mcp-mermaid.json)*
