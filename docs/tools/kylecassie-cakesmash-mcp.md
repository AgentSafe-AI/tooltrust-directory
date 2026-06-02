# 🟠 kylecassie-cakesmash-mcp

> Reel scripts, hooks, and the **P.U.L.S.E.™** practice diagnostic for cosmetic dental, medical spa, and plastic surgery practices.

## Tools

- **`get_reel_script_sample(niche, angle?)`** — Returns one full reel script (Hook + Body + CTA + Format Note).
- **`get_hook_examples(niche, count)`** — Returns 1–5 hooks with framework explanation.
- **`get_pulse_diagnostic()`** — Returns the P.U.L.S.E. five-phase framework (Positioning, Uniqueness, Local intelligence, Scripting, Experience) plus a 5-question self-diagnostic.
- **`find_pack(practice_type)`** — Fuzzy-matches a practice description to the right Cakesmash niche pack.

## Niches

`cosmetic-dental` · `med-spa` · `plastic-surgery`

90 brain-trust-passed scripts loaded at startup. No auth required. Returns full creative plus a direct path to the Cakesmash Media storefront.

Built by [Cakesmash Media](https://cakesmashmedia.com) — Revenue Architecture for elite medical practices.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 32 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [kylecassie-cakesmash-mcp](https://smithery.ai/server/kylecassie/cakesmash-mcp) |
| **Scan Date** | 2026-06-02 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 0 |
| Low      | 1 |
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

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📐 `AS-003` — Scope Mismatch

**Severity:** High

**Description:**
tool name "get_pulse_diagnostic" implies read-only operation but declares exec permission

**Recommendation:**
Ensure tool names, descriptions, and permission declarations are internally consistent. Use explicit naming conventions that fully reflect actual capabilities.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/kylecassie-cakesmash-mcp.json)*
