# 🟢 mcp-server-commands

> Model Context Protocol server to run commands (tool: `runProcess`)

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `0.8.2` |
| **Vendor** | g0t4 |
| **Stars** | ⭐ 231 |
| **npm Package** | `mcp-server-commands` |
| **npm Downloads (30d)** | 1.8k |
| **Language** | TypeScript |
| **Source** | [mcp-server-commands](https://github.com/g0t4/mcp-server-commands) |
| **Scan Date** | 2026-08-18 |
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
declared capabilities: code/command execution

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-commands.json)*
