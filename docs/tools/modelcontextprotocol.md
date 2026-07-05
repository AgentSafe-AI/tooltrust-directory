# 🟢 modelcontextprotocol

> The official MCP server implementation for the Perplexity API Platform

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.9.0` |
| **Vendor** | perplexityai |
| **Stars** | ⭐ 2365 |
| **npm Package** | `@perplexity-ai/mcp-server` |
| **npm Downloads (30d)** | 84.7k |
| **Language** | TypeScript |
| **Source** | [modelcontextprotocol](https://github.com/perplexityai/modelcontextprotocol) |
| **Scan Date** | 2026-07-05 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/modelcontextprotocol.json)*
