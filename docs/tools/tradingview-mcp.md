# 🟢 tradingview-mcp

> MCP server for market analysis in AI assistants: screeners, multi-timeframe technical analysis, backtests and sentiment for crypto, stocks, forex and futures. 39 tools. Self-host free, or use the hosted version, TradingMCP.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.8.0` |
| **Vendor** | atilaahmettaner |
| **Stars** | ⭐ 5104 |
| **Language** | Python |
| **Source** | [tradingview-mcp](https://github.com/atilaahmettaner/tradingview-mcp) |
| **Scan Date** | 2026-10-23 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

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
