# 🟢 claude-task-master

> An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf, Roo, and others.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `task-master-ai@0.43.0` |
| **Vendor** | eyaltoledano |
| **Stars** | ⭐ 26016 |
| **Language** | JavaScript |
| **Source** | [claude-task-master](https://github.com/eyaltoledano/claude-task-master) |
| **Scan Date** | 2026-03-21 |
| **Scanner** | tooltrust-scanner/v0.1.11 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 2 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟡 `AS-013` — Tool Shadowing

**Severity:** Medium

**Description:**
tool name "get_task" is nearly identical to "get_tasks" (edit distance 1) — could shadow a trusted tool in a multi-server environment

**Recommendation:**
Two or more tools registered in your MCP environment share an identical or near-identical name. A malicious server can shadow a trusted tool this way, intercepting calls you intend for the legitimate tool. Remove the conflicting server or rename its tools to be unambiguous.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/claude-task-master.json)*
