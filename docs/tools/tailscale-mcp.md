# 🟢 tailscale-mcp

> server that provides seamless integration with Tailscale's CLI commands and REST API, enabling automated network management and monitoring through a standardized interface

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.3.4` |
| **Vendor** | HexSleeves |
| **Stars** | ⭐ 114 |
| **npm Package** | `@hexsleeves/tailscale-mcp-server` |
| **npm Downloads (30d)** | 1.6k |
| **Language** | TypeScript |
| **Source** | [tailscale-mcp](https://github.com/HexSleeves/tailscale-mcp) |
| **Scan Date** | 2026-07-28 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/tailscale-mcp.json)*
