# 🟢 outlook-mcp

> MCP server for Claude to access Outlook data via Microsoft Graph API

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 4 |
| **Version** | `2.0.0` |
| **Vendor** | ryaker |
| **Stars** | ⭐ 433 |
| **npm Package** | `m365-mcp` |
| **npm Downloads (30d)** | 169 |
| **Language** | JavaScript |
| **Source** | [outlook-mcp](https://github.com/ryaker/outlook-mcp) |
| **Scan Date** | 2026-09-06 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 7 |
| Info     | 16 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: HTTP requests

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 23 properties (threshold: 10)

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'message' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: HTTP requests

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 20 properties (threshold: 10)

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'calendar' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'me' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: code/command execution

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'summary' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'notifications' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: code/command execution

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 23 properties (threshold: 10)

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'teams' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/outlook-mcp.json)*
