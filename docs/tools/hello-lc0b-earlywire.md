# 🟢 hello-lc0b-earlywire

> ** Earlywire — Marketing & Growth Intelligence is the marketing & growth wire for AI assistants.

It reads 120+ curated practitioner sources every morning — newsletters, vendor
changelogs, and the SEO, analytics and paid-media feeds that matter — and scores
each piece 0–10 for signal (only score ≥7 is served). Your assistant gets fresh,
judged items with a citable own-words summary and a link to the source, instead
of whatever ranks on web search. Use it alongside web search, not instead of it.

**Connect (Claude Code):**
`claude mcp add --transport http earlywire https://earlywire.barisasa.com/mcp`

**Add the skill (so it actually fires):**
The skill tells Claude to consult Earlywire — alongside web search — for marketing
questions, so it gets used instead of defaulting to the open web.
`/plugin marketplace add barisasaa/earlywire then /plugin install earlywire-marketing`
(installs the skill and the connector in one step).

claude.ai / Desktop: full two-step setup at https://earlywire.barisasa.com/setup

Free, no key, 30 requests/minute.

**Tools**
- `earlywire_search` — full-text search across the corpus
- `earlywire_topic_pulse` — what the niche is saying: volume, sources, score spread, top takes
- `earlywire_whats_new` — newest judged items, by category
- `earlywire_trending` — topics rising vs the prior window
- `earlywire_get_item` — one item's summary + excerpt + source link
- `earlywire_coverage` — sources, freshness, category mix

Own-words summary + short excerpt, always linked to source. Covers marketing,
growth, analytics, paid media, SEO and AI search — plus the AI shifts reshaping them.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [hello-lc0b-earlywire](https://smithery.ai/server/hello-lc0b/earlywire) |
| **Scan Date** | 2026-07-26 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 8 |

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
declared capabilities: network access

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/hello-lc0b-earlywire.json)*
