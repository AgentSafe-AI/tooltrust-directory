# 🟡 philippvoss2212-huettentouren

> Plan multi-day hut-to-hut hiking tours in the European Alps, powered by
live availability data from the Alpine Club booking systems (DAV, ÖAV, AVS).

## What it does

- Recommends curated multi-day routes filtered by difficulty, duration,
  number of hikers, and travel window
- Returns bookable start dates only when hut availability is fresh (≤8h old)
- Flags off-season requests, stale data, and no-match cases explicitly
  (no hallucinated suggestions)
- Exposes full route detail: stages, elevation, overnight huts, booking URLs

## Tools

- `recommend_tours` — rank routes by hard filters + soft preferences (months,
  transport, difficulty), return top matches with sample start dates
- `search_tours` — fuzzy text search across route names and regions
- `get_tour` — fetch full stage-by-stage detail for a single route

## Data notes

Route content, stage descriptions, and hut names are in **German**
(the primary audience is DACH hikers). Numeric fields, enums, and IDs
are locale-neutral. Best used by agents that can either speak German
or translate German strings downstream.

Availability is aggregated server-side across multiple booking providers
and exposed with a clear freshness contract — agents should not guess
dates when `status != "bookable"`.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [philippvoss2212-huettentouren](https://smithery.ai/server/philippvoss2212/huettentouren) |
| **Scan Date** | 2026-05-28 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 3 |

## Detailed Findings

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/philippvoss2212-huettentouren.json)*
