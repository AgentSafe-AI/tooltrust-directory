# 🟢 claude-task-master

> An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf, Roo, and others.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `task-master-ai@0.43.0` |
| **Vendor** | eyaltoledano |
| **Stars** | ⭐ 26039 |
| **Language** | JavaScript |
| **Source** | [claude-task-master](https://github.com/eyaltoledano/claude-task-master) |
| **Scan Date** | 2026-03-21 |
| **Scanner** | tooltrust-scanner/v0.1.12 |

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

### 🟡 `AS-009` — Typosquatting

**Severity:** Medium

**Description:**
tool name "get_task" is suspiciously similar to the well-known MCP tool "get_tag" (edit distance 2) — possible typosquatting

**Recommendation:**
This tool name closely resembles a well-known MCP tool name. Verify the server's authenticity before use. If you maintain this server, rename the tool to avoid collision with the canonical tool it resembles.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/claude-task-master.json)*
