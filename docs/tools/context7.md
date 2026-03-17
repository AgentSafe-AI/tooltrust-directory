# 🟡 context7

> Context7 Platform -- Up-to-date code documentation for LLMs and AI code editors

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `ctx7@0.3.6` |
| **Vendor** | upstash |
| **Stars** | ⭐ 49338 |
| **Language** | TypeScript |
| **Source** | [context7](https://github.com/upstash/context7) |
| **Scan Date** | 2026-03-17 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 0 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/context7.json)*
