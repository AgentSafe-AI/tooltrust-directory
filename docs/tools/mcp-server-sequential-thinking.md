# 🟡 mcp-server-sequential-thinking

> Model Context Protocol Servers

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `typescript-servers-0.6.2` |
| **Vendor** | modelcontextprotocol |
| **Stars** | ⭐ 90080 |
| **npm Package** | `@modelcontextprotocol/server-sequential-thinking` |
| **npm Downloads (30d)** | 484.4k |
| **Language** | TypeScript |
| **Source** | [mcp-server-sequential-thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) |
| **Scan Date** | 2026-09-05 |
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
Tool set changed silently at vtypescript-servers-0.6.2: 1 tool(s) added, 1 tool(s) removed without a version bump.

**Recommendation:**
The set of tools exposed by this server changed between scans of the same version — a sign the package was silently updated without a version bump. Audit the changelog and all tool definitions before trusting this server. Pin to a specific commit hash rather than a floating version tag.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-sequential-thinking.json)*
