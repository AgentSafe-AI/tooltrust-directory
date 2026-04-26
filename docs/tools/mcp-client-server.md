# 🟡 mcp-client-server

> An MCP Server that's also an MCP Client. Useful for letting Claude develop and test MCPs without needing to reset the application.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `0.1.0` |
| **Vendor** | willccbb |
| **Stars** | ⭐ 124 |
| **npm Package** | `mcp-test-client` |
| **npm Downloads (30d)** | 4.8k |
| **Language** | TypeScript |
| **Source** | [mcp-client-server](https://github.com/willccbb/mcp-client-server) |
| **Scan Date** | 2026-04-26 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 1 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
Tool set changed silently at v0.1.0: 1 tool(s) added, 3 tool(s) removed without a version bump.

**Recommendation:**
The set of tools exposed by this server changed between scans of the same version — a sign the package was silently updated without a version bump. Audit the changelog and all tool definitions before trusting this server. Pin to a specific commit hash rather than a floating version tag.

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
tool declares http permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-client-server.json)*
