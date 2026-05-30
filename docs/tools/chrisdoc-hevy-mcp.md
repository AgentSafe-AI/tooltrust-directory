# 🟢 chrisdoc-hevy-mcp

> Manage your Hevy workouts, routines, folders, and exercise templates. Create and update sessions faster, organize plans, and search exercises to build workouts quickly. Stay synced with changes so your training log is always up to date.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.23.3` |
| **Vendor** | chrisdoc |
| **Stars** | ⭐ 218 |
| **npm Package** | `hevy-mcp` |
| **npm Downloads (30d)** | 6.6k |
| **Language** | TypeScript |
| **Source** | [chrisdoc-hevy-mcp](https://github.com/chrisdoc/hevy-mcp) |
| **Scan Date** | 2026-05-30 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/chrisdoc-hevy-mcp.json)*
