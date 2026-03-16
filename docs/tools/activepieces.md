# 🟡 activepieces

> AI Agents & MCPs & AI Workflow Automation • (~400 MCP servers for AI agents) • AI Automation / AI Agent with MCPs • AI Workflows & AI Agents • MCPs for AI Agents

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `0.79.3` |
| **Vendor** | activepieces |
| **Stars** | ⭐ 21225 |
| **Language** | TypeScript |
| **Source** | [activepieces](https://github.com/activepieces/activepieces) |
| **Scan Date** | 2026-03-16 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 6 |
| Low      | 2 |
| Info     | 60 |

## Detailed Findings

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### 🟠 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

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
tool declares network permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/activepieces.json)*
