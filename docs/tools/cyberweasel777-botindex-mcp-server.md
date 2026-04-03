# 🟢 cyberweasel777-botindex-mcp-server

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `2.1.1` |
| **Vendor** | cyberweasel777 |
| **npm Package** | `botindex-mcp-server` |
| **npm Downloads (30d)** | 2.1k |
| **Language** | JavaScript |
| **Source** | [cyberweasel777-botindex-mcp-server](https://github.com/Cyberweasel777/botindex-mcp-server) |
| **Scan Date** | 2026-04-03 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

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
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/cyberweasel777-botindex-mcp-server.json)*
