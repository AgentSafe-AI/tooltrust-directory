# 🟢 mongodb-mcp-server

> A Model Context Protocol server to connect to MongoDB databases and MongoDB Atlas Clusters.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `1.8.1` |
| **Vendor** | mongodb-js |
| **Stars** | ⭐ 958 |
| **Language** | TypeScript |
| **Source** | [mongodb-mcp-server](https://github.com/mongodb-js/mongodb-mcp-server) |
| **Scan Date** | 2026-03-14 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mongodb-mcp-server.json)*
