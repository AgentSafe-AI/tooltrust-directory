# 🟢 axel-belfort-token-holders

> Token holder distribution API for AI agents. Analyze any ERC-20 token's holder structure: top holders with % ownership, whale count, Gini concentration coefficient, holder trend (growing/shrinking), and smart money addresses.

Tools: token_get_holder_analysis.

Use this for due diligence before investing, detecting whale accumulation, or assessing decentralization. IMPORTANT: For contract safety (honeypot, rug-pull), use token_check_safety instead.

Returns: {topHolders[], whaleCount, concentration, trend}. No API key required — x402 micropayment $0.005/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-token-holders](https://smithery.ai/server/axel-belfort/token-holders) |
| **Scan Date** | 2026-08-01 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-token-holders.json)*
