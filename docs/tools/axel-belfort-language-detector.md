# 🟢 axel-belfort-language-detector

> Language detection API for AI agents. Identify the language of any text using trigram analysis: 30+ languages supported, script detection (Latin, Cyrillic, CJK), and confidence scoring.

Tools: text_detect_language.

Use this for routing multilingual content, pre-processing before translation, or filtering by language. IMPORTANT: For translation, use text_translate which includes auto-detection.

Returns: {language, script, confidence, alternatives[]}. No API key required — x402 micropayment $0.002/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-language-detector](https://smithery.ai/server/axel-belfort/language-detector) |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-language-detector.json)*
