# 🟡 glane0303-woogoro-auto-repair

> Paste any auto repair quote or invoice into Claude/Cursor/ChatGPT and Woogoro Auto Repair MCP audits it:

- Compares labor hours to Mitchell / AllData book time
- Flags suspicious upsells (fuel-system flushes, "engine treatments", overpriced cabin filters)
- Catches OEM-vs-aftermarket parts mismatches
- Applies Magnuson-Moss Warranty Act protections (15 USC §§ 2301-2312)
- Identifies recall and TSB work that should be free (NHTSA recalls, manufacturer service bulletins)
- Drafts dispute letters across 8 issue types
- Generates phone negotiation scripts (written-estimate requests, refusing upsells, recall enforcement)

**Tools (5):** `parse_quote`, `check_errors`, `lookup_average_price`, `draft_dispute`, `negotiation_script`

Backed by Woogoro's `/api/auto-repair-estimate` endpoint (Claude Haiku-powered) and bundled labor-rate ranges. Free hosted endpoint, no API key required.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [glane0303-woogoro-auto-repair](https://smithery.ai/server/glane0303/woogoro-auto-repair) |
| **Scan Date** | 2026-06-02 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/glane0303-woogoro-auto-repair.json)*
