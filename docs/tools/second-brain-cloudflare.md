# 🟢 second-brain-cloudflare

> One memory layer, every AI tool. Store anything once — recall it in Claude, ChatGPT, Cursor, or any MCP client. Self-hosted on Cloudflare's free tier.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2.0.0` |
| **Vendor** | rahilp |
| **Stars** | ⭐ 696 |
| **npm Package** | `second-brain` |
| **npm Downloads (30d)** | 22 |
| **Language** | TypeScript |
| **Source** | [second-brain-cloudflare](https://github.com/rahilp/second-brain-cloudflare) |
| **Scan Date** | 2026-08-02 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

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

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/second-brain-cloudflare.json)*
