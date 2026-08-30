# 🟢 axel-belfort-hl-vaults

> Hyperliquid vault analytics API for AI agents. Performance data for all Hyperliquid vaults: APR (annualized return), TVL, total PnL, follower count, leader wallet, and historical performance. Sorted by best returns.

Tools: hyperliquid_get_vault_data.

Use this for vault comparison, yield farming analysis, or finding the best-performing Hyperliquid vault strategies. IMPORTANT: For individual account analysis, use hyperliquid_get_account_state instead.

Returns vault rankings with APR and TVL. No API key required — x402 micropayment $0.003/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-hl-vaults](https://smithery.ai/server/axel-belfort/hl-vaults) |
| **Scan Date** | 2026-08-30 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-hl-vaults.json)*
