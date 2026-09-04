# 🟢 codex-with-chatgpt

> ChatGPT thinks. Codex works. Use ChatGPT as the planning brain while keeping the Codex harness.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.1.1` |
| **Vendor** | XiaoDuoYa |
| **Stars** | ⭐ 2405 |
| **npm Package** | `codex-with-chatgpt` |
| **Language** | TypeScript |
| **Source** | [codex-with-chatgpt](https://github.com/XiaoDuoYa/codex-with-chatgpt) |
| **Scan Date** | 2026-09-04 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/codex-with-chatgpt.json)*
