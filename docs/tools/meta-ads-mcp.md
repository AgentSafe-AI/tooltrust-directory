# 🟢 meta-ads-mcp

> Meta Ads (Facebook/Instagram) MCP server for Claude, ChatGPT, Perplexity & Cursor — the Meta node of Pipeboard’s 5-platform family (+ Google, TikTok, Snap, Reddit). Hosted remote MCP, badged Meta Business Partner, free plan — no self-hosting required.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.0.101` |
| **Vendor** | pipeboard-co |
| **Stars** | ⭐ 1142 |
| **Language** | Python |
| **Source** | [meta-ads-mcp](https://github.com/pipeboard-co/meta-ads-mcp) |
| **Scan Date** | 2026-08-05 |
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
Embedded MCP server detected in python source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/meta-ads-mcp.json)*
