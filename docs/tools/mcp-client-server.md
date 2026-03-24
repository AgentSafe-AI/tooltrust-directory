# 🟡 mcp-client-server

> An MCP Server that's also an MCP Client. Useful for letting Claude develop and test MCPs without needing to reset the application.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.1.0` |
| **Vendor** | willccbb |
| **Stars** | ⭐ 124 |
| **Language** | TypeScript |
| **Source** | [mcp-client-server](https://github.com/willccbb/mcp-client-server) |
| **Scan Date** | 2026-03-24 |
| **Scanner** | tooltrust-scanner/v0.2.1 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
Tool set changed silently at v0.1.0: 2 tool(s) added, 1 tool(s) removed without a version bump.

**Recommendation:**
The set of tools exposed by this server changed between scans of the same version — a sign the package was silently updated without a version bump. Audit the changelog and all tool definitions before trusting this server. Pin to a specific commit hash rather than a floating version tag.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-client-server.json)*
