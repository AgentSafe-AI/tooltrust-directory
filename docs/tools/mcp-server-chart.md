# 🟡 mcp-server-chart

> 🤖 A visualization mcp & skills contains 25+ visual charts using @antvis. Using for chart generation and data analysis.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `0.9.10` |
| **Vendor** | antvis |
| **Stars** | ⭐ 3822 |
| **Language** | TypeScript |
| **Source** | [mcp-server-chart](https://github.com/antvis/mcp-server-chart) |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-chart.json)*
