# 🟢 axel-belfort-barcode-generator

> Barcode generation API for AI agents. Generate EAN-13, UPC-A, Code128, and Code39 barcodes as base64 SVG with custom width and height. Ready for print or display.

Tools: utility_generate_barcode.

Use this for product labeling, inventory management, or retail applications. IMPORTANT: For QR codes, use utility_generate_qr_code instead.

Returns: {barcode (base64 SVG), format, dimensions}. No API key required — x402 micropayment $0.001/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-barcode-generator](https://smithery.ai/server/axel-belfort/barcode-generator) |
| **Scan Date** | 2026-07-24 |
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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-barcode-generator.json)*
