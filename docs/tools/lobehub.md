# 🟢 lobehub

> 🤯 LobeHub is your Chief Agent Operator, organizing your agents into 7×24 operations by hiring, scheduling, and reporting on your entire AI team.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.2.7-canary.9` |
| **Vendor** | lobehub |
| **Stars** | ⭐ 78827 |
| **npm Package** | `@lobehub/lobehub` |
| **npm Downloads (30d)** | 3.4k |
| **Language** | TypeScript |
| **Source** | [lobehub](https://github.com/lobehub/lobehub) |
| **Scan Date** | 2026-06-19 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/lobehub.json)*
