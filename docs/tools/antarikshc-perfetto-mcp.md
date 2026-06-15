# 🟢 antarikshc-perfetto-mcp

> This is a Model Context Protocol (MCP) server that gets answers from your Perfetto Traces. It turns natural‑language prompts into focused Perfetto analyses.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.4` |
| **Vendor** | antarikshc |
| **Stars** | ⭐ 173 |
| **Language** | Python |
| **Source** | [antarikshc-perfetto-mcp](https://github.com/antarikshc/perfetto-mcp) |
| **Scan Date** | 2026-06-15 |
| **Scanner** | tooltrust-scanner/v0.3.16 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/antarikshc-perfetto-mcp.json)*
