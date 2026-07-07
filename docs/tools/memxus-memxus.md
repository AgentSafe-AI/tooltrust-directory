# 🟢 memxus-memxus

> **Memxus** is multi-platform persistent memory for AI assistants. Save project context, preferences, and decisions once — recall them in Claude, ChatGPT, Cursor, and other MCP clients.

## What it does
- **Remember** — store facts, preferences, and project context with collections and tags
- **Recall** — semantic search across your memories
- **Get context** — formatted context blocks for the current topic
- **Manage** — list, inspect, update scope, and delete memories

## Connect
- **OAuth** (recommended): sign in with Google via your Memxus dashboard
- **API key**: create an `aimem_*` key at [dashboard.memxus.com](https://dashboard.memxus.com)

**MCP endpoint:** `https://mcp.memxus.com/mcp`  
**Docs:** [memxus.com/docs/mcp](https://www.memxus.com/docs/mcp)  
**Install:** [memxus.com/install](https://www.memxus.com/install)  
**Privacy:** [memxus.com/privacy](https://www.memxus.com/privacy)

## Tools
`remember`, `recall`, `get_context`, `list_memories`, `get_memory`, `list_collections`, `forget`, `memory_stats`

Built for developers and power users who work across multiple AI tools without repeating the same context every session.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [memxus-memxus](https://smithery.ai/server/memxus/memxus) |
| **Scan Date** | 2026-07-07 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 9 |

## Detailed Findings

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
declared capabilities: filesystem access

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/memxus-memxus.json)*
