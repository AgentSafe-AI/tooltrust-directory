# 🟢 memory-mcp-server-go

> A Model Context Protocol server that provides knowledge graph management capabilities.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.5.5` |
| **Vendor** | okooo5km |
| **Stars** | ⭐ 92 |
| **Language** | Go |
| **Source** | [memory-mcp-server-go](https://github.com/okooo5km/memory-mcp-server-go) |
| **Scan Date** | 2026-06-17 |
| **Scanner** | tooltrust-scanner/v0.3.18 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/memory-mcp-server-go.json)*
