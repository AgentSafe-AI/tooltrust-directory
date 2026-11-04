# 🟢 rust-sdk

> The official Rust SDK for the Model Context Protocol

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `rmcp-v3.8.0` |
| **Vendor** | modelcontextprotocol |
| **Stars** | ⭐ 4087 |
| **Language** | Rust |
| **Source** | [rust-sdk](https://github.com/modelcontextprotocol/rust-sdk) |
| **Scan Date** | 2026-11-04 |
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
Embedded MCP server detected in rust source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/rust-sdk.json)*
