# 🟡 gram

> Securely scale AI usage across your organization. A single stack to Connect, Secure, Observe and Distribute agents, MCPs, and Skills within your company.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `tunnel@0.1.0` |
| **Vendor** | speakeasy-api |
| **Stars** | ⭐ 263 |
| **npm Package** | `@gram/workspace` |
| **Language** | Go |
| **Source** | [gram](https://github.com/speakeasy-api/gram) |
| **Scan Date** | 2026-08-16 |
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
Tool set changed silently at vtunnel@0.1.0: 1 tool(s) added, 9 tool(s) removed without a version bump.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/gram.json)*
