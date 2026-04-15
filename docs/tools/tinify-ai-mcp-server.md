# 🟠 tinify-ai-mcp-server

> Optimize images with AI — compress, resize, upscale, convert formats, and generate SEO metadata in one tool.

## What it does

One `optimize_image` tool that handles everything:

- **Smart compression** — 60-80% file size reduction with minimal quality loss (JPG, PNG, WebP, AVIF, GIF, SVG, ICO)
- **Resize & upscale** — scale to exact dimensions or upscale with AI enhancement
- **Format conversion** — convert between JPG, PNG, WebP, AVIF, GIF, SVG, ICO (including animated GIF frame-by-frame processing)
- **SEO metadata** — AI-generated alt text, title tags, and SEO-friendly filenames
- **Batch processing** — optimize multiple images in sequence

## Supported formats

Input: JPG, PNG, WebP, AVIF, GIF (animated), SVG, ICO, HEIC, TIFF, BMP (max 50 MB)
Output: JPG, PNG, WebP, AVIF, GIF (animated), SVG, ICO

## Pricing

Free tier: 20 credits/day, no signup required. or 50 credits/day for registered users.
Each optimization costs 3 credits (+1 for SEO tags). See https://tinify.ai/pricing/ for more details.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 27 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [tinify-ai-mcp-server](https://smithery.ai/server/tinify-ai/mcp-server) |
| **Scan Date** | 2026-04-15 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 1 |
| Low      | 2 |
| Info     | 3 |

## Detailed Findings

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
input schema exposes 12 properties (threshold: 10)

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/tinify-ai-mcp-server.json)*
