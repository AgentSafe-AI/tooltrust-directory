# 🟡 alibabacloud-observability-mcp-server

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 23 |
| **Version** | `1.0.8` |
| **Vendor** | aliyun |
| **Stars** | ⭐ 86 |
| **Language** | Go |
| **Source** | [alibabacloud-observability-mcp-server](https://github.com/aliyun/alibabacloud-observability-mcp-server) |
| **Scan Date** | 2026-03-20 |
| **Scanner** | tooltrust-scanner/v0.1.11 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "api_key" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/alibabacloud-observability-mcp-server.json)*
