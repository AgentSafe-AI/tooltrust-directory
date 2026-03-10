# 🟢 mcp-server-cloudflare

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `graphql-mcp-server@0.1.10` |
| **Vendor** | cloudflare |
| **Stars** | ⭐ 3520 |
| **Language** | TypeScript |
| **Source** | [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) |
| **Scan Date** | 2026-03-10 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟡 ⚠️ `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-cloudflare.json)*
