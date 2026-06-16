# 🟡 korean-law-mcp

> 국가법령정보MCP v4.4 | 법제처 42개 API → 9개 MCP 도구. 법령·판례·조례·조약 + 다단계 리서치(legal_research) + 정밀분석(legal_analysis: 인용검증·판례생사·행위시법·영향그래프) | 42 Korean legal APIs → 9 MCP tools

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `4.4.0` |
| **Vendor** | chrisryugj |
| **Stars** | ⭐ 1962 |
| **npm Package** | `korean-law-mcp` |
| **npm Downloads (30d)** | 9.7k |
| **Language** | TypeScript |
| **Source** | [korean-law-mcp](https://github.com/chrisryugj/korean-law-mcp) |
| **Scan Date** | 2026-06-15 |
| **Scanner** | tooltrust-scanner/v0.3.17 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 4 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
Tool set changed silently at v4.4.0: 4 tool(s) added, 54 tool(s) removed without a version bump.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/korean-law-mcp.json)*
