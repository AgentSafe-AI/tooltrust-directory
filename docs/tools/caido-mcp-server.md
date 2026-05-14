# 🟢 caido-mcp-server

> MCP server for Caido proxy integration. Enables AI assistants like Claude Code to browse, analyse, and interact with HTTP traffic.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.0.0` |
| **Vendor** | c0tton-fluff |
| **Stars** | ⭐ 50 |
| **Language** | Go |
| **Source** | [caido-mcp-server](https://github.com/c0tton-fluff/caido-mcp-server) |
| **Scan Date** | 2026-05-14 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/caido-mcp-server.json)*
