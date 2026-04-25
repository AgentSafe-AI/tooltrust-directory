# 🟢 aguskenari86-8bo7-cryptoiz-mcp

> CryptoIZ MCP v4.16.0 — AI-powered Solana DEX whale intelligence for Claude Desktop. 9 tools (7 paid + 2 free): whale alpha scanner, price-volume-whale divergence (3 types), 4-dimension accumulation/neutral/distribution phase scoring, BTC macro regime monitor, and NEW BTC Futures Signal (MTF 4H+5m scalping).

PRICING: Pay per call via x402 USDC on Solana ($0.01–$0.05). Gas sponsored by Dexter facilitator.

IMPORTANT: This MCP requires SVM_PRIVATE_KEY environment variable (your Solana wallet base58 private key) for x402 payments. Smithery Remote mode WILL NOT WORK without your key. RECOMMENDED: install locally via `npm install -g cryptoiz-mcp` + `npx cryptoiz-mcp-setup YOUR_PRIVATE_KEY` for proper x402 payment flow in Claude Desktop.

Tools: get_whale_alpha ($0.05), get_whale_divergence ($0.02), get_whale_accumulation ($0.02), get_whale_neutral ($0.02), get_whale_distribution ($0.02), get_btc_regime ($0.01), get_btc_futures_signal ($0.03), get_token_ca (FREE), get_status (FREE).

Links: https://cryptoiz.org/McpLanding · npm cryptoiz-mcp · @cryptoiz_IDN

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 4 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [aguskenari86-8bo7-cryptoiz-mcp](https://smithery.ai/server/aguskenari86-8bo7/cryptoiz-mcp) |
| **Scan Date** | 2026-04-25 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 8 |

## Detailed Findings

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

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
tool declares http permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/aguskenari86-8bo7-cryptoiz-mcp.json)*
