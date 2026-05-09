# 🟢 kicad-mcp-server

> KiCAD MCP is a Model Context Protocol (MCP) implementation that enables Large Language Models (LLMs) like Claude to directly interact with KiCAD for printed circuit board design.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.1.0-alpha` |
| **Vendor** | mixelpixx |
| **Stars** | ⭐ 954 |
| **npm Package** | `kicad-mcp` |
| **Language** | Python |
| **Source** | [kicad-mcp-server](https://github.com/mixelpixx/KiCAD-MCP-Server) |
| **Scan Date** | 2026-05-09 |
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
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/kicad-mcp-server.json)*
