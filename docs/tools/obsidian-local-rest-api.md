# 🟡 obsidian-local-rest-api

> A secure REST API and Model Context Protocol (MCP) server for your vault.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `show` |
| **Vendor** | coddingtonbear |
| **Stars** | ⭐ 2492 |
| **npm Package** | `obsidian-local-rest-api` |
| **npm Downloads (30d)** | 291 |
| **Language** | TypeScript |
| **Source** | [obsidian-local-rest-api](https://github.com/coddingtonbear/obsidian-local-rest-api) |
| **Scan Date** | 2026-06-21 |
| **Scanner** | tooltrust-scanner/v0.3.18 |

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
Tool set changed silently at vshow: 1 tool(s) added, 4 tool(s) removed without a version bump.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/obsidian-local-rest-api.json)*
