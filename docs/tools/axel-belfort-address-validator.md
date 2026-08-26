# 🟢 axel-belfort-address-validator

> Postal address validation API for AI agents. Parse and validate addresses worldwide: country detection, component extraction (street, city, state, postal code), postal code format verification. Supports US, UK, FR, DE, and 50+ countries.

Tools: address_validate.

Use this for KYC compliance, shipping address verification, CRM data cleaning, or form validation. Returns structured components for standardized storage.

Returns: {valid, components, country, formatted}. No API key required — x402 micropayment $0.003/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-address-validator](https://smithery.ai/server/axel-belfort/address-validator) |
| **Scan Date** | 2026-08-26 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-address-validator.json)*
