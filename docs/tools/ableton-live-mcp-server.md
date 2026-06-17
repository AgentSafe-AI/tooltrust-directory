# 🟢 ableton-live-mcp-server

> MCP Server implementation for Ableton Live OSC control

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `sha-97e7585e212d` |
| **Vendor** | Simon-Kansara |
| **Stars** | ⭐ 387 |
| **Language** | Python |
| **Source** | [ableton-live-mcp-server](https://github.com/Simon-Kansara/ableton-live-mcp-server) |
| **Scan Date** | 2026-06-17 |
| **Scanner** | tooltrust-scanner/v0.3.18 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ableton-live-mcp-server.json)*
