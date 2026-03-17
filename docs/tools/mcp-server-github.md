# 🟡 mcp-server-github

> MCP server for GitHub API integration — repository management, file operations, and search.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `2.0.0` |
| **Vendor** | modelcontextprotocol |
| **Stars** | ⭐ 12400 |
| **Language** | TypeScript |
| **Source** | [mcp-server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github) |
| **Scan Date** | 2026-03-01 |
| **Scanner** | ToolTrust Scanner/0.1.2 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 0 |

## Detailed Findings

### 🟠 🔓 `AS-005` — Privilege Escalation

**Severity:** High

**Description:**
The server requests a GitHub personal access token with repo scope (full read/write). Most use cases only require repo:read or specific sub-scopes, creating unnecessary privilege.

**Recommendation:**
Restrict OAuth/token scopes to the minimum necessary. Remove admin, :write wildcards and validate at startup that the provided token does not exceed declared scope.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
The tool does not gracefully handle GitHub API rate-limit responses (HTTP 429), which can cause agents to enter busy-retry loops.

**Recommendation:**
Implement exponential back-off and surface rate-limit state to the calling agent.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-github.json)*
