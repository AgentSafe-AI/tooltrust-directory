# 🟢 solenrich-se01

> Solana onchain data enrichment for AI agents and LLMs. 15 tools covering wallet profiling, token analysis, risk scoring, whale tracking, and DeFi protocol analytics.

What it does

SolEnrich cross-references 5 data sources (Helius, DexScreener, Jupiter, DeFi Llama, Solana RPC) in parallel and returns enriched intelligence, not raw blockchain data. All scoring is deterministic with no LLM inference in the pipeline.

Key tools

  - enrich_wallet — SOL balance, token holdings, DeFi positions, behavioral labels,
  risk score
  - enrich_token — Price (median of 3 sources), market cap, liquidity, holder
  concentration, risk flags
  - due_diligence — Composite risk report with SAFE / CAUTION / RISKY verdict
  - whale_watch — Top holders with accumulation vs distribution tracking
  - compare_tokens — Side-by-side analysis of 2-3 tokens with rankings
  - new_tokens — Recently launched tokens filtered by liquidity and risk
  - protocol_profile — DeFi protocol TVL, yields, activity, health signals
  - query — Plain English questions — "Is JUP safe?" routes to the right enricher

Plus: parse_transaction, wallet_graph, copy_trade_signals, batch_enrich, compare_wallets, token_trend, wallet_history

Payment

Pay-per-request via USDC on Solana (x402). No API keys, no subscriptions. Costs range from $0.001 to $0.020 per call. Tools return pricing details if payment is required.

Links

  - https://api.solenrich.com/docs
  - https://www.x402scan.com/server/d9814c54-6fa6-4fa7-8b01-43a0ffbc7641
  - https://github.com/0xSardius/solenrich
  - https://solenrich.com

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [solenrich-se01](https://smithery.ai/server/solenrich/SE01) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 7 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/solenrich-se01.json)*
