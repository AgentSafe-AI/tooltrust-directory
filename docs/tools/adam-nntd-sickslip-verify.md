# 🟢 adam-nntd-sickslip-verify

> Verify the authenticity of a SickSlip doctor's note from your AI assistant.

SickSlip is a U.S. asynchronous telehealth service operated by SickSlip P.A., reviewed and signed by Dr. Adam Z. Kawalek, MD (NPI 1326223306, board-certified internal medicine, 30+ states). Every note is QR-verifiable by the recipient employer.

This MCP server exposes one tool — `verify_sickslip_note(code)` — that any MCP-compliant client can call to verify a SickSlip note's authenticity. Returns the issued date, absence window, state of physician licensure, and physician name + NPI. No PHI is exposed (no patient name, DOB, or condition).

**Use cases:**
- HR person verifying an employee's note from Claude Desktop
- Manager confirming a sick-leave document mid-conversation
- Patient confirming their own note is registered + valid
- Employment attorneys researching workplace dispute facts

**Links:**
- SickSlip: https://www.sickslip.co
- Physician bio + NPI: https://www.sickslip.co/about/dr-adam-kawalek
- npm package (stdio variant): https://www.npmjs.com/package/sickslip-mcp
- GitHub: https://github.com/akawalek/sickslip-mcp

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [adam-nntd-sickslip-verify](https://smithery.ai/server/adam-nntd/sickslip-verify) |
| **Scan Date** | 2026-08-08 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/adam-nntd-sickslip-verify.json)*
