# 🟠 mcp-filesystem-server

> Go server implementing Model Context Protocol (MCP) for filesystem operations.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 32 |
| **Version** | `0.11.1` |
| **Vendor** | mark3labs |
| **Stars** | ⭐ 617 |
| **Language** | Go |
| **Source** | [mcp-filesystem-server](https://github.com/mark3labs/mcp-filesystem-server) |
| **Scan Date** | 2026-03-17 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 2 |

## Detailed Findings

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

### 🟠 `AS-003` — Scope Mismatch

**Severity:** High

**Description:**
tool name "search_files" implies read-only operation but declares network permission

**Recommendation:**
Ensure tool names, descriptions, and permission declarations are internally consistent. Use explicit naming conventions that fully reflect actual capabilities.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-filesystem-server.json)*
