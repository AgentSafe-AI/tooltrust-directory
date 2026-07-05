# 🟢 beforeyouship-cost-model

> Model the realistic monthly cost of an LLM app **before you build it**. Not a token calculator: retries, prompt caching, batch discounts, infra overhead, and 3×/10× growth are modeled in, across GPT-5.x, Claude, Gemini, DeepSeek, and more.

**Works without a key.** Connect and ask — demo mode covers the six free-tier models. A Pro API key ([beforeyouship.dev](https://beforeyouship.dev)) unlocks the full 18-model catalog.

## Tools

| Tool | What it does |
|---|---|
- **`estimate_cost`** Full cost model for an architecture at a given usage level. Returns Naive / Realistic / Worst Case $/mo per model, growth scenarios, and an opinionated recommendation. |
- **`get_model_prices`** Current per-1M-token pricing (input, output, cached, batch) with context windows and staleness metadata. |
- **`list_archetypes`** Seven preset architecture patterns (chatbot, RAG pipeline, multi-step agent, …) used as starting points for estimates. |

## Try it

Paste into Claude Code or Cursor after connecting:

> Estimate the monthly cost of a RAG pipeline at 10,000 requests/day

## Setup

```bash
claude mcp add --transport http beforeyouship https://beforeyouship.dev/api/mcp
```
## Links

- Docs & tool reference: https://beforeyouship.dev/docs#mcp
- Live calculator: https://beforeyouship.dev
- Announcement: https://beforeyouship.dev/blog/query-llm-costs-from-claude-code

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [beforeyouship-cost-model](https://smithery.ai/server/beforeyouship/cost-model) |
| **Scan Date** | 2026-07-05 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 5 |

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

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 11 properties (threshold: 10)

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "avg_input_tokens" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "avg_output_tokens" accepts a credential (informational; not evidence of insecure handling)

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/beforeyouship-cost-model.json)*
