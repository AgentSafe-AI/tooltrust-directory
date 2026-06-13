# 🟢 inspector

> Testing and evaluation platform to chat, inspect, and debug MCP servers, MCP apps, and ChatGPT apps.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.12.0` |
| **Vendor** | MCPJam |
| **Stars** | ⭐ 2012 |
| **npm Package** | `mcpjam-workspace` |
| **Language** | TypeScript |
| **Source** | [inspector](https://github.com/MCPJam/inspector) |
| **Scan Date** | 2026-06-13 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/inspector.json)*
