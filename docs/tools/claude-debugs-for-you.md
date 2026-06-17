# 🟢 claude-debugs-for-you

> Enable any LLM (e.g. Claude) to interactively debug any language for you via MCP and a VS Code Extension

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.2` |
| **Vendor** | jasonjmcghee |
| **Stars** | ⭐ 509 |
| **npm Package** | `claude-debugs-for-you` |
| **npm Downloads (30d)** | 14 |
| **Language** | TypeScript |
| **Source** | [claude-debugs-for-you](https://github.com/jasonjmcghee/claude-debugs-for-you) |
| **Scan Date** | 2026-06-17 |
| **Scanner** | tooltrust-scanner/v0.3.18 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/claude-debugs-for-you.json)*
