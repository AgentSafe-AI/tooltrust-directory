# 🟢 ethanhenrickson-math-mcp

> A Model Context Protocol (MCP) server that provides basic mathematical and statistical functions to Large Language Models (LLMs). This server enables LLMs to perform accurate numerical calculations through a simple API.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `0.1.3` |
| **Vendor** | EthanHenrickson |
| **Stars** | ⭐ 165 |
| **npm Package** | `math-mcp` |
| **npm Downloads (30d)** | 171 |
| **Language** | TypeScript |
| **Source** | [ethanhenrickson-math-mcp](https://github.com/EthanHenrickson/math-mcp) |
| **Scan Date** | 2026-07-29 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 7 |

## Detailed Findings

### ⚪ ⚡ `AS-006` — Arbitrary Code Execution

**Severity:** Info

**Description:**
tool name or description implies arbitrary script/code execution — capability unconfirmed (no exec permission or code/script/eval input property found)

**Recommendation:**
This tool can execute arbitrary code or shell commands on the host system. Remove it unless strictly required. If kept: (1) restrict access to trusted users/agents only, (2) require human approval before each invocation (Claude Desktop: set approval_required: true; other clients: enable equivalent confirmation), (3) use the most restrictive sandbox or read-only mode available, and (4) never expose this tool to untrusted input sources.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ethanhenrickson-math-mcp.json)*
