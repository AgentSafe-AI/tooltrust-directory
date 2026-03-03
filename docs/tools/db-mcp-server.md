# 🟡 db-mcp-server

> A powerful multi-database server implementing the Model Context Protocol (MCP) to provide AI assistants with structured access to databases.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 16 |
| **Version** | `1.8.0` |
| **Vendor** | FreePeak |
| **Stars** | ⭐ 348 |
| **Language** | Go |
| **Source** | [db-mcp-server](https://github.com/FreePeak/db-mcp-server) |
| **Scan Date** | 2026-03-02 |
| **Scanner** | AgentSentry/0.1.2 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 2 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟡 `AS-004` — Supply Chain CVE: GHSA-fw7p-63qq-7hpr in filippo.io/edwards25519@1.1.0

**Severity:** Medium

**Description:**
GHSA-fw7p-63qq-7hpr in filippo.io/edwards25519@1.1.0 (Go ecosystem).

**Recommendation:**
Upgrade filippo.io/edwards25519 to a version that resolves GHSA-fw7p-63qq-7hpr. Check https://osv.dev/vulnerability/GHSA-fw7p-63qq-7hpr for patched versions. Enable Dependabot or OSV-Scanner in CI to catch future CVEs automatically.

---

### 🟡 `AS-004` — Supply Chain CVE: GO-2026-4503 in filippo.io/edwards25519@1.1.0

**Severity:** Medium

**Description:**
GO-2026-4503 in filippo.io/edwards25519@1.1.0 (Go ecosystem).

**Recommendation:**
Upgrade filippo.io/edwards25519 to a version that resolves GO-2026-4503. Check https://osv.dev/vulnerability/GO-2026-4503 for patched versions. Enable Dependabot or OSV-Scanner in CI to catch future CVEs automatically.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/db-mcp-server.json)*
