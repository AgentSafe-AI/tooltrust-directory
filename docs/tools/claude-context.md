# 🟢 claude-context

> Code search MCP for Claude Code. Make entire codebase the context for any coding agent.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.11` |
| **Vendor** | zilliztech |
| **Stars** | ⭐ 12073 |
| **npm Package** | `claude-context` |
| **npm Downloads (30d)** | 84 |
| **Language** | TypeScript |
| **Source** | [claude-context](https://github.com/zilliztech/claude-context) |
| **Scan Date** | 2026-07-07 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/claude-context.json)*
