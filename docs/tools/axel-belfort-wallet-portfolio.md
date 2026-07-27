# 🟢 axel-belfort-wallet-portfolio

> Crypto wallet portfolio API for AI agents. Full token holdings across Ethereum, Base, Polygon, Arbitrum, and BSC: ETH balance, all ERC-20 tokens, USD values, 24h changes, and total portfolio value.

Tools: wallet_get_portfolio (full holdings), wallet_get_balance (ETH only).

Use this for portfolio tracking, wealth verification, or wallet analysis. Essential for any agent managing crypto assets. IMPORTANT: For token safety check, use token_check_safety. For gas prices, use gas_get_current_price.

Returns: {totalUsd, tokens[], ethBalance}. No API key required — x402 micropayment $0.003/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-wallet-portfolio](https://smithery.ai/server/axel-belfort/wallet-portfolio) |
| **Scan Date** | 2026-07-27 |
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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-wallet-portfolio.json)*
