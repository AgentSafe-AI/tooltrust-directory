# 🟢 aihawk

> Anti detect browser and web browsing agent: an open-source MCP server for undetected browsing, AI web scraping and computer use agents. No captchas.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.68.9` |
| **Vendor** | feder-cr |
| **Stars** | ⭐ 31609 |
| **Language** | Python |
| **Source** | [aihawk](https://github.com/feder-cr/AIHawk) |
| **Scan Date** | 2026-09-21 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/aihawk.json)*
