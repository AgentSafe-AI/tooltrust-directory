# 🟢 nginx-ui

> Yet another WebUI for Nginx

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.3.10` |
| **Vendor** | 0xJacky |
| **Stars** | ⭐ 11141 |
| **npm Package** | `nginx-ui` |
| **npm Downloads (30d)** | 19 |
| **Language** | Go |
| **Source** | [nginx-ui](https://github.com/0xJacky/nginx-ui) |
| **Scan Date** | 2026-05-15 |
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
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/nginx-ui.json)*
