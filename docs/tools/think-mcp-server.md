# 🟡 think-mcp-server

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `1.0.0` |
| **Vendor** | PhillipRt |
| **Stars** | ⭐ 127 |
| **npm Package** | `think-mcp-server` |
| **npm Downloads (30d)** | 1.0k |
| **Language** | TypeScript |
| **Source** | [think-mcp-server](https://github.com/PhillipRt/think-mcp-server) |
| **Scan Date** | 2026-04-05 |
| **Scanner** | tooltrust-scanner/v0.3.6 |

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
Tool set changed silently at v1.0.0: 1 tool(s) added, 4 tool(s) removed without a version bump.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/think-mcp-server.json)*
