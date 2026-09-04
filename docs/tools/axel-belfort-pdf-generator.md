# 🟢 axel-belfort-pdf-generator

> PDF document generation API for AI agents. Generate PDFs from HTML or Markdown: custom page size (A4, Letter), margins, headers, footers. Ideal for reports, invoices, contracts, and documentation.

Tools: document_generate_pdf.

Use this for generating professional documents, reports, or invoices. IMPORTANT: For capturing existing web pages as PDF, use webpage_to_pdf instead.

Returns: base64-encoded PDF document. No API key required — x402 micropayment $0.008/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-pdf-generator](https://smithery.ai/server/axel-belfort/pdf-generator) |
| **Scan Date** | 2026-09-04 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-pdf-generator.json)*
