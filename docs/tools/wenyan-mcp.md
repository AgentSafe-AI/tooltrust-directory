# 🟠 wenyan-mcp

> 文颜 MCP Server 可以让 AI 自动将 Markdown 文章排版后发布至微信公众号。

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `2.0.1` |
| **Vendor** | caol64 |
| **Stars** | ⭐ 1120 |
| **Language** | JavaScript |
| **Source** | [wenyan-mcp](https://github.com/caol64/wenyan-mcp) |
| **Scan Date** | 2026-03-21 |
| **Scanner** | tooltrust-scanner/v0.1.11 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 3 |
| Low      | 1 |
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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/wenyan-mcp.json)*
