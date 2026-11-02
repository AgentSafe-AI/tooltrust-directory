# 🟢 reactive-resume

> A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. Try it out today!

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `6.0.9` |
| **Vendor** | reactive-resume |
| **Stars** | ⭐ 45173 |
| **npm Package** | `reactive-resume` |
| **npm Downloads (30d)** | 33 |
| **Language** | TypeScript |
| **Source** | [reactive-resume](https://github.com/reactive-resume/reactive-resume) |
| **Scan Date** | 2026-11-02 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/reactive-resume.json)*
