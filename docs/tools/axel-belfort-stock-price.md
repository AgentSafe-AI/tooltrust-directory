# 🟢 axel-belfort-stock-price

> Stock market price API for AI agents. Real-time quotes: current price, daily change %, volume, market cap, and company name. All major US exchanges (NYSE, NASDAQ) and international markets.

Tools: finance_get_stock_price.

Use this for portfolio monitoring, market analysis, financial research, or building trading dashboards. IMPORTANT: For crypto prices, use finance_get_token_price instead.

Returns: {price, change, volume, marketCap, name}. No API key required — x402 micropayment $0.002/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-stock-price](https://smithery.ai/server/axel-belfort/stock-price) |
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
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-stock-price.json)*
