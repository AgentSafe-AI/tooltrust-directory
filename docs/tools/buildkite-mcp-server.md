# 🟢 buildkite-mcp-server

> Official MCP Server for Buildkite.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `0.10.0` |
| **Vendor** | buildkite |
| **Stars** | ⭐ 48 |
| **Language** | Go |
| **Source** | [buildkite-mcp-server](https://github.com/buildkite/buildkite-mcp-server) |
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

### 🟡 📦 `AS-004` — Supply Chain CVE: GO-2026-4559 in golang.org/x/net@0.50.0

**Severity:** Medium

**Description:**
GO-2026-4559 in golang.org/x/net@0.50.0 (Go ecosystem).

**Recommendation:**
Upgrade golang.org/x/net to a version that resolves GO-2026-4559. Check https://osv.dev/vulnerability/GO-2026-4559 for patched versions. Enable Dependabot or OSV-Scanner in CI to catch future CVEs automatically.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/buildkite-mcp-server.json)*
