# 🟢 ui-tars-desktop

> The Open-Source Multimodal AI Agent Stack: Connecting Cutting-Edge AI Models and Agent Infra

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `0.3.0` |
| **Vendor** | bytedance |
| **Stars** | ⭐ 38697 |
| **npm Package** | `monorepo` |
| **npm Downloads (30d)** | 1.2k |
| **Language** | TypeScript |
| **Source** | [ui-tars-desktop](https://github.com/bytedance/UI-TARS-desktop) |
| **Scan Date** | 2026-08-24 |
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

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/ui-tars-desktop.json)*
