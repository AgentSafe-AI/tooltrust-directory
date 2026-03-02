# 🟡 mcp-server-filesystem

> Reference MCP server providing safe, configurable access to the local filesystem.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 18 |
| **Version** | `1.2.0` |
| **Vendor** | modelcontextprotocol |
| **Stars** | ⭐ 12400 |
| **Language** | TypeScript |
| **Source** | [mcp-server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) |
| **Scan Date** | 2026-03-01 |
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

### 🟡 `AS-002` — Unrestricted Path Access

**Severity:** Medium

**Description:**
Tool can access files outside the designated workspace directory when given relative path traversal sequences (e.g., ../../etc/passwd). No allowlist enforcement detected.

**Recommendation:**
Enforce a strict allowlist of permitted root directories and resolve all paths before comparison.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-filesystem.json)*
