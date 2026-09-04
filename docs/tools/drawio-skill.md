# 🟢 drawio-skill

> From text & real sources to maintainable .drawio architecture models: Diagram IR with source-kind profiles, incremental sync preserving manual layout, multi-view projection, architecture-as-test with a CI action, query/review, what-if, accessible Story Mode, and a built-in MCP server

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `3.2.1` |
| **Vendor** | Agents365-ai |
| **Stars** | ⭐ 9016 |
| **Language** | Python |
| **Source** | [drawio-skill](https://github.com/Agents365-ai/drawio-skill) |
| **Scan Date** | 2026-09-04 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/drawio-skill.json)*
