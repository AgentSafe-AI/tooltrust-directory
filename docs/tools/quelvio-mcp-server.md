# 🟢 quelvio-mcp-server

> **Your company's brain for AI agents.**

Quelvio continuously understands your organization's knowledge across every connected system — what's authoritative, what's recent, what's persistent, what's temporary, and what should be forgotten. Returns cited answers grounded in your authoritative sources, refusing when the corpus doesn't actually answer the question.

## What makes Quelvio different

- **Cross-document supersession** — when sources conflict, surfaces the current truth and explicitly names what it supersedes
- **Authority-weighted retrieval** — weights documents by who said them on the relevant topic
- **Refuses on weak context** — when the corpus doesn't actually answer, says so. No hallucinated numbers, no fabricated citations
- **Cross-source synthesis** — reasons across Slack, Confluence, Notion, Drive simultaneously with explicit source attribution
- **Lifecycle awareness** — tracks current vs deprecated content, flags stale procedures

## Tools

- `query_knowledge` — search across all connected sources with optional synthesis modes (fast / standard / deep)
- `list_domains` — discover what knowledge domains your tenant has indexed
- `get_source_detail` — chunk-level provenance for any cited result

## Setup

1. Sign up at https://quelvio.com — 5GB indexed + 2 queries/day free tier
2. Connect your sources (Google Drive, SharePoint, Confluence, Slack, Notion, GitHub)
3. Add this MCP server to your client
4. Complete OAuth on first tool call

## Authentication

OAuth 2.1 with PKCE. Per-employee identity propagation — each query is scoped to the individual employee's permissions in source systems.

## Pricing

Per Knowledge Token model. Paid plans scale with usage and seats.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [quelvio-mcp-server](https://smithery.ai/server/quelvio/mcp-server) |
| **Scan Date** | 2026-07-23 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 6 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, database access

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: database access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: database access

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/quelvio-mcp-server.json)*
