# 🟡 qianniuspace-mcp-security-audit

> A powerful MCP (Model Context Protocol) Server that audits npm package dependencies for security vulnerabilities. Built with remote npm registry integration for real-time security checks.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `1.0.4` |
| **Vendor** | qianniuspace |
| **Stars** | ⭐ 52 |
| **npm Package** | `mcp-security-audit` |
| **npm Downloads (30d)** | 244 |
| **Language** | TypeScript |
| **Source** | [qianniuspace-mcp-security-audit](https://github.com/qianniuspace/mcp-security-audit) |
| **Scan Date** | 2026-06-15 |
| **Scanner** | tooltrust-scanner/v0.3.15 |

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

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/qianniuspace-mcp-security-audit.json)*
