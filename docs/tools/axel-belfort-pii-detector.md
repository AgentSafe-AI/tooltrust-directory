# 🟢 axel-belfort-pii-detector

> PII (Personally Identifiable Information) detection API for AI agents. Scan any text for sensitive data: email addresses, phone numbers, SSNs, credit card numbers, IP addresses, physical addresses, and names. Risk scoring and redaction-ready output.

Tools: compliance_detect_pii.

Use this BEFORE logging, storing, or transmitting text that might contain personal data. Essential for GDPR/CCPA compliance, data sanitization, and privacy-by-design. IMPORTANT: For website GDPR compliance, use compliance_scan_gdpr.

Returns: {piiFound[], riskLevel, redacted}. No API key required — x402 micropayment $0.005/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-pii-detector](https://smithery.ai/server/axel-belfort/pii-detector) |
| **Scan Date** | 2026-08-12 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-pii-detector.json)*
