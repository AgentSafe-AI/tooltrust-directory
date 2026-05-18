# 🟢 ddgs

> A metasearch library that aggregates results from diverse web search services

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `9.14.4` |
| **Vendor** | deedy5 |
| **Stars** | ⭐ 2645 |
| **Language** | Python |
| **Source** | [ddgs](https://github.com/deedy5/ddgs) |
| **Scan Date** | 2026-05-18 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ddgs.json)*
