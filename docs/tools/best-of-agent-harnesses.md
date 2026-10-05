# 🟢 best-of-agent-harnesses

> 🏆 Ranked list of 167 AI agent harnesses, plus templates, playbooks, MCP, and learning resources. Rescored weekly.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `mcp-v0.6.0` |
| **Vendor** | RyanAlberts |
| **Stars** | ⭐ 1068 |
| **Language** | Python |
| **Source** | [best-of-agent-harnesses](https://github.com/RyanAlberts/best-of-Agent-Harnesses) |
| **Scan Date** | 2026-10-05 |
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
