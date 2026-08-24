# 🟢 figma-console-mcp

> Your design system as an API. Connect AI to Figma for extraction, creation, and debugging.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.40.0` |
| **Vendor** | southleft |
| **Stars** | ⭐ 2190 |
| **npm Package** | `figma-console-mcp` |
| **npm Downloads (30d)** | 85.5k |
| **Language** | TypeScript |
| **Source** | [figma-console-mcp](https://github.com/southleft/figma-console-mcp) |
| **Scan Date** | 2026-08-24 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/figma-console-mcp.json)*
