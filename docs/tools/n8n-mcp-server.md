# 🟡 n8n-mcp-server

> MCP server that provides tools and resources for interacting with n8n API

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.1.8` |
| **Vendor** | leonardsellem |
| **Stars** | ⭐ 1584 |
| **Language** | TypeScript |
| **Source** | [n8n-mcp-server](https://github.com/leonardsellem/n8n-mcp-server) |
| **Scan Date** | 2026-03-22 |
| **Scanner** | tooltrust-scanner/v0.1.15 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
Tool set changed silently at v0.1.8: 1 tool(s) added, 27 tool(s) removed without a version bump.

**Recommendation:**
The set of tools exposed by this server changed between scans of the same version — a sign the package was silently updated without a version bump. Audit the changelog and all tool definitions before trusting this server. Pin to a specific commit hash rather than a floating version tag.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/n8n-mcp-server.json)*
