# 🟢 holaos

> Your super agent for work: local-first, learn your working context in mins and never forget it.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `@holaboss/app-sdk@0.1.1` |
| **Vendor** | holaboss-ai |
| **Stars** | ⭐ 5496 |
| **npm Package** | `hola-boss-oss` |
| **Language** | TypeScript |
| **Source** | [holaos](https://github.com/holaboss-ai/holaOS) |
| **Scan Date** | 2026-07-11 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/holaos.json)*
