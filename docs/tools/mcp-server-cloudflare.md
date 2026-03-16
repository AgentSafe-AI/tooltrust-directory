# 🟡 mcp-server-cloudflare

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `graphql-mcp-server@0.1.10` |
| **Vendor** | cloudflare |
| **Stars** | ⭐ 3536 |
| **Language** | TypeScript |
| **Source** | [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) |
| **Scan Date** | 2026-03-16 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 3 |
| Medium   | 5 |
| Low      | 3 |
| Info     | 50 |

## Detailed Findings

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

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

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

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

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

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

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

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

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-cloudflare.json)*
