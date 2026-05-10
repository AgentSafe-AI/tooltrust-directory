# 🟡 mcp-server-commands

> Model Context Protocol server to run commands (tool: `runProcess`)

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.8.2` |
| **Vendor** | g0t4 |
| **Stars** | ⭐ 224 |
| **npm Package** | `mcp-server-commands` |
| **npm Downloads (30d)** | 2.8k |
| **Language** | TypeScript |
| **Source** | [mcp-server-commands](https://github.com/g0t4/mcp-server-commands) |
| **Scan Date** | 2026-05-10 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-commands.json)*
