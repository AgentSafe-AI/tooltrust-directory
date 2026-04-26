# 🟢 conorluddy-xc-mcp

> XCode CLI MCP: Convenience wrapper for Xcode CLI tools & iOS Simulator. Progressive disclosure of tool responses to reduce context usage.  Use --mini param for build-only with tiny context footprint.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `3.2.0` |
| **Vendor** | conorluddy |
| **Stars** | ⭐ 82 |
| **npm Package** | `xc-mcp` |
| **npm Downloads (30d)** | 402 |
| **Language** | TypeScript |
| **Source** | [conorluddy-xc-mcp](https://github.com/conorluddy/xc-mcp) |
| **Scan Date** | 2026-04-26 |
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
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/conorluddy-xc-mcp.json)*
