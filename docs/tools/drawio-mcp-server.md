# 🟢 drawio-mcp-server

> Draw.io Model Context Protocol (MCP) Server

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `2.1.0` |
| **Vendor** | lgazo |
| **Stars** | ⭐ 1246 |
| **npm Package** | `drawio-mcp` |
| **npm Downloads (30d)** | 648 |
| **Language** | TypeScript |
| **Source** | [drawio-mcp-server](https://github.com/lgazo/drawio-mcp-server) |
| **Scan Date** | 2026-05-25 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/drawio-mcp-server.json)*
