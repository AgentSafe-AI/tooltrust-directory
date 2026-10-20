# 🟢 lean-ctx

> LeanCTX is the Context Gateway for AI Systems. Select task-relevant context, apply supported controls, connect local knowledge and inspect recorded evidence. Open-source Engine: CLI, MCP, hooks and supported proxy paths.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `scode-v0.2.0` |
| **Vendor** | yvgude |
| **Stars** | ⭐ 3890 |
| **Language** | Rust |
| **Source** | [lean-ctx](https://github.com/yvgude/lean-ctx) |
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
Embedded MCP server detected in rust source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/lean-ctx.json)*
