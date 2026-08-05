# 🟢 bernstein

> Deterministic orchestrator for CLI coding agents (Claude Code, Codex, Gemini CLI, +40 more). No model in the coordination loop, so parallel runs in per-task git worktrees replay byte-identically. Signed lineage plus an opt-in HMAC audit chain a reviewer checks offline, without rerunning it. Cluster mode, air-gap deploy. https://bernstein.run

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `3.13.0` |
| **Vendor** | sipyourdrink-ltd |
| **Stars** | ⭐ 788 |
| **Language** | Python |
| **Source** | [bernstein](https://github.com/sipyourdrink-ltd/bernstein) |
| **Scan Date** | 2026-08-05 |
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
