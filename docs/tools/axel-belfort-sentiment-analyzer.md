# 🟢 axel-belfort-sentiment-analyzer

> Text sentiment analysis API for AI agents. Analyze sentiment (positive/negative/neutral) with confidence score, emotion detection (joy, anger, fear, surprise, sadness), and key phrase extraction. Single and batch modes.

Tools: text_analyze_sentiment (single), text_analyze_sentiment_batch (multiple texts).

Use this for social media monitoring, review analysis, brand sentiment tracking, or content moderation. IMPORTANT: For content topic classification, use text_classify_content instead.

Returns: {sentiment, confidence, emotions[], keyPhrases[]}. No API key required — x402 micropayment $0.005/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-sentiment-analyzer](https://smithery.ai/server/axel-belfort/sentiment-analyzer) |
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
| Info     | 2 |

## Detailed Findings

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-sentiment-analyzer.json)*
