# 🟢 memorix

> Open-source cross-agent memory layer for coding agents via MCP. Compatible with Cursor, Claude Code, Codex, Windsurf, Gemini CLI, GitHub Copilot, Kiro, OpenCode, Antigravity, and Trae.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.0.10` |
| **Vendor** | AVIDS2 |
| **Stars** | ⭐ 513 |
| **npm Package** | `memorix` |
| **npm Downloads (30d)** | 1.6k |
| **Language** | TypeScript |
| **Source** | [memorix](https://github.com/AVIDS2/memorix) |
| **Scan Date** | 2026-06-19 |
| **Scanner** | tooltrust-scanner/v0.3.18 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/memorix.json)*
