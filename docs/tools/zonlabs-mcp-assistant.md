# 🟠 zonlabs-mcp-assistant

> # MCP Assistant 

MCP Assistant provides access to **100+ MCP servers** like GitHub, Notion, Zapier, Supabase, etc. 
* **Connect & Manage Integrations**: You can configure and connect these integrations/connectors directly from the [MCP Assistant Dashboard](https://mcp-assistant.in/mcp).
* **Advanced Features**: It exposes **meta-tools for dynamic MCP discovery** and a **CodeMode tool** that executes programs inside a secure sandbox for programmatic tool calling, workflow execution, and result processing, avoiding expensive LLM tool-calling loops.


## Endpoint
Use this URL with your Assistant such as (OpenCode, Cursor, Codex, ClaudeCode, Antigravity etc.):
```text
https://api.mcp-assistant.in/mcp
```

---

## Key Features

* **Unified Gateway**: Access 100+ third-party integrations (GitHub, Notion, Zapier, Slack, Discord, Supabase) through a single endpoint.
* **Dynamic Tool Discovery**: Run semantic searches across all connected tool schemas.
* **CodeMode Sandbox**: Execute JavaScript/TypeScript scripts on the server side using the `@mcp-ts/codemode` secure sandbox. Run multi-step programmatic workflows or batch actions directly from a single LLM request to avoid expensive round-trips.
* **Standard OAuth Authentication**: Fully compatible with client-side OAuth handlers—log in securely via your browser to authorize access to your integrations.

---

## Primary Tools Provided

| Tool | Description |
| :--- | :--- |
| `search_mcp_tools` | Performs a semantic/phrase search across all your connected tools and returns normalized discovery results. |
| `get_mcp_tool_schema` | Retrieves the exact input/output JSON schemas and execution helper details for any tool. |
| `codemode_run` | Instantly executes a script inside the CodeMode sandbox to chain multiple tool calls, format outputs, or filter large responses. |
| `list_mcp_servers` | Lists all connected MCP servers and the number of tools each provides. |

---

## Client Configuration

### VS Code
Add the server connection to your VS Code settings:
```json
{
  "servers": {
    "mcp-assistant": {
      "type": "http",
      "url": "https://api.mcp-assistant.in/mcp"
    }
  }
}
```

### Cursor / Antigravity / Claude Desktop
Add to your client configuration file:
```json
{
  "mcpServers": {
    "mcp-assistant": {
      "url": "https://api.mcp-assistant.in/mcp"
    }
  }
}
```

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [zonlabs-mcp-assistant](https://smithery.ai/server/zonlabs/mcp_assistant) |
| **Scan Date** | 2026-07-09 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 6 |

## Detailed Findings

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
declared capabilities: code/command execution, network access

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📐 `AS-003` — Scope Mismatch

**Severity:** High

**Description:**
tool name "search_mcp_tools" implies read-only operation but declares exec permission

**Recommendation:**
Ensure tool names, descriptions, and permission declarations are internally consistent. Use explicit naming conventions that fully reflect actual capabilities.

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
declared capabilities: code/command execution

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/zonlabs-mcp-assistant.json)*
