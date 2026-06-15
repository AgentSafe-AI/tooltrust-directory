# 🟢 qianniuspace-mcp-security-audit

> A powerful MCP (Model Context Protocol) Server that audits npm package dependencies for security vulnerabilities. Built with remote npm registry integration for real-time security checks.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `1.0.4` |
| **Vendor** | qianniuspace |
| **Stars** | ⭐ 52 |
| **npm Package** | `mcp-security-audit` |
| **npm Downloads (30d)** | 244 |
| **Language** | TypeScript |
| **Source** | [qianniuspace-mcp-security-audit](https://github.com/qianniuspace/mcp-security-audit) |
| **Scan Date** | 2026-06-15 |
| **Scanner** | tooltrust-scanner/v0.3.16 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
No metadata.dependencies or repo_url were exposed by this MCP server, and no local project manifest could be inferred from the launch command.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/qianniuspace-mcp-security-audit.json)*
