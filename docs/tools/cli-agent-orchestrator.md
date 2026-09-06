# 🟢 cli-agent-orchestrator

> Multi-agent orchestration for AI coding CLIs — Claude Code, Kiro, Codex, and more, coordinated in isolated tmux sessions

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `2.5.0` |
| **Vendor** | awslabs |
| **Stars** | ⭐ 1212 |
| **Language** | Python |
| **Source** | [cli-agent-orchestrator](https://github.com/awslabs/cli-agent-orchestrator) |
| **Scan Date** | 2026-09-06 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 2 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: HTTP requests

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/cli-agent-orchestrator.json)*
