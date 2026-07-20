# 🟢 mcp-server-spec-driven-development

> Spec-Driven Development MCP Server, not just Vibe Coding

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.1` |
| **Vendor** | formulahendry |
| **Stars** | ⭐ 435 |
| **npm Package** | `mcp-server-spec-driven-development` |
| **npm Downloads (30d)** | 399 |
| **Language** | TypeScript |
| **Source** | [mcp-server-spec-driven-development](https://github.com/formulahendry/mcp-server-spec-driven-development) |
| **Scan Date** | 2026-07-20 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-spec-driven-development.json)*
