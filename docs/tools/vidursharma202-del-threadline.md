# 🟡 vidursharma202-del-threadline

> Persistent memory and context layer for AI agents. inject() before your LLM call, update() after. Relevance-scored injection, grant-based access control, user-owned context. Works with OpenAI, Anthropic, Vercel AI SDK, and LangChain. < 50ms retrieval. GDPR-ready. Free tier: 2,500 calls/month.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 23 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [vidursharma202-del-threadline](https://smithery.ai/server/vidursharma202-del/threadline) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 2 |

## Detailed Findings

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "apiKey" appears to accept a secret or credential

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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "apiKey" appears to accept a secret or credential

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/vidursharma202-del-threadline.json)*
