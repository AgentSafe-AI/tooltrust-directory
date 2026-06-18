# 🟡 deep-research

> Use any LLMs (Large Language Models) for Deep Research. Support SSE API and MCP server.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `0.11.0` |
| **Vendor** | u14app |
| **Stars** | ⭐ 4615 |
| **npm Package** | `deep-research` |
| **npm Downloads (30d)** | 173 |
| **Language** | JavaScript |
| **Source** | [deep-research](https://github.com/u14app/deep-research) |
| **Scan Date** | 2026-06-18 |
| **Scanner** | tooltrust-scanner/v0.3.18 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 2 |

## Detailed Findings

### 🟠 `AS-012` — Rug-Pull (Post-Install Description Change)

**Severity:** High

**Description:**
Tool set changed silently at v0.11.0: 1 tool(s) added, 1 tool(s) removed without a version bump.

**Recommendation:**
The set of tools exposed by this server changed between scans of the same version — a sign the package was silently updated without a version bump. Audit the changelog and all tool definitions before trusting this server. Pin to a specific commit hash rather than a floating version tag.

---

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "max_tokens" accepts a credential (informational; not evidence of insecure handling)

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/deep-research.json)*
