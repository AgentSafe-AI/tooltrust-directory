# 🟢 minds

> General-purpose AI designed for knowledge workers — creators, strategists, and operators — and individuals seeking AI systems they can truly control to help them get work done, with full flexibility to extend and deploy anywhere (VPC, on-prem, or cloud).

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `26.1.0` |
| **Vendor** | mindsdb |
| **Stars** | ⭐ 39317 |
| **Language** | Makefile |
| **Source** | [minds](https://github.com/mindsdb/minds) |
| **Scan Date** | 2026-06-18 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/minds.json)*
