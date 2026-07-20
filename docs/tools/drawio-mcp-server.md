# 🟢 drawio-mcp-server

> Draw.io Model Context Protocol (MCP) Server

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `2.2.0` |
| **Vendor** | lgazo |
| **Stars** | ⭐ 1330 |
| **npm Package** | `drawio-mcp` |
| **npm Downloads (30d)** | 668 |
| **Language** | TypeScript |
| **Source** | [drawio-mcp-server](https://github.com/lgazo/drawio-mcp-server) |
| **Scan Date** | 2026-07-20 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 2 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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
