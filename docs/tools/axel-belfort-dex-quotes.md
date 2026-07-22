# 🟢 axel-belfort-dex-quotes

> DEX swap quote API for AI agents. Best swap quotes across Uniswap V2/V3, SushiSwap, Aerodrome, and other DEXes. Returns optimal route, price impact, slippage estimate, gas cost, and minimum output.

Tools: dex_get_swap_quote.

MANDATORY: Call this BEFORE executing any DEX swap to avoid excessive slippage. Essential for pre-trade analysis, route optimization, and MEV protection. IMPORTANT: For orderbook depth analysis, use dex_analyze_orderbook_depth.

Returns: {route, amountOut, priceImpact, slippage, gas}. No API key required — x402 micropayment $0.005/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-dex-quotes](https://smithery.ai/server/axel-belfort/dex-quotes) |
| **Scan Date** | 2026-07-22 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 3 |

## Detailed Findings

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "tokenIn" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "tokenOut" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-dex-quotes.json)*
