# 🟢 xcodebuildmcp

> A Model Context Protocol (MCP) server and CLI that provides tools for agent use when working on iOS and macOS projects.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.7.0` |
| **Vendor** | getsentry |
| **Stars** | ⭐ 6193 |
| **npm Package** | `xcodebuildmcp` |
| **npm Downloads (30d)** | 432.2k |
| **Language** | TypeScript |
| **Source** | [xcodebuildmcp](https://github.com/getsentry/XcodeBuildMCP) |
| **Scan Date** | 2026-08-05 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/xcodebuildmcp.json)*
