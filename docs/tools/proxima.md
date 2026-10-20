# 🟢 proxima

> Multi-AI MCP Server - Connect ChatGPT, Claude, Gemini & Perplexity to your coding tools without any API

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `5.5.0` |
| **Vendor** | Zen4-bit |
| **Stars** | ⭐ 1199 |
| **npm Package** | `proxima` |
| **npm Downloads (30d)** | 436 |
| **Language** | JavaScript |
| **Source** | [proxima](https://github.com/Zen4-bit/Proxima) |
| **Scan Date** | 2026-10-20 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/proxima.json)*
