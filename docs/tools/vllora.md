# 🟢 vllora

> Debug your AI agents

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `.4.0-prerelease-32` |
| **Vendor** | vllora |
| **Stars** | ⭐ 813 |
| **Language** | Rust |
| **Source** | [vllora](https://github.com/vllora/vllora) |
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

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool '' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/vllora.json)*
