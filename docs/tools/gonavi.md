# 🟢 gonavi

> High-performance multi-data-source database client — ~30MB, AI & MCP ready, zero Electron bloat. | 高性能多数据源数据库客户端：约 30MB，AI 与 MCP 就绪，告别 Electron 膨胀。

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.9.2` |
| **Vendor** | Syngnat |
| **Stars** | ⭐ 1852 |
| **Language** | TypeScript |
| **Source** | [gonavi](https://github.com/Syngnat/GoNavi) |
| **Scan Date** | 2026-08-12 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/gonavi.json)*
