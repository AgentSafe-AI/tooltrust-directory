# 🟢 axel-belfort-jwt-decoder

> JWT token decoder API for AI agents. Decode and inspect JSON Web Tokens without verification: extract header (algorithm, type), payload (claims, issuer, audience), expiry timestamp, and signature info.

Tools: security_decode_jwt.

Use this for debugging authentication flows, inspecting token claims, or verifying token structure. IMPORTANT: This decodes without verifying — for security validation, verify signatures server-side.

Returns: {header, payload, claims, expiresAt, algorithm}. No API key required — x402 micropayment $0.001/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-jwt-decoder](https://smithery.ai/server/axel-belfort/jwt-decoder) |
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
| Info     | 2 |

## Detailed Findings

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "token" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-jwt-decoder.json)*
