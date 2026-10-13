# 🟢 aoci-code

> A persistent, Git-versioned map of your whole codebase and database schema that coding agents read before they touch anything. Local-first MCP server + CLI in Go: a governed repository index of code knowledge that gives Claude Code, Codex, Cursor, and opencode long-term context, memory, and code intelligence.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.0-rc20` |
| **Vendor** | aoci-spec |
| **Stars** | ⭐ 1513 |
| **Language** | Go |
| **Source** | [aoci-code](https://github.com/aoci-spec/aoci-code) |
| **Scan Date** | 2026-10-13 |
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
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/aoci-code.json)*
