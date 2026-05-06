# 🟢 mcp-language-server

> mcp-language-server gives MCP enabled clients access semantic tools like get definition, references, rename, and diagnostics.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.1` |
| **Vendor** | isaacphi |
| **Stars** | ⭐ 1525 |
| **Language** | Go |
| **Source** | [mcp-language-server](https://github.com/isaacphi/mcp-language-server) |
| **Scan Date** | 2026-05-06 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-language-server.json)*
