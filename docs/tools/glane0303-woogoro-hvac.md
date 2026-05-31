# 🟡 glane0303-woogoro-hvac

> Paste any HVAC quote into Claude/Cursor/ChatGPT and Woogoro HVAC MCP audits it:

- Detects oversizing (proposed tonnage vs Manual J load calculation)
- Flags R-410A compliance for 2026+ installs (EPA AIM Act phasedown to A2L refrigerants like R-454B / R-32)
- Checks SEER2 / HSPF2 efficiency vs federal minimums (North vs South split AC standards)
- Identifies scope gaps (Manual D, line-set replacement, refrigerant recovery, permit pull)
- Catches common upsells (UV lights, IAQ packages, overpriced extended warranties)
- Drafts dispute letters across 9 issue types
- Generates phone negotiation scripts

**Tools (5):** `parse_quote`, `check_errors`, `lookup_average_price`, `draft_dispute`, `negotiation_script`

Backed by Woogoro's `/api/hvac-estimate` endpoint (Claude Haiku-powered) and bundled installed-price ranges. Free hosted endpoint, no API key required.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [glane0303-woogoro-hvac](https://smithery.ai/server/glane0303/woogoro-hvac) |
| **Scan Date** | 2026-05-31 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 5 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/glane0303-woogoro-hvac.json)*
