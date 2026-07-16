# 🟢 ipollowork

> Next-gen, source-available alternative to Codex and Claude Code — one local-first, self-hostable agent workspace for code, office work, editable design, presentations, websites, and video. Build with AI, then edit text, images, colors, layouts, and scenes as easily as PowerPoint.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.0.0` |
| **Vendor** | Devin-AXIS |
| **Stars** | ⭐ 1244 |
| **npm Package** | `@ipollo/ipollowork-workspace` |
| **Language** | TypeScript |
| **Source** | [ipollowork](https://github.com/Devin-AXIS/iPolloWork) |
| **Scan Date** | 2026-07-16 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ipollowork.json)*
