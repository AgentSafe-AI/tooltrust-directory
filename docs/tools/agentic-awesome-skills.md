# 🟢 agentic-awesome-skills

> AAS Core is the local, agent-first control plane for complete catalog discovery, agent-owned selection, stack validation, and planning, backed by 2,600+ agentic skills. Includes CLI, local MCP, catalog, plugins, and Workbench.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `19.10.1` |
| **Vendor** | sickn33 |
| **Stars** | ⭐ 47893 |
| **npm Package** | `agentic-awesome-skills` |
| **npm Downloads (30d)** | 25.4k |
| **Language** | Python |
| **Source** | [agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) |
| **Scan Date** | 2026-10-19 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/agentic-awesome-skills.json)*
