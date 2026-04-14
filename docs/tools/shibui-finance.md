# 🟠 shibui-finance

> ## Server Description

Screen 5,200 US stocks across 64 years of daily prices, quarterly financials, and 56 technical indicators. Describe what you're looking for in plain English and Shibui finds the companies that match.

Combine multi-year margin consistency, revenue growth trends, RSI and MACD signals, balance sheet strength, and earnings surprises in a single query.

Examples:
- "Find companies under $5B market cap where operating margins stayed above 15% every year since 2019 with revenue growth in at least 4 of those years"
- "Which stocks just crossed below their 200-day SMA with RSI under 30 but had positive free cash flow last quarter?"

### Coverage

- **Exchanges:** NYSE and NASDAQ
- **Prices:** Daily OHLCV since 1962
- **Financials:** Quarterly and annual income statements, balance sheets, cash flow statements
- **Technical indicators:** 56 pre-calculated indicators (RSI, MACD, Bollinger Bands, SMA, EMA, ADX, candlestick patterns, and more)
- **Earnings:** Quarterly EPS actuals, estimates, and surprise percentages
- **Companies:** 5,200+ with full history

### Access

Free to use. Remote MCP server. No API key needed. Connect in 2 minutes.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [shibui-finance](https://smithery.ai/server/shibui/finance) |
| **Scan Date** | 2026-04-14 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 2 |
| Low      | 1 |
| Info     | 2 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/shibui-finance.json)*
