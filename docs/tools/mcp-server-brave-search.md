# 🟢 mcp-server-brave-search

> MCP server integrating Brave Search API for web and local search capabilities.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 4 |
| **Version** | `0.6.2` |
| **Vendor** | modelcontextprotocol |
| **Stars** | ⭐ 12400 |
| **Language** | TypeScript |
| **Source** | [mcp-server-brave-search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) |
| **Scan Date** | 2026-03-01 |
| **Scanner** | ToolTrust Scanner/0.1.2 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 0 |

## Detailed Findings

### 🔵 🗝️ `AS-010` — API Key in Environment Variable

**Severity:** Low

**Description:**
The Brave Search API key is read from a plain environment variable. While this is standard practice, leakage risk exists if environment is logged or exposed.

**Recommendation:**
Document the secret handling expectations clearly and advise users to use secret managers (e.g., AWS Secrets Manager, 1Password CLI) rather than raw .env files.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-brave-search.json)*
