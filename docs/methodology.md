# ToolTrust Scoring Methodology

> **Version:** 1.0  |  **Effective Date:** 2026-03-01  |  **Scanner:** [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner)

---

## Overview

ToolTrust grades every MCP server and AI Skill on a scale of **A → F** using a deterministic risk score produced by [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner). This document defines the scoring formula, severity weights, grade boundaries, and the categories of checks performed.

---

## 1. Risk Score Formula

The composite risk score for a tool is defined as:

$$
\text{RiskScore} = \sum_{i=1}^{n} \left( \text{SeverityWeight}_{i} \times \text{FindingCount}_{i} \right)
$$

where:

- $n$ is the total number of distinct finding categories detected.
- $\text{SeverityWeight}_{i}$ is the weight assigned to severity level $i$ (see §2).
- $\text{FindingCount}_{i}$ is the number of individual findings at severity level $i$.

### 1.1 Severity Weights

Weights are defined by [ToolTrust Scanner v0.1.2](https://github.com/AgentSafe-AI/tooltrust-scanner#risk-grades).

| Severity | Weight ($w$) | Example trigger |
|----------|:-----------:|-----------------|
| Critical | 25 | Prompt injection (AS-001) |
| High     | 15 | exec/network permission (AS-002), scope mismatch (AS-003), broad OAuth scope (AS-005) |
| Medium   | 8  | Insecure secret handling (AS-010) |
| Low      | 2  | Over-broad schema (AS-002), missing rate-limit (AS-011) |
| Info     | 0  | Informational only; no exploitability |

### 1.2 Worked Example

A tool with 1 High finding and 1 Medium finding:

$$
\text{RiskScore} = (15 \times 1) + (8 \times 1) = 23
$$

---

## 2. Grade Boundaries

Grades and gateway actions are defined by [ToolTrust Scanner v0.1.2](https://github.com/AgentSafe-AI/tooltrust-scanner#risk-grades).

| Grade | RiskScore Range | Gateway Action | Meaning |
|-------|:---------------:|:--------------:|---------|
| **S** | 0 (no findings) | ALLOW | Zero risk. Perfect score. |
| **A** | 1 – 9           | ALLOW | Minimal risk. Safe for production agents. |
| **B** | 10 – 24         | ALLOW + rate limit | Low risk. Minor issues; review findings. |
| **C** | 25 – 49         | REQUIRE_APPROVAL | Moderate risk. Remediation recommended before production use. |
| **D** | 50 – 74         | REQUIRE_APPROVAL | High risk. Use only in isolated/sandboxed environments. |
| **F** | 75+             | BLOCK | Critical risk. Do not use in agentic pipelines. |

---

## 3. Check Catalog

All active rules as of [ToolTrust Scanner v0.1.2](https://github.com/AgentSafe-AI/tooltrust-scanner#scan-catalog):

| ID | Category | Severity | What it detects |
|----|----------|:--------:|-----------------|
| AS-001 | Tool Poisoning | **Critical** | Hidden adversarial prompts in tool descriptions (`ignore previous instructions`, `system:`, `<INST>`) |
| AS-002 | Permission Surface | High / Low | Tools declaring `exec`, `network`, `db`, or `fs` beyond their stated purpose; unnecessarily broad input schema |
| AS-003 | Scope Mismatch | **High** | Tool names that contradict their permissions (e.g. `read_config` secretly holding `exec`) |
| AS-004 | Supply Chain (CVE) | High / Critical | Third-party dependencies with known CVEs — queried live from [OSV database](https://osv.dev) |
| AS-005 | Privilege Escalation | **High** | OAuth/token scopes broader than stated purpose (`admin`, `:write` wildcards); description-level escalation signals (`sudo`, `impersonate`) |
| AS-010 | Secret Handling | **Medium** | Input parameters accepting API keys/passwords/tokens; credentials logged or stored insecurely |
| AS-011 | DoS Resilience | **Low** | Network/execution tools with no rate-limit, timeout, or retry configuration |

---

## 4. Scan Scope & Limitations

- **Static analysis only** (v1.0). Dynamic/runtime analysis is planned for v2.0.
- Scores reflect the tool version at `scan_date`. Scores are **not** retroactively updated.
- A clean scan result does not constitute an endorsement of overall software quality.

---

## 5. Versioning

This methodology follows [Semantic Versioning](https://semver.org). Breaking changes to the formula or grade boundaries will increment the major version and require re-scanning all affected tools.

---

## 6. Contributing

To challenge a finding or request a rescan, open a [Scan Request issue](https://github.com/AgentSafe-AI/tooltrust-directory/issues/new?template=SCAN_REQUEST.md).
