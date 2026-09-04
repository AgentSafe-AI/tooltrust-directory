# 🟢 zig-mcp

> Model Context Protocol (MCP) server that provides up-to-date documentation for the Zig programming language standard library and builtin functions

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.4.0` |
| **Vendor** | zig-wasm |
| **Stars** | ⭐ 170 |
| **npm Package** | `zig-mcp` |
| **npm Downloads (30d)** | 309 |
| **Language** | TypeScript |
| **Source** | [zig-mcp](https://github.com/zig-wasm/zig-mcp) |
| **Scan Date** | 2026-09-04 |
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
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/zig-mcp.json)*
