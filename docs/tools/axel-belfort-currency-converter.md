# 🟢 axel-belfort-currency-converter

> Currency conversion API for AI agents. Convert between fiat currencies (ECB rates) and crypto (CoinGecko rates). Instant cross-rate lookup for USD, EUR, GBP, JPY, BTC, ETH, and 100+ currencies.

Tools: finance_convert_currency.

Use this for price normalization, international pricing, or cross-currency calculations. Supports both fiat-to-fiat and fiat-to-crypto conversions.

Returns: {result, rate, from, to, timestamp}. No API key required — x402 micropayment $0.001/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-currency-converter](https://smithery.ai/server/axel-belfort/currency-converter) |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-currency-converter.json)*
