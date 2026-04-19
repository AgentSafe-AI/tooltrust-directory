# 🟡 muellah24-scam-shield-by-brokerchooser

> BrokerChooser’s Scam Shield MCP server provides a simple way for AI agents and applications to verify whether a financial entity, broker, or investment website is legitimate or potentially fraudulent.

- Agents can check an entity by name or URL.

- Results are powered by BrokerChooser’s aggregated scam database, which consolidates warnings and alerts from major financial regulators and official sources worldwide.

- Developers can integrate this into applications to detect suspicious brokers, flag risks for end-users, and strengthen financial safety.

In short: it’s a plug-and-play financial scam check API that helps prevent fraud.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [muellah24-scam-shield-by-brokerchooser](https://smithery.ai/server/muellah24/scam-shield-by-brokerchooser) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 1 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/muellah24-scam-shield-by-brokerchooser.json)*
