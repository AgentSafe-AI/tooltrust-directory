# 🟠 mcp-server-code-execution-mode

> An MCP server that executes Python code in isolated rootless containers with optional MCP server proxying. Implementation of Anthropic's and Cloudflare's ideas for reducing MCP tool definitions context bloat.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `sha-27d23b8e2c76` |
| **Vendor** | elusznik |
| **Stars** | ⭐ 321 |
| **Language** | Python |
| **Source** | [mcp-server-code-execution-mode](https://github.com/elusznik/mcp-server-code-execution-mode) |
| **Scan Date** | 2026-04-04 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### 🔴 ⚡ `AS-006` — Arbitrary Code Execution

**Severity:** Critical

**Description:**
tool name or description implies arbitrary script/code execution (evaluate_script, execute javascript, etc.)

**Recommendation:**
This tool can execute arbitrary code or shell commands on the host system. Remove it unless strictly required. If kept: (1) restrict access to trusted users/agents only, (2) require human approval before each invocation (Claude Desktop: set approval_required: true; other clients: enable equivalent confirmation), (3) use the most restrictive sandbox or read-only mode available, and (4) never expose this tool to untrusted input sources.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-code-execution-mode.json)*
