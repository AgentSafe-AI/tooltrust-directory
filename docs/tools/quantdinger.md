# 🟢 quantdinger

> Open-source AI Trading OS and commercial-ready multi-tenant SaaS platform — research markets, build Python strategies, backtest, paper/live trade, and monitor crypto, stocks, and forex, with built-in user management, billing, payments, and settlement to launch and operate your own trading service.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `5.0.24` |
| **Vendor** | OpenByteInc |
| **Stars** | ⭐ 11285 |
| **Language** | Python |
| **Source** | [quantdinger](https://github.com/OpenByteInc/QuantDinger) |
| **Scan Date** | 2026-09-02 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/quantdinger.json)*
