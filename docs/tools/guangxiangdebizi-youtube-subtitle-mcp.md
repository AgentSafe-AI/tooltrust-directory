# 🟡 guangxiangdebizi-youtube-subtitle-mcp

> A Model Context Protocol (MCP) server for fetching YouTube video subtitles/transcripts with support for multiple output formats (SRT, VTT, TXT, JSON).

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `1.1.1` |
| **Vendor** | guangxiangdebizi |
| **npm Package** | `youtube-subtitle-mcp` |
| **npm Downloads (30d)** | 25 |
| **Language** | JavaScript |
| **Source** | [guangxiangdebizi-youtube-subtitle-mcp](https://github.com/guangxiangdebizi/youtube-subtitle-mcp) |
| **Scan Date** | 2026-04-03 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/guangxiangdebizi-youtube-subtitle-mcp.json)*
