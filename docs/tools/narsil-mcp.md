# 🟢 narsil-mcp

> Rust MCP server for comprehensive code intelligence - 90 tools, 32 languages, security scanning, call graphs, and more

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.7.2` |
| **Vendor** | postrv |
| **Stars** | ⭐ 185 |
| **Language** | Rust |
| **Source** | [narsil-mcp](https://github.com/postrv/narsil-mcp) |
| **Scan Date** | 2026-10-31 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

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
Embedded MCP server detected in rust source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/narsil-mcp.json)*
