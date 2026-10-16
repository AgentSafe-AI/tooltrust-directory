# 🟢 nightingale

> Open-source, self-hosted alerting for metrics, logs, and databases. Includes a built-in AI agent and MCP server.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `9.2.0` |
| **Vendor** | ccfos |
| **Stars** | ⭐ 13360 |
| **Language** | Go |
| **Source** | [nightingale](https://github.com/ccfos/nightingale) |
| **Scan Date** | 2026-10-16 |
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
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/nightingale.json)*
