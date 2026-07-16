# 🟡 stockslash-sec-13f

>  **SEC 13F filings, Congress trades, and insider buying as MCP tools. Free, no API key, accepts natural names.**

  StockSlash exposes ~80 institutional investors (Buffett, Burry, Ackman, Pabrai, Tepper, Loeb, and more), the members of Congress who trade stocks, and corporate insider filings as **23 callable tools**. Pass
  natural names like `investor: "Buffett"`, `stock: "Apple"`, or `member_name: "Pelosi"`. No CIK or ticker lookup needed.

  Typical agent queries:

  - *"Tell me about Buffett"*
  - *"Compare Burry and Ackman"*
  - *"Are insiders bullish on Tesla?"*
  - *"What did Pabrai buy last quarter?"*
  - *"What is Nancy Pelosi trading?"*

  ## Start here: 4 bundle tools

  Each replaces 3 to 4 separate calls.

  - **`analyze_investor`** — full fund profile in one call: AUM, 8-quarter trend, top 10 holdings with weights, recent activity (Buy / Add / Reduce / Sold), and trading style. Required: `investor`.
  - **`analyze_stock`** — full institutional picture of a stock: top 10 holders, recent fund activity, and insider transaction summary. Required: `stock`.
  - **`compare_investors`** — side-by-side comparison of two funds: overlapping positions, unique-to-each, and divergent moves. Required: `investor_a`, `investor_b`.
  - **`get_insider_summary`** — aggregated Form 4 sentiment over a window: net flow, top buyers and sellers, plus a bullish / bearish / mixed label. Required: `stock`. Optional: `days_back`.

  ## 19 granular tools

  **Investor data**

  - `get_super_investors` — list and filter all 80 tracked funds; search by tag, style, or description.
  - `get_investor_current_holdings` — every stock owned by one fund at a given quarter.
  - `get_investor_fund_value` — latest total AUM for one fund.
  - `get_investor_fund_value_history` — quarterly AUM with period returns.
  - `get_fund_activity` — buys and sells made in one quarter.
  - `get_fund_distribution` — trading cadence across quarters.

  **Stock data**

  - `get_stock_holders` — top 20 institutional holders plus summary.
  - `get_stock_activity` — recent buy and sell activity across all funds for one stock.
  - `get_ownership_statistics` — institutional ownership concentration plus top 5 holders.
  - `get_insider_trades` — raw Form 4 transactions (filter by Buy or Sell).

  **Congress and insiders**

  - `get_congress_trades` — U.S. Congress stock trades from STOCK Act disclosures; filter by `member_name` (e.g. "Pelosi") or `ticker`.
  - `get_congress_consensus` — stocks several members of Congress bought recently, a consensus signal.
  - `get_top_insider_stocks` — stocks with the most insider buying, scoped by default to super-investor holdings (where insiders and smart money overlap).

  **Market-wide**

  - `get_filings_buy_status` — top 25 stocks being bought across funds this quarter.
  - `get_filings_sell_status` — top 25 stocks being sold across funds this quarter.
  - `get_latest_filings_updates` — most recent 13F submissions.
  - `get_sp_stocks_by_holders` — S&P 500 stocks ranked by institutional holder count.
  - `get_ownership_statistics_home` — dashboard snapshot: top owned, most bought, most sold.
  - `get_latest_quarter` — which quarter has the most recent data.

  Full reference at [stockslash.com/mcp-api](https://stockslash.com/mcp-api).

  ## Built for agents

  Responses include a `resolved` block showing exactly which entity matched the input, and `related_tickers` suggestions when a query returns no data. Payloads max ~25 KB, average ~7 KB. All 23 tools ship with full
  JSON Schema `outputSchema` and MCP 2024-11-05 `annotations`.

  ## Data

  Normalized 13F holdings, Form 4 insider transactions, and congressional (STOCK Act) trades across ~80 tracked investors and the members of Congress who trade. Holdings are quarterly snapshots, lagged up to 45
  days; insider and congressional filings carry their own disclosure lag. Not real-time, analytical use only ([terms](https://stockslash.com/imprint)).

  **Free. Rate-limited to 200 requests per 15 minutes per IP.**

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [stockslash-sec-13f](https://smithery.ai/server/stockslash/sec-13f) |
| **Scan Date** | 2026-07-16 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 31 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: code/command execution

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📐 `AS-003` — Scope Mismatch

**Severity:** High

**Description:**
tool name "get_insider_trades" implies read-only operation but declares exec permission

**Recommendation:**
Ensure tool names, descriptions, and permission declarations are internally consistent. Use explicit naming conventions that fully reflect actual capabilities.

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: code/command execution

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📐 `AS-003` — Scope Mismatch

**Severity:** High

**Description:**
tool name "get_insider_summary" implies read-only operation but declares exec permission

**Recommendation:**
Ensure tool names, descriptions, and permission declarations are internally consistent. Use explicit naming conventions that fully reflect actual capabilities.

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/stockslash-sec-13f.json)*
