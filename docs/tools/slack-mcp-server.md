# 🟢 slack-mcp-server

> The most powerful MCP Slack Server with no permission requirements, Apps support, GovSlack, DMs, Group DMs and smart history fetch logic.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `1.2.3` |
| **Vendor** | korotovsky |
| **Stars** | ⭐ 1414 |
| **Language** | Go |
| **Source** | [slack-mcp-server](https://github.com/korotovsky/slack-mcp-server) |
| **Scan Date** | 2026-03-04 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/slack-mcp-server.json)*
