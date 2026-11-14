# 🟢 genai-agents

> 50+ tutorials and implementations for Generative AI Agent techniques, from basic conversational bots to complex multi-agent systems.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `book-v1.0` |
| **Vendor** | NirDiamant |
| **Stars** | ⭐ 24960 |
| **Language** | Jupyter Notebook |
| **Source** | [genai-agents](https://github.com/NirDiamant/GenAI_Agents) |
| **Scan Date** | 2026-11-14 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/genai-agents.json)*
