# 🟢 nitrostack

> The full-stack TypeScript framework to build, test, and deploy production-ready MCP servers and AI-native apps.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.0.0` |
| **Vendor** | nitrocloudofficial |
| **Stars** | ⭐ 2517 |
| **Language** | TypeScript |
| **Source** | [nitrostack](https://github.com/nitrocloudofficial/nitrostack) |
| **Scan Date** | 2026-08-23 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/nitrostack.json)*
