# 🟢 kubefwd

> Bulk port forwarding Kubernetes services for local development.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `1.25.12` |
| **Vendor** | txn2 |
| **Stars** | ⭐ 4053 |
| **Language** | Go |
| **Source** | [kubefwd](https://github.com/txn2/kubefwd) |
| **Scan Date** | 2026-03-02 |
| **Scanner** | AgentSentry/0.1.2 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟡 `AS-004` — Supply Chain CVE: GHSA-wvj2-96wp-fq3f in github.com/modelcontextprotocol/go-sdk@1.2.0

**Severity:** Medium

**Description:**
GHSA-wvj2-96wp-fq3f in github.com/modelcontextprotocol/go-sdk@1.2.0 (Go ecosystem).

**Recommendation:**
Upgrade github.com/modelcontextprotocol/go-sdk to a version that resolves GHSA-wvj2-96wp-fq3f. Check https://osv.dev/vulnerability/GHSA-wvj2-96wp-fq3f for patched versions. Enable Dependabot or OSV-Scanner in CI to catch future CVEs automatically.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/kubefwd.json)*
