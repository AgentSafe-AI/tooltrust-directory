# 🟡 synapselayer-synapse-protocol

> ### Synapse Layer — The Memory Standard for AI Agents

Synapse Layer is a secure, autonomous memory infrastructure designed for high-performance AI agents. It goes beyond simple data storage, providing a semantic intelligence layer that understands the lifecycle of complex projects.

**Key Capabilities:**
- **Autonomous Detection**: Automatically captures strategic decisions, project milestones, architecture pivots, and critical risks.
- **Privacy-First (Zero-Leak)**: Built-in Redactor and Policy Engine with 15+ patterns to block PII, secrets, and API keys before they reach the database.
- **Trusted Quality (TQ) Lite**: Intelligent scoring that prioritizes high-impact context over noise.
- **Scalable Architecture**: High-speed async embeddings and secure RLS (Row Level Security).

**Official Tools:**
- `process_text`: The entry point for autonomous context capture.
- `save_to_synapse`: Manual persistence for controlled memory.
- `backfill_embeddings`: Ensures the semantic search is always up-to-date.
- `health_check`: Real-time system integrity and queue monitoring.

*Give your AI a real brain. Stop rebuilding memory from scratch.*

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [synapselayer-synapse-protocol](https://smithery.ai/server/synapselayer/synapse-protocol) |
| **Scan Date** | 2026-04-16 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 4 |

## Detailed Findings

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/synapselayer-synapse-protocol.json)*
