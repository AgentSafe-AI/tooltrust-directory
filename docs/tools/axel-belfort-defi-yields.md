# 🟢 axel-belfort-defi-yields

> DeFi yield aggregator API for AI agents. Find the best lending, staking, and LP yields across 100+ protocols (Aave, Compound, Morpho, Lido, Yearn, Curve, Convex). Powered by DeFiLlama with TVL, risk scoring, and historical APY.

Tools: defi_find_best_yields.

Use this when looking for yield opportunities, comparing protocols, or building DeFi portfolio strategies. IMPORTANT: For swap quotes, use dex_get_swap_quote. For gas costs, use gas_get_current_price.

Returns yields sorted by APY with TVL and risk. No API key required — x402 micropayment $0.002/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-defi-yields](https://smithery.ai/server/axel-belfort/defi-yields) |
| **Scan Date** | 2026-08-08 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 2 |

## Detailed Findings

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "token" accepts a credential (informational; not evidence of insecure handling)

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-defi-yields.json)*
