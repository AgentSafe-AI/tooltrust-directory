# 🟢 claude-task-master

> An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf, Roo, and others.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `task-master-ai@0.43.0` |
| **Vendor** | eyaltoledano |
| **Stars** | ⭐ 25946 |
| **Language** | JavaScript |
| **Source** | [claude-task-master](https://github.com/eyaltoledano/claude-task-master) |
| **Scan Date** | 2026-03-16 |
| **Scanner** | tooltrust-scanner/0.1.4 |

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

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/claude-task-master.json)*
