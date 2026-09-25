# 🟢 quantdinger

> Open-source AI Trading OS, agent trading, and vibe trading, with Jev System One integration. Research, build Python strategies, backtest, and paper/live trade across crypto, stocks, and forex. Launch your own multi-tenant trading SaaS with built-in user management, billing, payments, and settlement.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `5.4.2` |
| **Vendor** | OpenByteInc |
| **Stars** | ⭐ 12124 |
| **Language** | Python |
| **Source** | [quantdinger](https://github.com/OpenByteInc/QuantDinger) |
| **Scan Date** | 2026-09-25 |
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
