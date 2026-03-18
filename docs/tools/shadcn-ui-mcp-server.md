# 🟢 shadcn-ui-mcp-server

> A mcp server to allow LLMS gain context about shadcn ui component structure,usage and installation,compaitable with react,svelte 5,vue & React Native

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `2.0.0` |
| **Vendor** | Jpisnice |
| **Stars** | ⭐ 2705 |
| **Language** | TypeScript |
| **Source** | [shadcn-ui-mcp-server](https://github.com/Jpisnice/shadcn-ui-mcp-server) |
| **Scan Date** | 2026-03-18 |
| **Scanner** | tooltrust-scanner/v0.1.6 |

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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/shadcn-ui-mcp-server.json)*
