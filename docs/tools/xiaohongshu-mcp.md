# 🟢 xiaohongshu-mcp

> MCP for xiaohongshu.com

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `2026.07.26.1327-b8412a2` |
| **Vendor** | xpzouying |
| **Stars** | ⭐ 15444 |
| **Language** | Go |
| **Source** | [xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) |
| **Scan Date** | 2026-08-24 |
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
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/xiaohongshu-mcp.json)*
