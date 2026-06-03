# 🟢 razorpay-mcp-server

> Razorpay's Official MCP Server

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.2.1` |
| **Vendor** | razorpay |
| **Stars** | ⭐ 224 |
| **Language** | Go |
| **Source** | [razorpay-mcp-server](https://github.com/razorpay/razorpay-mcp-server) |
| **Scan Date** | 2026-06-03 |
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
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/razorpay-mcp-server.json)*
