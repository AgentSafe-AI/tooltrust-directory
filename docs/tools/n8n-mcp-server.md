# 🟢 n8n-mcp-server

> MCP server that provides tools and resources for interacting with n8n API

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `0.1.8` |
| **Vendor** | leonardsellem |
| **Stars** | ⭐ 1584 |
| **Language** | TypeScript |
| **Source** | [n8n-mcp-server](https://github.com/leonardsellem/n8n-mcp-server) |
| **Scan Date** | 2026-03-20 |
| **Scanner** | tooltrust-scanner/v0.1.11 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/n8n-mcp-server.json)*
