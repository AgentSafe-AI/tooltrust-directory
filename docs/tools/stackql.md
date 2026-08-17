# 🟢 stackql

> Query, provision and operate Cloud, SaaS, API and Model Context Protocol (MCP) resources through a unified SQL-based framework for humans and AI agents.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.10.601` |
| **Vendor** | stackql |
| **Stars** | ⭐ 867 |
| **Language** | Go |
| **Source** | [stackql](https://github.com/stackql/stackql) |
| **Scan Date** | 2026-08-17 |
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
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/stackql.json)*
