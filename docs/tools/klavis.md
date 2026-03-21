# 🟡 klavis

> Klavis AI:  MCP integration platforms that let AI agents use tools reliably at any scale

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `python-v2.20.0` |
| **Vendor** | Klavis-AI |
| **Stars** | ⭐ 5672 |
| **Language** | Python |
| **Source** | [klavis](https://github.com/Klavis-AI/klavis) |
| **Scan Date** | 2026-03-21 |
| **Scanner** | tooltrust-scanner/v0.1.11 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/klavis.json)*
