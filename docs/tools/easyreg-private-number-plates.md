# 🟠 easyreg-private-number-plates

> EasyReg is a UK private number plate search and transfer service. This MCP server provides live access to over 71 million DVLA and reseller registrations.
                                                                                                                                                                                                                                      
  # Tools                                                     

  - search_plates — Search for personalised UK number plates by name, word, or initials, with optional price filtering
  - browse_category — Browse popular plate terms by category (first names, surnames, popular words) with result counts
  - get_plate_info — Check availability and price for a specific registration
  - get_faqs — Get answers to common questions about UK plate transfers, pricing, formats, and legal requirements

  # Resources

  - About — Overview of EasyReg and key pages
  - Plate Formats — Guide to UK registration formats (Dateless, Suffix, Prefix, Current, Northern Irish) and age restriction rules
  - Pricing — DVLA fees, Fast Track service, physical plates, and optional extras

  # Example queries

  - "Find number plates for the name Sarah under £500"
  - "What formats of UK number plates are there?"
  - "How much does a plate transfer cost?"
  - "Browse popular word plates"

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [easyreg-private-number-plates](https://smithery.ai/server/easyreg/private-number-plates) |
| **Scan Date** | 2026-05-17 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 1 |
| Low      | 1 |
| Info     | 4 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/easyreg-private-number-plates.json)*
