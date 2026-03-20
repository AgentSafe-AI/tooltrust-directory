# 🟠 ida-pro-mcp

> AI-powered reverse engineering assistant that bridges IDA Pro with language models through MCP.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 35 |
| **Version** | `1.4.0` |
| **Vendor** | mrexodia |
| **Stars** | ⭐ 6523 |
| **Language** | Python |
| **Source** | [ida-pro-mcp](https://github.com/mrexodia/ida-pro-mcp) |
| **Scan Date** | 2026-03-20 |
| **Scanner** | tooltrust-scanner/v0.1.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 2 |
| Low      | 2 |
| Info     | 0 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 18 properties (threshold: 10)

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ida-pro-mcp.json)*
