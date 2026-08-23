# 🟢 compress-new-compress-tokens

> Convert any webpage to clean markdown and feed it directly into AI agent workflows.

Why This Matters?

Adding webpages to LLM conversations usually means dumping raw HTML, bloated with ads, scripts, and formatting noise. This MCP integrates compress.new into MCP-compatible AI agents to extract only the content you need:

Lower token costs — Clean markdown vs. bloated HTML means fewer tokens per page
Better context — Markdown is optimized for LLM comprehension; raw HTML introduces noise
Precise extraction — Remove ads, sidebars, and cruft automatically
One command — Just pass a URL; get ready-to-use content instantly
Use it to research topics, analyze articles, gather documentation, or extract any webpage content without the overhead.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [compress-new-compress-tokens](https://smithery.ai/server/compress-new/compress-tokens) |
| **Scan Date** | 2026-08-23 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 2 |

## Detailed Findings

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "token" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/compress-new-compress-tokens.json)*
