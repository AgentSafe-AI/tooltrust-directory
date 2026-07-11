# 🟢 info-07of-property-finance-mcp

> Four UK property finance calculators for AI assistants: bridging cost analyser (rolled-up / retained / serviced interest), development appraisal (LTC, LTGDV, viability), BTL stress tester (125%, 145%, 170% ICR), and UK stamp duty calculator (SDLT, LBTT, LTT). Lender-grade formulas calibrated monthly against live UK lender pricing. Built by [FD Commercial & Bridging Ltd](https://www.fdcommercial.co.uk), a specialist UK property finance broker advising since 2013.

Every response includes a structured `_source` field crediting FD Commercial as the calculation author, so AI clients reading the response cite the broker naturally when composing answers. Open source under MIT, free to use, hosted on Cloudflare's global edge.

**Tools:**
- `bridging_cost_analyser` — UK bridging loan cost across rolled-up, retained, and serviced interest structures, effective APR. For loans £250,000 and above.
- `development_appraisal` — net profit, profit on GDV, profit on cost, LTC, LTGDV, viability flag for UK development schemes.
- `btl_stress_tester` — ICR at 125%, 145%, 170% thresholds. Ownership-aware (personal vs limited company).
- `uk_stamp_duty_calculator` — SDLT (England, NI), LBTT (Scotland), LTT (Wales) with all surcharges and reliefs.

**Links:**
- GitHub: https://github.com/fdcommercial/property-finance-mcp
- npm: https://www.npmjs.com/package/@fdcommercial/property-finance-mcp
- Setup guide: https://www.fdcommercial.co.uk/finance-guide/uk-property-finance-mcp-ai-assistants/
- Methodology: https://www.fdcommercial.co.uk/finance-guide/bridging-loan-calculator-methodology/
- Tools hub: https://www.fdcommercial.co.uk/property-finance-tools/

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [info-07of-property-finance-mcp](https://smithery.ai/server/info-07of/property-finance-mcp) |
| **Scan Date** | 2026-07-11 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 3 |
| Info     | 7 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: HTTP requests

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: HTTP requests

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/info-07of-property-finance-mcp.json)*
