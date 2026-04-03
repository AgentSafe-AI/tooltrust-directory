# 🟡 quanttogo-quanttogo-mcp

> Macro-factor quantitative signal source for AI agents via MCP. 宏观因子量化信号源。

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.2.0` |
| **Vendor** | quanttogo |
| **Stars** | ⭐ 5 |
| **npm Package** | `quanttogo-mcp` |
| **npm Downloads (30d)** | 1.4k |
| **Language** | Python |
| **Source** | [quanttogo-quanttogo-mcp](https://github.com/QuantToGo/quanttogo-mcp) |
| **Scan Date** | 2026-04-03 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 4 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "apiKey" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "apiKey" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "apiKey" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "apiKey" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/quanttogo-quanttogo-mcp.json)*
