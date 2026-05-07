# 🟢 litterbox

> A self-hosted sandbox for red teams to test payloads against modern detection before deployment. MCP integration lets an LLM agent drive analysis end to end.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `5.0.0` |
| **Vendor** | BlackSnufkin |
| **Stars** | ⭐ 1411 |
| **Language** | YARA |
| **Source** | [litterbox](https://github.com/BlackSnufkin/LitterBox) |
| **Scan Date** | 2026-05-07 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/litterbox.json)*
