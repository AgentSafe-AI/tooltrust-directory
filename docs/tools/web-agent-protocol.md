# 🟢 web-agent-protocol

> 🌐Web Agent Protocol (WAP) - Record and replay user interactions in the browser with MCP support

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `wap-replay-tool-1.0.0` |
| **Vendor** | OTA-Tech-AI |
| **Stars** | ⭐ 498 |
| **Language** | Python |
| **Source** | [web-agent-protocol](https://github.com/OTA-Tech-AI/web-agent-protocol) |
| **Scan Date** | 2026-06-24 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/web-agent-protocol.json)*
