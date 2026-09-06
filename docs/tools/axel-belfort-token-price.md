# 🟢 axel-belfort-token-price

> Crypto token price API for AI agents. Real-time prices via CoinGecko for 10,000+ tokens: current price in USD, 24h change %, market cap, 24h volume, and all-time high. Bitcoin, Ethereum, Solana, memecoins — everything.

Tools: finance_get_token_price.

Use this when you need current crypto prices for trading, portfolio valuation, alerts, or market analysis. The most basic crypto data tool every agent needs. IMPORTANT: For historical OHLCV candles, use token_get_ohlcv_history.

Returns: {price, change24h, marketCap, volume}. No API key required — x402 micropayment $0.001/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-token-price](https://smithery.ai/server/axel-belfort/token-price) |
| **Scan Date** | 2026-09-06 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-token-price.json)*
