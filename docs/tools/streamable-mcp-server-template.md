# 🟢 streamable-mcp-server-template

> Production-ready MCP server template with Streamable HTTP transport. Supports Node.js (Hono) and Cloudflare Workers. Includes OAuth 2.1, multi-tenant sessions, tool/resource/prompt registration, and AES-256-GCM token encryption.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.0.0` |
| **Vendor** | iceener |
| **Stars** | ⭐ 131 |
| **npm Package** | `mcp-server-template` |
| **npm Downloads (30d)** | 83 |
| **Language** | TypeScript |
| **Source** | [streamable-mcp-server-template](https://github.com/iceener/streamable-mcp-server-template) |
| **Scan Date** | 2026-06-02 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/streamable-mcp-server-template.json)*
