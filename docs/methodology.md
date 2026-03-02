# ToolTrust Scoring Methodology

> **Version:** 1.0  |  **Effective Date:** 2026-03-01  |  **Scanner:** AgentSentry

---

## Overview

ToolTrust grades every MCP server and AI Skill on a scale of **A → F** using a deterministic risk score produced by [AgentSentry](https://github.com/AgentSafe-AI/agentsentry). This document defines the scoring formula, severity weights, grade boundaries, and the categories of checks performed.

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

| Severity | Weight ($w$) | Rationale |
|----------|-------------|-----------|
| Critical | 25 | Can lead to full system compromise or data exfiltration |
| High     | 15 | Significant privilege escalation or data exposure |
| Medium   | 8  | Exploitable under certain conditions |
| Low      | 2  | Defense-in-depth; minimal direct risk |
| Info     | 0  | Informational only; no exploitability |

### 1.2 Worked Example

A tool with 1 High finding and 1 Medium finding:

$$
\text{RiskScore} = (15 \times 1) + (8 \times 1) = 23
$$

---

## 2. Grade Boundaries

| Grade | RiskScore Range | Meaning |
|-------|-----------------|---------|
| **A** | 0 – 9           | Minimal risk. Safe for production agents. |
| **B** | 10 – 24         | Low risk. Minor issues; review findings. |
| **C** | 25 – 49         | Moderate risk. Remediation recommended before production use. |
| **D** | 50 – 74         | High risk. Use only in isolated/sandboxed environments. |
| **F** | 75+             | Critical risk. Do not use in agentic pipelines. |

---

## 3. Check Categories

AgentSentry evaluates tools across the following security domains:

### 3.1 Input Validation (AS-001 – AS-009)
- Path traversal and directory escape (AS-002)
- Command injection via unsanitized arguments (AS-003)
- SSRF via user-controlled URLs (AS-004)

### 3.2 Credential & Secret Handling (AS-010 – AS-019)
- API keys in environment variables (AS-010)
- Secrets logged to stdout/stderr (AS-013)
- Insecure credential storage patterns (AS-015)

### 3.3 Privilege & Scope (AS-020 – AS-029)
- Overly broad OAuth/token scopes (AS-005)
- Unnecessary file system or network permissions (AS-021)

### 3.4 Denial of Service & Resilience (AS-030 – AS-039)
- Missing rate-limit handling (AS-011)
- Unbounded resource consumption (AS-031)

### 3.5 Supply Chain (AS-040 – AS-049)
- Unpinned dependencies (AS-041)
- Missing SBOM or provenance attestation (AS-042)

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
