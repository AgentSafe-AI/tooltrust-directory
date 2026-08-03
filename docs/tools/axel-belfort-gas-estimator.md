# 🟢 axel-belfort-gas-estimator

> Multi-chain gas price API for AI agents. Compare gas prices across Ethereum, Base, Polygon, Arbitrum, and BSC in a single call. Find the cheapest chain for your transaction.

Tools: crypto_estimate_gas.

Use this when choosing between chains for deployment, bridging decisions, or cross-chain cost optimization. IMPORTANT: For Ethereum-only gas, use gas_get_current_price for more detail.

Returns gas prices for all chains in one response. No API key required — x402 micropayment $0.002/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-gas-estimator](https://smithery.ai/server/axel-belfort/gas-estimator) |
| **Scan Date** | 2026-08-03 |
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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-gas-estimator.json)*
