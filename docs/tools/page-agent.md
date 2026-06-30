# 🟢 page-agent

> JavaScript in-page GUI agent. Control web interfaces with natural language.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.10.0` |
| **Vendor** | alibaba |
| **Stars** | ⭐ 20630 |
| **npm Package** | `root` |
| **npm Downloads (30d)** | 10.0k |
| **Language** | TypeScript |
| **Source** | [page-agent](https://github.com/alibaba/page-agent) |
| **Scan Date** | 2026-06-30 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/page-agent.json)*
