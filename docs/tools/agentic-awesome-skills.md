# 🟢 agentic-awesome-skills

> 2,926+ reusable AI agent skills for Claude Code, Codex, Cursor and Gemini CLI. AAS Core adds local catalog discovery, agent-owned selection and plan preview. CLI, MCP and plugins.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `20.6.0` |
| **Vendor** | sickn33 |
| **Stars** | ⭐ 49228 |
| **npm Package** | `agentic-awesome-skills` |
| **npm Downloads (30d)** | 20.2k |
| **Language** | Python |
| **Source** | [agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) |
| **Scan Date** | 2026-11-06 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/agentic-awesome-skills.json)*
