# 🟢 better-chatbot

> Just a Better Chatbot. Powered by Agent & MCP & Workflows.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.26.0` |
| **Vendor** | cgoinglove |
| **Stars** | ⭐ 1047 |
| **npm Package** | `better-chatbot` |
| **Language** | TypeScript |
| **Source** | [better-chatbot](https://github.com/cgoinglove/better-chatbot) |
| **Scan Date** | 2026-05-30 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/better-chatbot.json)*
