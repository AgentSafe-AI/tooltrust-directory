# 🟢 reyd8777-framefetch

> # FrameFetch

**One API/MCP call gives an agent clean video data across 6 platforms** — metadata + insights, a Whisper transcript, and parametric frames (pick fps or exact timestamps → pushed to S3). YouTube (incl. Shorts), TikTok, Reddit, Instagram, Pinterest.

Agent-first: typed errors, refund-on-fail, result caching. Pay per call via x402 (USDC on Base) or Stripe.

## Endpoints
- POST /v1/extract — any combination of metadata/insights/transcript/frames in one call
- POST /v1/metadata · /v1/transcript · /v1/frames — shortcuts
- GET /v1/platforms — capability matrix · POST /v1/keys — free key + credit

## Example
curl -X POST https://framefetch.net/v1/extract -H "Authorization: Bearer <key>" -H "Content-Type: application/json" -d '{"url":"https://youtu.be/...","fields":["metadata","transcript"]}'

https://framefetch.net

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [reyd8777-framefetch](https://smithery.ai/server/reyd8777/framefetch) |
| **Scan Date** | 2026-07-29 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 4 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, HTTP requests

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
declared capabilities: network access, HTTP requests

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/reyd8777-framefetch.json)*
