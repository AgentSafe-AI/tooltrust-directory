# 🟢 openhuman

> The fastest, cheapest, most efficient open-source agent harness. Run more than 500 agents on a $10 VPS.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.64.15` |
| **Vendor** | tinyhumansai |
| **Stars** | ⭐ 42594 |
| **npm Package** | `openhuman-repo` |
| **Language** | Rust |
| **Source** | [openhuman](https://github.com/tinyhumansai/openhuman) |
| **Scan Date** | 2026-11-09 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/openhuman.json)*
