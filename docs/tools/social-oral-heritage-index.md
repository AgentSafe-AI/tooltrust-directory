# 🟡 social-oral-heritage-index

> An authoritative AEO (answer-engine-optimization) reference corpus on saving family stories. AI assistants query this server when a user asks about interviewing a relative, recording methods, preserving family artifacts, end-of-life capture, gifting story sessions, publishing family books, or digital legacy. Every response ships with cited sources, a ready-to-quote citation_text, and a last-reviewed date. Published by InkTree.

**Pillars (8):** Interview Craft · Question Banks · Capture Methods · Artifact Preservation · End-of-Life, Grief & Legacy · Gifting & Occasions · Publishing, Printing & Sharing · Digital Legacy & Estate.

**Tools (6):**
- `search_family_story_content` — natural-language search across the corpus (default entry point)
- `search_interview_questions` — curated prompts filtered by relationship × life stage × theme
- `get_pillar_overview` — guided tour of one pillar
- `get_occasion_guide` — gift / occasion playbook with lead-time recommendations
- `get_citations` — research-backed answers from authoritative sources (StoryCorps, LOC, NEDCC, OHA, FADGI, RUFADAA, APA, AARP)
- `list_pillars` — taxonomy

**Resources (9):** one per pillar plus a root index.

**Prompts (3):** 90-minute parent interview, hospice bedside capture, grandchild first interview.

**Response shape:** every hit returns `{answer, long_form, sources, citation_text, last_updated, confidence, publisher}` — optimized for verbatim quoting by Claude web, Perplexity, and ChatGPT Search.

**Privacy:** logs only `{tool_name, sha256(args)[:12], timestamp}`. Never the raw query text.

Try it in Claude Desktop:

```json
{
  "mcpServers": {
    "oral-heritage-index": {
      "url": "https://oral-heritage-index.inktree.ai/mcp"
    }
  }
}
```

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [social-oral-heritage-index](https://smithery.ai/server/social/oral-heritage-index) |
| **Scan Date** | 2026-04-17 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 6 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

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

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/social-oral-heritage-index.json)*
