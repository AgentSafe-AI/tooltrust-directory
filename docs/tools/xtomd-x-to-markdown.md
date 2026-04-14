# 🟢 xtomd-x-to-markdown

> Convert X (Twitter) articles, tweets, and threads to clean Markdown. Free,
   no auth required.

  **Tool:** `convert_x_to_markdown` — pass any X/Twitter URL, get structured
   Markdown back.

  Works with X Articles (long-form), regular tweets, note tweets, and
  threads. Returns author, date, engagement stats, full content with
  formatting preserved.

  Perfect for AI agents that can't access X links directly.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [xtomd-x-to-markdown](https://smithery.ai/server/xtomd/x-to-markdown) |
| **Scan Date** | 2026-04-14 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/xtomd-x-to-markdown.json)*
