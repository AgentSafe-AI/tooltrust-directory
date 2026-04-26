# 🟢 office-powerpoint-mcp-server

> A MCP (Model Context Protocol) server for PowerPoint manipulation using python-pptx. This server provides tools for creating, editing, and manipulating PowerPoint presentations through the MCP protocol.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.0.7` |
| **Vendor** | GongRzhe |
| **Stars** | ⭐ 1548 |
| **Language** | Python |
| **Source** | [office-powerpoint-mcp-server](https://github.com/GongRzhe/Office-PowerPoint-MCP-Server) |
| **Scan Date** | 2026-04-26 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/office-powerpoint-mcp-server.json)*
