# 🟢 mcp-context-forge

> An AI Gateway, registry, and proxy that sits in front of any MCP, A2A, or REST/gRPC APIs, exposing a unified endpoint with centralized discovery, guardrails and management. Optimizes Agent & Tool calling, and supports plugins.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `1.0.4` |
| **Vendor** | IBM |
| **Stars** | ⭐ 4043 |
| **Language** | Python |
| **Source** | [mcp-context-forge](https://github.com/IBM/mcp-context-forge) |
| **Scan Date** | 2026-07-07 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 2 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/mcp-context-forge.json)*
