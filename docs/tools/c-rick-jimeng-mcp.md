# 🟢 c-rick-jimeng-mcp

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.10.0` |
| **Vendor** | c-rick |
| **Stars** | ⭐ 51 |
| **npm Package** | `jimeng-mcp` |
| **npm Downloads (30d)** | 33 |
| **Language** | TypeScript |
| **Source** | [c-rick-jimeng-mcp](https://github.com/c-rick/jimeng-mcp) |
| **Scan Date** | 2026-05-01 |
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
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/c-rick-jimeng-mcp.json)*
