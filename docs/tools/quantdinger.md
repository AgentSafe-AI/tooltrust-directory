# 🟢 quantdinger

> The most complete open-source, self-hosted Agentic Trading OS—AI research, Python strategies, factor discovery, backtesting, optimization, paper/live multi-asset execution, risk controls, monitoring, MCP, and multi-tenant SaaS in one auditable stack.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `5.8.7` |
| **Vendor** | OpenByteInc |
| **Stars** | ⭐ 13705 |
| **Language** | Python |
| **Source** | [quantdinger](https://github.com/OpenByteInc/QuantDinger) |
| **Scan Date** | 2026-11-12 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/quantdinger.json)*
