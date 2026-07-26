# 🟢 mcptrustchecker

> Security scanner for MCP (Model Context Protocol) servers — reads the real published npm/PyPI source, not just metadata, to catch tool poisoning, prompt injection, toxic flows & supply-chain risk. Offline, deterministic A–F Trust Score, SARIF + CI gates.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `1.1.0` |
| **Vendor** | illiahaidar |
| **Stars** | ⭐ 144 |
| **npm Package** | `mcptrustchecker` |
| **npm Downloads (30d)** | 1.4k |
| **Language** | TypeScript |
| **Source** | [mcptrustchecker](https://github.com/illiahaidar/mcptrustchecker) |
| **Scan Date** | 2026-07-26 |
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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcptrustchecker.json)*
