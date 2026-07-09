# 🟢 cli

> Fine-grained control over model context protocol (MCP) clients, servers, and tools. Context is God.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.1` |
| **Vendor** | mcpgod |
| **Stars** | ⭐ 117 |
| **npm Package** | `mcpgod` |
| **npm Downloads (30d)** | 82 |
| **Language** | TypeScript |
| **Source** | [cli](https://github.com/mcpgod/cli) |
| **Scan Date** | 2026-07-09 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/cli.json)*
