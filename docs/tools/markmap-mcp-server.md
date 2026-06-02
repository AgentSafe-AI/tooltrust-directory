# 🟡 markmap-mcp-server

> An MCP server for converting Markdown to interactive mind maps with export support (PNG/JPG/SVG).

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.1.1` |
| **Vendor** | jinzcdev |
| **Stars** | ⭐ 205 |
| **npm Package** | `@jinzcdev/markmap-mcp-server` |
| **npm Downloads (30d)** | 5.3k |
| **Language** | TypeScript |
| **Source** | [markmap-mcp-server](https://github.com/jinzcdev/markmap-mcp-server) |
| **Scan Date** | 2026-06-02 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/markmap-mcp-server.json)*
