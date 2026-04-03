# 🟡 lieyanqzu-sbwsz-mcp

> 用于与万智牌中文卡查大学院废墟(sbwsz.com)API交互的MCP服务端

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `1.3.0` |
| **Vendor** | lieyanqzu |
| **Stars** | ⭐ 1 |
| **npm Package** | `sbwsz-mcp-server` |
| **npm Downloads (30d)** | 5 |
| **Language** | JavaScript |
| **Source** | [lieyanqzu-sbwsz-mcp](https://github.com/lieyanqzu/sbwsz-mcp) |
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
tool declares network permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/lieyanqzu-sbwsz-mcp.json)*
