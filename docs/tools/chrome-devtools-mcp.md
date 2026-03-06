# 🟠 chrome-devtools-mcp

> Chrome DevTools for coding agents

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `chrome-devtools-mcp-v0.19.0` |
| **Vendor** | ChromeDevTools |
| **Stars** | ⭐ 27754 |
| **Language** | TypeScript |
| **Source** | [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) |
| **Scan Date** | 2026-03-06 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🔴 `AS-006` — Arbitrary Code Execution: exposes evaluate_script tool (Runtime.evaluate via CDP)

**Severity:** Critical

**Description:**
chrome-devtools-mcp exposes an evaluate_script tool that executes arbitrary JavaScript in the browser page context via Chrome DevTools Protocol Runtime.evaluate. This is equivalent in risk to exec permission — any agent with access can run arbitrary code in the browser.

**Recommendation:**
Gate this server behind REQUIRE_APPROVAL in your gateway policy. Restrict which agents can invoke evaluate_script. Consider sandboxing the browser process and logging all Runtime.evaluate calls.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/chrome-devtools-mcp.json)*
