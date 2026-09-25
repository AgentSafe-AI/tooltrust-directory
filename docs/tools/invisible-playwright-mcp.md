# 🟢 invisible-playwright-mcp

> Your AI agent browses the web without captchas: self-hosted Python MCP server on undetected anti-detect stealth Firefox, for browser automation, scraping, computer use.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.70.0` |
| **Vendor** | feder-cr |
| **Stars** | ⭐ 31653 |
| **Language** | Python |
| **Source** | [invisible-playwright-mcp](https://github.com/feder-cr/invisible_playwright_mcp) |
| **Scan Date** | 2026-09-25 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/invisible-playwright-mcp.json)*
