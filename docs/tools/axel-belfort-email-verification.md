# 🟢 axel-belfort-email-verification

> Email verification API for AI agents. Validate any email address in real-time with syntax check, MX record validation, disposable provider detection (Mailinator, Guerrilla Mail, 100+ providers), role-based flags (admin@, info@), and composite quality score 0-100.

Tools: email_verify_address (single), email_verify_batch (up to 100 emails).

Use this BEFORE sending outreach emails, adding contacts to CRM, or processing signups. Essential for cleaning email lists, detecting fake registrations, and qualifying leads. Drop-in replacement for Hunter.io email verification at 15x lower cost.

Returns: {valid, syntax, mx, disposable, role, free, score, email}. No API key required — x402 micropayment $0.002/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-email-verification](https://smithery.ai/server/axel-belfort/email-verification) |
| **Scan Date** | 2026-08-03 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-email-verification.json)*
