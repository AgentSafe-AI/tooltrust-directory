# 🟢 drawio-mcp-server

> Draw.io Model Context Protocol (MCP) Server

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `1.8.0` |
| **Vendor** | lgazo |
| **Stars** | ⭐ 1049 |
| **Language** | TypeScript |
| **Source** | [drawio-mcp-server](https://github.com/lgazo/drawio-mcp-server) |
| **Scan Date** | 2026-03-18 |
| **Scanner** | tooltrust-scanner/v0.1.6 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 2 |
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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/drawio-mcp-server.json)*
