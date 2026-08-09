# 🟢 blender-mcp

> 🎨 Control Blender 3D with Claude AI — prompt-driven 3D modeling, materials & scene generation via MCP

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `sha-3ab892510cc0` |
| **Vendor** | ahujasid |
| **Stars** | ⭐ 25639 |
| **Language** | Python |
| **Source** | [blender-mcp](https://github.com/MCPBlender/blender-mcp) |
| **Scan Date** | 2026-08-09 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/blender-mcp.json)*
