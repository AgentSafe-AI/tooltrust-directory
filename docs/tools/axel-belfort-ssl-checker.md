# 🟡 axel-belfort-ssl-checker

> SSL/TLS certificate checker API for AI agents. Verify certificate validity, expiry date, issuer chain, protocol version, cipher strength, and security grade for any domain.

Tools: security_check_ssl.

Use this for security monitoring, expiry alerting, or SSL audit automation. IMPORTANT: For comprehensive trust assessment (SSL + DNS + WHOIS + headers), use trust_score_evaluate instead.

Returns: {valid, expiresIn, issuer, grade, protocol}. No API key required — x402 micropayment $0.002/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-ssl-checker](https://smithery.ai/server/axel-belfort/ssl-checker) |
| **Scan Date** | 2026-07-24 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
Tool set changed silently at vsmithery: 1 tool(s) added, 2 tool(s) removed without a version bump.

**Recommendation:**
The set of tools exposed by this server changed between scans of the same version — a sign the package was silently updated without a version bump. Audit the changelog and all tool definitions before trusting this server. Pin to a specific commit hash rather than a floating version tag.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-ssl-checker.json)*
