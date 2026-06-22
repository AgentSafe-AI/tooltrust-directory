# 🟢 call518-mcp-postgresql-ops

> 🐘 Give AI assistants full PostgreSQL DBA superpowers — 30+ tools for performance analysis, bloat detection, lock/deadlock monitoring, autovacuum & schema inspection. No extensions required. PG 12-18.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `3.3.6` |
| **Vendor** | call518 |
| **Stars** | ⭐ 148 |
| **Language** | Python |
| **Source** | [call518-mcp-postgresql-ops](https://github.com/call518/MCP-PostgreSQL-Ops) |
| **Scan Date** | 2026-06-22 |
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
declared capabilities: code/command execution, network access, database access

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/call518-mcp-postgresql-ops.json)*
