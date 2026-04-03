# 🟡 geobio-mcp-server-airbnb

> Search Airbnb listings and retrieve detailed information about specific listings. Get structured JSON data without requiring an API key, while respecting Airbnb's robots.txt rules. Simplify your vacation rental planning with easy access to Airbnb data.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 19 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [geobio-mcp-server-airbnb](https://smithery.ai/server/geobio/mcp-server-airbnb) |
| **Scan Date** | 2026-04-03 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 2 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 12 properties (threshold: 10)

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/geobio-mcp-server-airbnb.json)*
