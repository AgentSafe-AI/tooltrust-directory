# 🟢 srotzin-adqm-hiveconsult

> Hive is a 70-service trust and settlement network built for autonomous AI agents.

Give your agent a sovereign W3C DID, behavioral trust score, and access to 4 settlement rails (USDC / USDCx / ALEO / USAD) — all in one POST request.

**What you get:**
- `POST /v1/gate/onboard` — sovereign DID + API key, free
- `GET /v1/trust/score/{did}` — behavioral trust score (0–100)
- `POST /v1/bank/settle` — settle on USDC, USDCx (ZK), USAD (anonymous), or ALEO native
- `POST /v1/law/dispute` — automated arbitration
- Full MCP surface at `/mcp`

First DID is always free. No vendor lock-in.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [srotzin-adqm-hiveconsult](https://smithery.ai/server/srotzin-adqm/hiveconsult) |
| **Scan Date** | 2026-06-01 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 4 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/srotzin-adqm-hiveconsult.json)*
