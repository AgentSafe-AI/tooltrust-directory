# 🟠 info-g03l-catalunya-2022

> **Catalunya 2022 - RESET: Crida per reactivar el país**

  Un pla d'acció estratègic per al futur de Catalunya, estructurat en 3 àmbits (Societat Justa, Economia, Sector Públic), 12 objectius i 91 accions concretes. Redactat per
   un grup de treball de 30 experts amb l'aportació de prop de 400 col·laboradors i més de 1.400 propostes ciutadanes.

  A strategic action plan for Catalonia's future, structured across 3 spheres (Fair Society, Economy, Public Sector), 12 goals, and 91 concrete actions. Authored by a
  30-expert task force with input from 400+ collaborators and 1,400+ citizen proposals.

  ## Tools

  - `search_document` — cerca de text complet / full-text search
  - `get_section` — recupera una secció per slug / retrieve a section by slug
  - `get_document_metadata` — jerarquia del document / document hierarchy
  - `list_proposals` — llista les 91 accions / list all 91 actions

  Available in Catalan, English, and Spanish. Each tool accepts a `locale` parameter (default: `ca`).

  ## Links

  - Website: [2022.cat](https://2022.cat)
  - MCP info: [2022.cat/mcp](https://2022.cat/mcp)
  - Zenodo DOI: [10.5281/zenodo.19500831](https://doi.org/10.5281/zenodo.19500831)
  - ChatGPT: [Catalunya 2022 Custom GPT](https://chatgpt.com/g/g-69b11fba75588191b031e6311036a470-catalunya-2022)

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 32 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [info-g03l-catalunya-2022](https://smithery.ai/server/info-g03l/catalunya-2022) |
| **Scan Date** | 2026-05-01 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 4 |
| Medium   | 0 |
| Low      | 3 |
| Info     | 4 |

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
tool name "get_section" implies read-only operation but declares exec permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/info-g03l-catalunya-2022.json)*
