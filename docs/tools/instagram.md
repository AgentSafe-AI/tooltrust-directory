# 🟠 instagram

> Instagram Business API MCP server for managing posts, media, and account insights.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 27 |
| **Version** | `smithery` |
| **Source** | [instagram](https://smithery.ai/server/instagram) |
| **Scan Date** | 2026-03-21 |
| **Scanner** | tooltrust-scanner/v0.1.11 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 4 |
| Medium   | 5 |
| Low      | 4 |
| Info     | 0 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
tool set changed between scans of vsmithery without a version bump: added=[INSTAGRAM_CREATE_CAROUSEL_CONTAINER INSTAGRAM_CREATE_MEDIA_CONTAINER INSTAGRAM_CREATE_POST INSTAGRAM_GET_CONVERSATION INSTAGRAM_GET_POST_COMMENTS INSTAGRAM_GET_POST_INSIGHTS INSTAGRAM_GET_POST_STATUS INSTAGRAM_GET_USER_INFO INSTAGRAM_GET_USER_INSIGHTS INSTAGRAM_GET_USER_MEDIA INSTAGRAM_LIST_ALL_CONVERSATIONS INSTAGRAM_LIST_ALL_MESSAGES INSTAGRAM_MARK_SEEN INSTAGRAM_REPLY_TO_COMMENT INSTAGRAM_SEND_IMAGE INSTAGRAM_SEND_TEXT_MESSAGE] removed=[ig_delete_comment ig_get_account ig_get_account_insights ig_get_children ig_get_comment ig_get_hashtag_recent ig_get_hashtag_top ig_get_media ig_get_media_insights ig_get_mentioned_media ig_get_story_insights ig_hide_comment ig_list_comments ig_list_media ig_list_stories ig_list_tags ig_publish_carousel ig_publish_photo ig_publish_reel ig_publish_story ig_reply_comment ig_search_hashtag] (previous=[ig_delete_comment ig_get_account ig_get_account_insights ig_get_children ig_get_comment ig_get_hashtag_recent ig_get_hashtag_top ig_get_media ig_get_media_insights ig_get_mentioned_media ig_get_story_insights ig_hide_comment ig_list_comments ig_list_media ig_list_stories ig_list_tags ig_publish_carousel ig_publish_photo ig_publish_reel ig_publish_story ig_reply_comment ig_search_hashtag] current=[INSTAGRAM_CREATE_CAROUSEL_CONTAINER INSTAGRAM_CREATE_MEDIA_CONTAINER INSTAGRAM_CREATE_POST INSTAGRAM_GET_CONVERSATION INSTAGRAM_GET_POST_COMMENTS INSTAGRAM_GET_POST_INSIGHTS INSTAGRAM_GET_POST_STATUS INSTAGRAM_GET_USER_INFO INSTAGRAM_GET_USER_INSIGHTS INSTAGRAM_GET_USER_MEDIA INSTAGRAM_LIST_ALL_CONVERSATIONS INSTAGRAM_LIST_ALL_MESSAGES INSTAGRAM_MARK_SEEN INSTAGRAM_REPLY_TO_COMMENT INSTAGRAM_SEND_IMAGE INSTAGRAM_SEND_TEXT_MESSAGE])

**Recommendation:**
The set of tools exposed by this server changed between scans of the same version — a sign the package was silently updated without a version bump. Audit the changelog and all tool definitions before trusting this server. Pin to a specific commit hash rather than a floating version tag.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 11 properties (threshold: 10)

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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/instagram.json)*
