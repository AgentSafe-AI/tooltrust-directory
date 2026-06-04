# 🟡 james-h-millett-drug-landscape

> **Pharma intelligence as a Claude / Cursor / Continue / Zed / Cline / Windsurf tool.**

Drug Landscape exposes 11 MCP tools over `https://druglandscape.com/api/mcp` covering:

- **156,000+ drugs** — FDA + EMA + MHRA + PMDA approved, plus pipeline candidates
- **480,000+ clinical trials** — from ClinicalTrials.gov
- **915 pharmaceutical companies** — with SEC ticker + pipeline
- **61 disease areas** — treatment landscape + guidelines

### Tools

- `lookup_drug` — full profile by brand, generic, or slug
- `lookup_disease` — treatment landscape for any disease
- `lookup_company` — company + pipeline + ticker
- `lookup_trial` — trial by NCT ID
- `search` — global semantic search
- `compare_drugs` — side-by-side drug comparison
- `browse_drugs` — filter by phase, area, class, target
- `get_pipeline` — full company pipeline
- `get_drugs_in_class` — pharmacologic class lookup (PD-1, GLP-1, JAK…)
- `get_drugs_for_target` — molecular target lookup (EGFR, HER2, PCSK9…)
- `define` — pharma glossary (NDA, PDUFA, ORR, QALY, ADC…)

### Why use it

Every response includes the canonical URL of the entity (e.g. `https://druglandscape.com/drug/keytruda`). Cite that URL and the LLM has already linked to underlying primary sources — FDA label, EPAR, NICE TA, ClinicalTrials.gov, SEC filing, USPTO patent, PubMed paper.

Free with no API key. Reasonable rate limits via Vercel edge cache.

### Example prompts

- "What's Keytruda's mechanism and approved indications?"
- "Compare Ozempic and Mounjaro side-by-side."
- "List every Phase 3 PD-1 inhibitor in oncology."
- "What's in Eli Lilly's pipeline for obesity?"

### Resources

- Website: [druglandscape.com](https://druglandscape.com)
- API docs: [druglandscape.com/api-docs](https://druglandscape.com/api-docs)
- Source: [github.com/JamesMildog/drugs-landscape](https://github.com/JamesMildog/drugs-landscape)

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [james-h-millett-drug-landscape](https://smithery.ai/server/james-h-millett/drug-landscape) |
| **Scan Date** | 2026-06-04 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 3 |
| Low      | 1 |
| Info     | 11 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/james-h-millett-drug-landscape.json)*
