# 🟠 mcp-server-code-runner

> Code Runner MCP Server

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `0.1.8` |
| **Vendor** | formulahendry |
| **Stars** | ⭐ 239 |
| **Language** | TypeScript |
| **Source** | [mcp-server-code-runner](https://github.com/formulahendry/mcp-server-code-runner) |
| **Scan Date** | 2026-03-22 |
| **Scanner** | tooltrust-scanner/v0.1.15 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🔴 ⚡ `AS-006` — Arbitrary Code Execution

**Severity:** Critical

**Description:**
tool name or description implies arbitrary script/code execution (evaluate_script, execute javascript, etc.)

**Recommendation:**
This tool can execute arbitrary code or shell commands on the host system. Remove it unless strictly required. If kept: (1) restrict access to trusted users/agents only, (2) require human approval before each invocation (Claude Desktop: set approval_required: true; other clients: enable equivalent confirmation), (3) use the most restrictive sandbox or read-only mode available, and (4) never expose this tool to untrusted input sources.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-code-runner.json)*
