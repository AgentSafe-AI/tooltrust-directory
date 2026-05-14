# 🟡 secureship-docs

> Secureship MCP gives AI assistants access to a multi-carrier shipping API covering rate comparison, label generation, package tracking, pickup scheduling, address book management, shipment history, customs documents, and more — across carriers like UPS, FedEx, Purolator, Canpar, and others. Browse 150+ live endpoint schemas, parameters, and auth details — always current, never stale.

Secureship isn't just for shipping with one carrier — it's a multi-carrier shipping platform, and this MCP server gives AI assistants full access to the API documentation for every supported action: compare rates across carriers, generate shipping labels, track packages, schedule pickups, manage address books, review shipment history, produce customs documents, handle invoices, and even perform actions available on the Secureship web dashboard — all through a single API.

The MCP documentation server exposes live endpoint metadata pulled directly from the running application — not static docs that go stale. That means AI assistants always get the correct paths, parameters, request bodies, response schemas, and authentication requirements for 150+ endpoints.

Read-only, public, no API key needed to browse. Authentication for the actual shipping API uses a simple X-API-KEY header.

**Tools exposed:**
- SearchDocs — keyword search across all API endpoints
- GetEndpointDetail — full schema for a specific endpoint (params, request body, responses, auth)
- ListEndpoints — list all endpoints, optionally filtered by category
- GetAuthInfo — authentication instructions (X-API-KEY header)

**Categories:** Shipping, logistics, e-commerce, carriers, rates, labels, tracking, address book, customs documents, shipment history

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [secureship-docs](https://smithery.ai/server/secureship/docs) |
| **Scan Date** | 2026-05-14 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 1 |
| Low      | 3 |
| Info     | 4 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
tool declares http permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/secureship-docs.json)*
