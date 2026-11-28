# 🟢 fast-anything

> Don't rewrite it in Rust. Rewrite the 5% that's slow: profile your app, port the hot functions with your coding agent, prove they behave the same. Python, JS/TS, Ruby, Java, Kotlin, Go, PHP, C/C++, C#, R.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.9.0` |
| **Vendor** | EL4CTEO |
| **Stars** | ⭐ 4520 |
| **Language** | Rust |
| **Source** | [fast-anything](https://github.com/EL4CTEO/fast-anything) |
| **Scan Date** | 2026-11-28 |
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
Embedded MCP server detected in rust source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/fast-anything.json)*
