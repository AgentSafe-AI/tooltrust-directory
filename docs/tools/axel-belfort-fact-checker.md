# 🟢 axel-belfort-fact-checker

> AI-powered fact-checking API for AI agents. Verify any factual claim with web evidence: searches multiple sources, assesses credibility, provides supporting/contradicting URLs, and returns confidence level (confirmed/likely/unverified/false).

Tools: research_check_fact.

Use this before repeating claims, for content moderation, or building trustworthy AI systems. Essential for reducing hallucinations. IMPORTANT: For web search without fact assessment, use web_search_query.

Returns: {verdict, confidence, sources[], evidence[]}. No API key required — x402 micropayment $0.005/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-fact-checker](https://smithery.ai/server/axel-belfort/fact-checker) |
| **Scan Date** | 2026-07-20 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 2 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-fact-checker.json)*
