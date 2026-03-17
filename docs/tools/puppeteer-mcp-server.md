# 🟠 puppeteer-mcp-server

> This MCP server provides browser automation capabilities through Puppeteer, allowing interaction with both new browser instances and existing Chrome windows.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 42 |
| **Version** | `0.7.2` |
| **Vendor** | merajmehrabi |
| **Stars** | ⭐ 411 |
| **Language** | TypeScript |
| **Source** | [puppeteer-mcp-server](https://github.com/merajmehrabi/puppeteer-mcp-server) |
| **Scan Date** | 2026-03-17 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 8 |

## Detailed Findings

### ⚪ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🟠 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### 🔴 `AS-006` — Arbitrary Code Execution

**Severity:** Critical

**Description:**
tool name or description implies arbitrary script/code execution (evaluate_script, execute javascript, etc.)

**Recommendation:**
Avoid tools that execute arbitrary script/code from AI agents. If necessary, run them in a heavily restricted sandbox and require user approval.

---

### ⚪ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🔵 `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### ⚪ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
tool has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/puppeteer-mcp-server.json)*
