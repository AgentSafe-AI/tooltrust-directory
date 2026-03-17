# 🟡 xhs-downloader

> 小红书（XiaoHongShu、RedNote）链接提取/作品采集工具：提取账号发布、收藏、点赞、专辑作品链接；提取搜索结果作品、用户链接；采集小红书作品信息；提取小红书作品下载地址；下载小红书作品文件

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `2.7` |
| **Vendor** | JoeanAmier |
| **Stars** | ⭐ 10404 |
| **Language** | Python |
| **Source** | [xhs-downloader](https://github.com/JoeanAmier/XHS-Downloader) |
| **Scan Date** | 2026-03-17 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 9 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/xhs-downloader.json)*
