# 🟡 aryankeluskar-polymarket-mcp

> MCP Server for Polymarket API. Crossed 2900 downloads in its first weekend ‼️

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `1.0.0` |
| **Vendor** | aryankeluskar |
| **Stars** | ⭐ 6 |
| **npm Package** | `polymarket-mcp` |
| **npm Downloads (30d)** | 136 |
| **Language** | TypeScript |
| **Source** | [aryankeluskar-polymarket-mcp](https://github.com/aryankeluskar/polymarket-mcp) |
| **Scan Date** | 2026-04-03 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

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

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "tokenID" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "tokenID" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/aryankeluskar-polymarket-mcp.json)*
