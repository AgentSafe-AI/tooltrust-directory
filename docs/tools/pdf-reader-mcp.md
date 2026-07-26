# 🟢 pdf-reader-mcp

> Give your AI agent eyes for PDFs — structured text, tables, OCR, visual evidence, and page-level citations via MCP. Native Rust, local-first.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `4.1.1` |
| **Vendor** | SylphxAI |
| **Stars** | ⭐ 837 |
| **npm Package** | `@sylphx/pdf-reader-mcp` |
| **npm Downloads (30d)** | 32.0k |
| **Language** | TypeScript |
| **Source** | [pdf-reader-mcp](https://github.com/SylphxAI/pdf-reader-mcp) |
| **Scan Date** | 2026-07-26 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/pdf-reader-mcp.json)*
