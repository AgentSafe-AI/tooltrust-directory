# 🟢 axel-belfort-ens-resolver

> ENS name resolution API for AI agents. Resolve ENS names (vitalik.eth) to Ethereum addresses and reverse-resolve addresses to ENS names. Includes avatar URLs and text records.

Tools: crypto_resolve_ens.

Use this for displaying human-readable names, identity verification, or building wallet UIs. The identity layer every crypto agent needs. IMPORTANT: For wallet balance lookup, use wallet_get_portfolio instead.

Returns: {address, name, avatar, records}. No API key required — x402 micropayment $0.002/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-ens-resolver](https://smithery.ai/server/axel-belfort/ens-resolver) |
| **Scan Date** | 2026-08-27 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-ens-resolver.json)*
