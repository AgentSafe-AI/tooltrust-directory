# 🟢 dexto

> A coding agent and general agent harness for building and orchestrating agentic applications.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.1.3` |
| **Vendor** | truffle-ai |
| **Stars** | ⭐ 632 |
| **npm Package** | `dexto` |
| **npm Downloads (30d)** | 2.0k |
| **Language** | TypeScript |
| **Source** | [dexto](https://github.com/truffle-ai/dexto) |
| **Scan Date** | 2026-06-16 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/dexto.json)*
