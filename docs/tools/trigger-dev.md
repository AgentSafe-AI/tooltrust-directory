# 🟢 trigger-dev

> Trigger.dev – build and deploy fully‑managed AI agents and workflows

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `4.5.0` |
| **Vendor** | triggerdotdev |
| **Stars** | ⭐ 15552 |
| **npm Package** | `triggerdotdev` |
| **Language** | TypeScript |
| **Source** | [trigger-dev](https://github.com/triggerdotdev/trigger.dev) |
| **Scan Date** | 2026-07-04 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/trigger-dev.json)*
