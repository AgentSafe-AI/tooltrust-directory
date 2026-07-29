# 🟢 vivaldoeuropes-vivaldo-product-discovery

> Public read-only MCP server for Vivaldo.shop, a European online store for MacBook cases, iPad cases, laptop sleeves, keyboard covers, screen protectors and everyday computer accessories.

This server helps AI agents discover public Vivaldo products by searching the storefront, reading product details and listing products from public Shopify collections.

Available tools:

* `get_store_info` — returns public information about Vivaldo, product categories and shipping.
* `search_products` — searches public Vivaldo products by keyword.
* `get_product_by_handle` — returns public product details from a Shopify product handle.
* `get_collection_products` — lists public products from a Shopify collection.

Safety scope:

This MCP server is public and read-only. It does not provide access to customer accounts, checkout actions, orders, payments, private customer data or Shopify Admin APIs.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [vivaldoeuropes-vivaldo-product-discovery](https://smithery.ai/server/vivaldoeuropes/vivaldo-product-discovery) |
| **Scan Date** | 2026-07-29 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 5 |

## Detailed Findings

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
declared capabilities: network access, database access

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/vivaldoeuropes-vivaldo-product-discovery.json)*
