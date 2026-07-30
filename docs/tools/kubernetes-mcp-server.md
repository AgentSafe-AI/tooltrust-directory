# 🟢 kubernetes-mcp-server

> Model Context Protocol (MCP) server for Kubernetes and OpenShift

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.0.65` |
| **Vendor** | containers |
| **Stars** | ⭐ 1862 |
| **Language** | Go |
| **Source** | [kubernetes-mcp-server](https://github.com/containers/kubernetes-mcp-server) |
| **Scan Date** | 2026-07-30 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

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
Embedded MCP server detected in go source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/kubernetes-mcp-server.json)*
