# 🟠 justinbeckwith-linkinator-mcp

> MCP server for link checking using linkinator

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `linkinator-mcp-v0.2.5` |
| **Vendor** | JustinBeckwith |
| **Stars** | ⭐ 3 |
| **npm Package** | `linkinator-mcp` |
| **npm Downloads (30d)** | 252 |
| **Language** | TypeScript |
| **Source** | [justinbeckwith-linkinator-mcp](https://github.com/JustinBeckwith/linkinator-mcp) |
| **Scan Date** | 2026-04-03 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 1 |
| Low      | 1 |
| Info     | 0 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 18 properties (threshold: 10)

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/justinbeckwith-linkinator-mcp.json)*
