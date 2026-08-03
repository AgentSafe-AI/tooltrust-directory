# 🟢 mcp-filesystem-server

> Go server implementing Model Context Protocol (MCP) for filesystem operations.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.11.1` |
| **Vendor** | mark3labs |
| **Stars** | ⭐ 673 |
| **Language** | Go |
| **Source** | [mcp-filesystem-server](https://github.com/mark3labs/mcp-filesystem-server) |
| **Scan Date** | 2026-08-03 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-filesystem-server.json)*
