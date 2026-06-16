# 🟢 achiya-automation-safari-mcp

> Native Safari browser automation for AI agents. 80 tools via AppleScript — zero overhead, keeps logins, runs silently in background. Drop-in alternative to Chrome DevTools MCP with 40-60% less CPU/heat on Apple Silicon.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.10.2` |
| **Vendor** | achiya-automation |
| **Stars** | ⭐ 53 |
| **npm Package** | `safari-mcp` |
| **npm Downloads (30d)** | 5.2k |
| **Language** | JavaScript |
| **Source** | [achiya-automation-safari-mcp](https://github.com/achiya-automation/safari-mcp) |
| **Scan Date** | 2026-06-15 |
| **Scanner** | tooltrust-scanner/v0.3.17 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/achiya-automation-safari-mcp.json)*
