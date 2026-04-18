# 🟡 fortytwo-fortytwo-mcp

> Ask Fortytwo high-complexity questions where the best answer is required — coding, architecture, hard reasoning, and more. Request Fortytwo MCP `tools/call` for `ask_fortytwo_prime` through the payment-gated gateway, which uses the extended x402 payment protocol with on-chain escrow to enable usage-based, pay-per-token billing for AI services. This requires access to a web3 wallet with USDC on Base or Monad. The first call triggers a payment challenge; subsequent calls within the same session are free.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 15 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [fortytwo-fortytwo-mcp](https://smithery.ai/server/fortytwo/fortytwo-mcp) |
| **Scan Date** | 2026-04-18 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

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

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "max_tokens" appears to accept a secret or credential

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/fortytwo-fortytwo-mcp.json)*
