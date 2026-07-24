# 🟢 bernstein

> Deterministic, verifiable orchestration for CLI coding agents (Claude Code, Codex, Gemini CLI, +40 more). Reproducible parallel runs in git worktrees, signed lineage, byte-identical replay, opt-in HMAC audit chain, air-gap deploy. https://bernstein.run

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `3.8.3` |
| **Vendor** | sipyourdrink-ltd |
| **Stars** | ⭐ 726 |
| **Language** | Python |
| **Source** | [bernstein](https://github.com/sipyourdrink-ltd/bernstein) |
| **Scan Date** | 2026-07-24 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/bernstein.json)*
