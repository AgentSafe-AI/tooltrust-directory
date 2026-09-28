# 🟢 best-of-agent-harnesses

> 🏆 Ranked list of 167 AI agent harnesses, plus copy-paste templates (AGENTS.md, safe Claude Code settings, a minimal harness) and step-by-step playbooks. MCP server, llms.txt & JSON. Rescored weekly.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `mcp-v0.6.0` |
| **Vendor** | RyanAlberts |
| **Stars** | ⭐ 990 |
| **Language** | Python |
| **Source** | [best-of-agent-harnesses](https://github.com/RyanAlberts/best-of-Agent-Harnesses) |
| **Scan Date** | 2026-09-28 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/best-of-agent-harnesses.json)*
