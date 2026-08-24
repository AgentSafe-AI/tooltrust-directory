# 🟡 mcp-language-server

> mcp-language-server gives MCP enabled clients access semantic tools like get definition, references, rename, and diagnostics.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.1.1` |
| **Vendor** | isaacphi |
| **Stars** | ⭐ 1584 |
| **Language** | Go |
| **Source** | [mcp-language-server](https://github.com/isaacphi/mcp-language-server) |
| **Scan Date** | 2026-08-24 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
Tool set changed silently at v0.1.1: 1 tool(s) added, 1 tool(s) removed without a version bump.

**Recommendation:**
The set of tools exposed by this server changed between scans of the same version — a sign the package was silently updated without a version bump. Audit the changelog and all tool definitions before trusting this server. Pin to a specific commit hash rather than a floating version tag.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-language-server.json)*
