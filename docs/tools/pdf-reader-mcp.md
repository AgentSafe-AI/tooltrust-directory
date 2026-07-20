# 🟢 pdf-reader-mcp

> 📄 The PDF intelligence layer for AI agents — Agent Document Twin, evidence-first extraction, visual crops, OCR provenance, trust reports, and benchmark-gated releases. MCP server for Claude, Cursor, VS Code, and any MCP client.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `3.1.1` |
| **Vendor** | SylphxAI |
| **Stars** | ⭐ 830 |
| **npm Package** | `@sylphx/pdf-reader-mcp` |
| **npm Downloads (30d)** | 29.1k |
| **Language** | TypeScript |
| **Source** | [pdf-reader-mcp](https://github.com/SylphxAI/pdf-reader-mcp) |
| **Scan Date** | 2026-07-20 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 7 |

## Detailed Findings

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'read_pdf' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'search_pdf' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

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
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'pdf_evidence' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/pdf-reader-mcp.json)*
