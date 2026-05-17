# 🟡 general-analysis-mcp-guard

> MCP Guard secures your MCP client from prompt injection attacks and more.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `1.0.3` |
| **Vendor** | General-Analysis |
| **Stars** | ⭐ 53 |
| **npm Package** | `@general-analysis/mcp-guard` |
| **npm Downloads (30d)** | 74 |
| **Language** | TypeScript |
| **Source** | [general-analysis-mcp-guard](https://github.com/General-Analysis/mcp-guard) |
| **Scan Date** | 2026-05-17 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 2 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
Tool set changed silently at v1.0.3: 2 tool(s) added, 1 tool(s) removed without a version bump.

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/general-analysis-mcp-guard.json)*
