# 🟡 agent-device

> Mobile app automation and verification for AI coding agents. CLI, MCP server, and typed Node.js API for iOS, Android, HarmonyOS, TV, web, macOS, and Linux.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.20.10` |
| **Vendor** | callstack |
| **Stars** | ⭐ 4237 |
| **npm Package** | `agent-device` |
| **npm Downloads (30d)** | 567.2k |
| **Language** | TypeScript |
| **Source** | [agent-device](https://github.com/callstack/agent-device) |
| **Scan Date** | 2026-08-27 |
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
Tool set changed silently at v0.20.10: 1 tool(s) added, 11 tool(s) removed without a version bump.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/agent-device.json)*
