# 🟢 axel-belfort-airdrop-checker

> Crypto airdrop eligibility API for AI agents. Check any wallet's eligibility for active airdrops: token name, estimated value, deadline, claim URL, and status. Aggregated from Etherscan and on-chain data.

Tools: crypto_check_airdrops.

Use this to monitor airdrop eligibility for wallets you manage, alert users about unclaimed airdrops, or track upcoming distributions. Essential for DeFi portfolio optimization.

Returns: {airdrops[], totalValue, deadlines[]}. No API key required — x402 micropayment $0.005/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-airdrop-checker](https://smithery.ai/server/axel-belfort/airdrop-checker) |
| **Scan Date** | 2026-07-17 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-airdrop-checker.json)*
