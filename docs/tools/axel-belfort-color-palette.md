# 🟡 axel-belfort-color-palette

> Color palette generation API for AI agents. Generate harmonious palettes from any hex color: complementary, analogous, triadic, split-complementary, and tetradic schemes. Returns hex, RGB, HSL, and CSS custom properties.

Tools: design_generate_color_palette.

Use this for UI design, brand color exploration, or generating themed color systems. Returns multiple format options ready for code.

Returns: {palette[], scheme, hex, rgb, hsl, css}. No API key required — x402 micropayment $0.001/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-color-palette](https://smithery.ai/server/axel-belfort/color-palette) |
| **Scan Date** | 2026-08-25 |
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
Tool set changed silently at vsmithery: 1 tool(s) added, 5 tool(s) removed without a version bump.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-color-palette.json)*
