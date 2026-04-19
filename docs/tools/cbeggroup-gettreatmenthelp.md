# 🟡 cbeggroup-gettreatmenthelp

> Search 12,373 SAMHSA-verified substance abuse treatment facilities across all 50 states by zip code, service type, and competitive density.

The GTH Intelligence MCP server gives AI agents real-time access to substance abuse treatment facility data sourced from SAMHSA (Substance Abuse and Mental Health Services Administration). Built for treatment operators, healthcare AI developers, and anyone building tools in the behavioral health space.

**What you can do with it:**
- Find treatment facilities near any US zip code within a configurable radius
- Filter by level of care: detox, residential, IOP, outpatient, MAT
- Get competitive density scores — how many facilities operate in a given market
- Identify underserved markets by LOC type
- Access verified data on 12,373 substance abuse facilities across all 50 states

**Example prompts:**
- "Find all IOP facilities within 25 miles of 75208"
- "How many detox centers operate in the Dallas metro?"
- "What levels of care are available in rural Wyoming?"
- "Show me the top 10 markets with the fewest MAT providers"
- "Is there a gap in residential treatment in Phoenix?"

**Who it's for:** Treatment center operators doing competitive research, healthcare AI developers building patient navigation tools, and researchers studying treatment access gaps.

**Endpoint:** https://gth-mcp-server.pages.dev/mcp

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [cbeggroup-gettreatmenthelp](https://smithery.ai/server/cbeggroup/gettreatmenthelp) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/cbeggroup-gettreatmenthelp.json)*
