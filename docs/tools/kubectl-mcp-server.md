# 🟢 kubectl-mcp-server

> Published in CNCF Landscape: A MCP server for Kubernetes.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.24.0` |
| **Vendor** | rohitg00 |
| **Stars** | ⭐ 888 |
| **npm Package** | `kubectl-mcp-server` |
| **npm Downloads (30d)** | 462 |
| **Language** | Python |
| **Source** | [kubectl-mcp-server](https://github.com/rohitg00/kubectl-mcp-server) |
| **Scan Date** | 2026-05-18 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

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

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/kubectl-mcp-server.json)*
