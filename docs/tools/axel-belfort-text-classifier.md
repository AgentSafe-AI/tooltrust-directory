# 🟢 axel-belfort-text-classifier

> Text classification API for AI agents. Classify text into topic categories with confidence scores, readability metrics (Flesch-Kincaid), and content type detection (article, review, email, code, etc.).

Tools: text_classify_content.

Use this for content routing, auto-tagging, spam detection, or organizing unstructured text. IMPORTANT: For sentiment analysis, use text_analyze_sentiment instead.

Returns: {categories[], readability, contentType, confidence}. No API key required — x402 micropayment $0.005/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-text-classifier](https://smithery.ai/server/axel-belfort/text-classifier) |
| **Scan Date** | 2026-08-04 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-text-classifier.json)*
