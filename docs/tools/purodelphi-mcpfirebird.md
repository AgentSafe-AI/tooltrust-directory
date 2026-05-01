# 🟢 purodelphi-mcpfirebird

> Implementation of Anthropic's MCP protocol for Firebird databases.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.6.0` |
| **Vendor** | PuroDelphi |
| **Stars** | ⭐ 51 |
| **npm Package** | `mcp-firebird` |
| **npm Downloads (30d)** | 2.3k |
| **Language** | TypeScript |
| **Source** | [purodelphi-mcpfirebird](https://github.com/PuroDelphi/mcpFirebird) |
| **Scan Date** | 2026-05-01 |
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
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/purodelphi-mcpfirebird.json)*
