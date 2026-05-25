# 🟠 trustrails-mcp-server

>  Search and compare 26,000+ UK electronics products across multiple retailers including AO.

 Get real-time prices, stock availability, and price comparison across retailers in a single search. Covers laptops, phones, tablets, headphones, TVs, monitors, cameras, gaming, and more.                                                            
                                                                                                                             
  **Tools:**                                                                                                                 
  - `search_products` — search by keyword, brand, category, and price range                                                  
  - `get_product` — get full specs, stock level, and per-retailer price comparison                                           
                                                                                                                             
  All prices in GBP. Updated twice daily.   

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [trustrails-mcp-server](https://smithery.ai/server/trustrails/mcp-server) |
| **Scan Date** | 2026-05-25 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 1 |
| Low      | 1 |
| Info     | 2 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/trustrails-mcp-server.json)*
