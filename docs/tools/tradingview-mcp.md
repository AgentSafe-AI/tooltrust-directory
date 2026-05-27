# 🟢 tradingview-mcp

> Real-time crypto & stock screening, advanced technical indicators, Bollinger Bands intelligence, candlestick patterns + native Claude Desktop integration. Multi-exchange (Binance, KuCoin, Bybit+). Open-source AI trading infrastructure.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.4.0` |
| **Vendor** | atilaahmettaner |
| **Stars** | ⭐ 2857 |
| **npm Package** | `@atilaahmettaner/tradingview-mcp-server` |
| **Language** | Python |
| **Source** | [tradingview-mcp](https://github.com/atilaahmettaner/tradingview-mcp) |
| **Scan Date** | 2026-05-27 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

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

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/tradingview-mcp.json)*
