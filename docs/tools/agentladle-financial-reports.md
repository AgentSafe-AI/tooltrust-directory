# 🟢 agentladle-financial-reports

> # AgentLadle Financial Reports MCP

Welcome to the **AgentLadle Financial Reports MCP Server**! This tool empowers your favorite MCP-compatible clients (like Cursor and Claude Desktop) with professional-grade capabilities for corporate intelligence, financial data extraction, and report analysis.

## 🚀 Getting Started

To use this server, you will need a valid AgentLadle API Key.

### 1. Get Your API Key
1. Go to our official website: [https://agentladle.com](https://agentladle.com)
2. Sign up for an account or log in if you already have one.
3. Navigate to the **MCP Keys** section in your dashboard.
4. Generate a new API Key and copy it.

### 2. Configuration
When you install this server via Smithery, you will be prompted to enter your `apiKey`. 

Simply paste the raw API key you copied from your dashboard (e.g., `sk-123456789abcdef`).

## ⚠️ Data Coverage Limitation

> Please note that currently, this server only supports searching and extracting **Annual Reports (Years 2023-2025)** from **Chinese A-share** listed companies (Shanghai and Shenzhen Stock Exchanges). US stocks, HK stocks, and quarterly/semi-annual reports are not supported yet.

## 🛠️ Available Tools

Our server provides the following core tools for financial analysis:

* **SearchCompanyInfo**: Query essential corporate information and fundamentals.
* **FinancialKeywordSearch**: Perform targeted keyword searches across comprehensive financial reports.
* **GetFinancialReportPages**: Retrieve specific pages and precise data points from financial documents.
* **GetFinancialStatementsStartPages**: Quickly locate the exact starting pages of balance sheets, income statements, and cash flow statements.
* **GetReportChapters**: Extract organized chapter structures and sections from lengthy corporate reports.

## 💬 Support
If you encounter any issues or have questions, please reach out to our support team at [support@agentladle.com](mailto:support@agentladle.com) or visit [https://agentladle.com](https://agentladle.com).

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [agentladle-financial-reports](https://smithery.ai/server/agentladle/financial-reports) |
| **Scan Date** | 2026-07-08 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 7 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access

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
declared capabilities: network access

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/agentladle-financial-reports.json)*
