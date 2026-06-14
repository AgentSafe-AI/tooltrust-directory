# 🟠 mcp-server-commands

> Model Context Protocol server to run commands (tool: `runProcess`)

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 30 |
| **Version** | `0.8.2` |
| **Vendor** | g0t4 |
| **Stars** | ⭐ 227 |
| **npm Package** | `mcp-server-commands` |
| **npm Downloads (30d)** | 1.5k |
| **Language** | TypeScript |
| **Source** | [mcp-server-commands](https://github.com/g0t4/mcp-server-commands) |
| **Scan Date** | 2026-06-14 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-server-commands.json)*
