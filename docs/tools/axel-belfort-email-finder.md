# 🟢 axel-belfort-email-finder

> Email finder API for AI agents. Find professional email addresses from a person's name and company domain. Tests 15+ email patterns (first.last@, f.last@, first@, etc.) against live MX records with confidence scoring.

Tools: email_find_by_name.

Use this when you have a prospect's name and company but need their email. Essential for outbound sales, recruiting outreach, and partnership emails. IMPORTANT: Always verify found emails with email_verify_address before sending.

Returns: {email, confidence, pattern, mx_valid}. No API key required — x402 micropayment $0.005/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-email-finder](https://smithery.ai/server/axel-belfort/email-finder) |
| **Scan Date** | 2026-08-25 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-email-finder.json)*
