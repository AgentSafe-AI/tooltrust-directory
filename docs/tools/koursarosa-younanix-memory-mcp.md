# 🟠 koursarosa-younanix-memory-mcp

> Younanix Memory MCP gives autonomous AI agents access to real-world engineering memory from actual incidents (Slack threads + GitHub issues in Supabase, TRPC, Drizzle, Rails, Node.js etc).  

Natural language tool: query_lessons (search for problems, root causes, solutions). Structured output: {problem, root_cause, lesson_learned, confidence (80-100%), category, tags}.  

Free preview: 1 query/hour (degraded results). Full access: $0.10/query via x402/USDC micropayments (permissionless, no API keys needed).  

1000+ lessons live, auto-growing from public repos. Connect once in Cursor/Claude Desktop/Windsurf → your agent auto-queries high-confidence fixes without hallucinations. Perfect for debugging, performance, security, reliability in real stacks.  

Site: https://www.younanix.com

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [koursarosa-younanix-memory-mcp](https://smithery.ai/server/KoursarosA/younanix-memory-mcp) |
| **Scan Date** | 2026-04-16 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 1 |
| Low      | 1 |
| Info     | 1 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/koursarosa-younanix-memory-mcp.json)*
