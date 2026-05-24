# 🟡 mcp-server-sequential-thinking

> Model Context Protocol Servers

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `typescript-servers-0.6.2` |
| **Vendor** | modelcontextprotocol |
| **Stars** | ⭐ 86143 |
| **npm Package** | `@modelcontextprotocol/server-sequential-thinking` |
| **npm Downloads (30d)** | 434.8k |
| **Language** | TypeScript |
| **Source** | [mcp-server-sequential-thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) |
| **Scan Date** | 2026-05-24 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-sequential-thinking.json)*
