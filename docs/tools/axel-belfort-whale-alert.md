# 🟢 axel-belfort-whale-alert

> Whale transaction monitoring API for AI agents. Track large on-chain transfers: sender, receiver, token, USD value, and transaction hash. Detect market-moving whale activity in real-time.

Tools: crypto_track_whale_transactions.

Use this for whale watching, market sentiment signals, exchange flow analysis, or building alert systems. IMPORTANT: For Hyperliquid-specific whale tracking, use hyperliquid_track_whale_positions instead.

Returns: {transactions[], totalVolume, largestTransfer}. No API key required — x402 micropayment $0.003/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-whale-alert](https://smithery.ai/server/axel-belfort/whale-alert) |
| **Scan Date** | 2026-07-20 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-whale-alert.json)*
