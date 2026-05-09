# 🟢 scrapling

> 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.4.7` |
| **Vendor** | D4Vinci |
| **Stars** | ⭐ 47913 |
| **Language** | Python |
| **Source** | [scrapling](https://github.com/D4Vinci/Scrapling) |
| **Scan Date** | 2026-05-09 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/scrapling.json)*
