# 🟢 gemini-cli

> An open-source AI agent that brings the power of Gemini directly into your terminal.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `0.33.1` |
| **Vendor** | google-gemini |
| **Stars** | ⭐ 97441 |
| **Language** | TypeScript |
| **Source** | [gemini-cli](https://github.com/google-gemini/gemini-cli) |
| **Scan Date** | 2026-03-13 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/gemini-cli.json)*
