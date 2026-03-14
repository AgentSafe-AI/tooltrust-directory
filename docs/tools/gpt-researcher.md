# 🟢 gpt-researcher

> An autonomous agent that conducts deep research on any data using any LLM providers

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `3.4.3` |
| **Vendor** | assafelovic |
| **Stars** | ⭐ 25709 |
| **Language** | Python |
| **Source** | [gpt-researcher](https://github.com/assafelovic/gpt-researcher) |
| **Scan Date** | 2026-03-14 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/gpt-researcher.json)*
