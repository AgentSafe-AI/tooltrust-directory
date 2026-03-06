# 🟠 browser-use-mcp-server

> Browse the web, directly from Cursor etc.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `1.0.3` |
| **Vendor** | kontext-dev |
| **Stars** | ⭐ 807 |
| **Language** | Python |
| **Source** | [browser-use-mcp-server](https://github.com/kontext-dev/browser-use-mcp-server) |
| **Scan Date** | 2026-03-06 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🔴 `AS-006` — Arbitrary Code Execution: browser automation server capable of executing scripts in page context

**Severity:** Critical

**Description:**
browser-use-mcp-server provides browser automation that includes JavaScript execution in page contexts via execute_script and similar tools. Any agent with access can run arbitrary code inside the browsed page.

**Recommendation:**
Gate behind REQUIRE_APPROVAL. Restrict agent access to the execute_script tool. Log and audit all script execution calls.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/browser-use-mcp-server.json)*
