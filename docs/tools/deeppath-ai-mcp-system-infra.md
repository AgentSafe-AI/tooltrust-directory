# 🟡 deeppath-ai-mcp-system-infra

> 架构师-系统架构

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `0.0.1` |
| **Vendor** | deeppath-ai |
| **Stars** | ⭐ 2 |
| **npm Package** | `mcp-system-infra` |
| **npm Downloads (30d)** | 12 |
| **Language** | TypeScript |
| **Source** | [deeppath-ai-mcp-system-infra](https://github.com/deeppath-ai/mcp-system-infra) |
| **Scan Date** | 2026-04-03 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

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
tool declares exec permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/deeppath-ai-mcp-system-infra.json)*
