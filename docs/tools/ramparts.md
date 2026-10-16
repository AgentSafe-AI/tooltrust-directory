# 🟢 ramparts

> MCP & SKILL scanner that scans any mcp server or skills for indirect attack vectors and security or configuration vulnerabilities. Aligned with OWASP SKILL Top 10 and OWASP MCP Top 10 threats & vulnerabilities. 

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.8.10` |
| **Vendor** | highflame-ai |
| **Stars** | ⭐ 98 |
| **Language** | Rust |
| **Source** | [ramparts](https://github.com/highflame-ai/ramparts) |
| **Scan Date** | 2026-10-16 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ramparts.json)*
