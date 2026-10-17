# 🟢 paperclip

> The open-source app everyone uses to manage agents at work

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2026.1012.0` |
| **Vendor** | paperclipai |
| **Stars** | ⭐ 103203 |
| **npm Package** | `paperclip` |
| **npm Downloads (30d)** | 7.3k |
| **Language** | TypeScript |
| **Source** | [paperclip](https://github.com/paperclipai/paperclip) |
| **Scan Date** | 2026-10-17 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/paperclip.json)*
