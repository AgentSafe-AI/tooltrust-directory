# ToolTrust Scoring Methodology

> **Version:** 1.1  |  **Effective Date:** 2026-03-06  |  **Scanner:** [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner)

---

## Overview

ToolTrust grades every MCP server on a scale of **A → F** using a deterministic risk score produced by [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner). This document defines how we discover tool definitions, the scoring formula, severity weights, grade boundaries, and the full check catalog.

---

## 1. Tool Definition Discovery

Each MCP server is cloned at its latest release tag. The scanner then looks for tool definitions using a **3-tier discovery strategy**:

### Tier 1 — Explicit manifest files

The scanner checks for these files in order (first valid match wins):

| Path | Format |
|------|--------|
| `tools.json` | MCP tools array |
| `mcp.json` | MCP tools array |
| `server.json` | MCP server manifest |
| `testdata/tools.json` | Test fixtures |
| `.mcp/tools.json` | Hidden config |
| `src/tools.json` / `src/mcp.json` | Source-embedded |
| `test/tools.json` | Test fixtures |
| `tools/tools.json` | Tools subdirectory |

A file is accepted only if it contains a non-empty `.tools[]` array (validated with `jq`).

### Tier 2 — Recursive search

If no manifest is found, every `*.json` in the repo (excluding `node_modules/`, `.git/`, `package*.json`, `tsconfig*.json`) is inspected for a `.tools[]` array. This catches tools defined in `skills/`, `tools/`, or custom subdirectories.

### Tier 3 — Grep-based synthetic extraction *(fallback)*

When no JSON manifest exists, the scanner parses the **source code** directly to extract tool names and descriptions:

| Language | Pattern matched |
|----------|----------------|
| TypeScript / JavaScript | `server.tool("name", "description", ...)` |
| Python | `@mcp.tool`, `name="tool_name"` |

A synthetic `tools.json` is generated from the extracted names and passed to the scanner. This ensures servers like `chrome-devtools-mcp` — where tool definitions like `evaluate_script` are embedded in TypeScript source — are scanned at the individual tool level and not missed.

> **If no tool definitions are found after all three tiers**, only the AS-004 supply-chain CVE scan runs against the repo's dependency manifests (`package.json`, `go.mod`).

---

## 2. Risk Score Formula

The composite risk score for a server is defined as:

$$
\text{RiskScore} = \sum_{i=1}^{n} \left( \text{SeverityWeight}_{i} \times \text{FindingCount}_{i} \right)
$$

where:

- $n$ is the total number of distinct finding categories detected.
- $\text{SeverityWeight}_{i}$ is the weight assigned to severity level $i$ (see §3).
- $\text{FindingCount}_{i}$ is the number of individual findings at severity level $i$.

### 2.1 Severity Weights

| Severity | Weight ($w$) | Example trigger |
|----------|:-----------:|--------------------|
| Critical | 25 | Prompt injection (AS-001), arbitrary code execution (AS-006) |
| High     | 15 | exec/network permission (AS-002), scope mismatch (AS-003), privilege escalation (AS-005) |
| Medium   | 8  | Insecure secret handling (AS-010) |
| Low      | 2  | Missing rate-limit (AS-011) |
| Info     | 0  | Informational only; no exploitability |

### 2.2 Worked Example

A tool with 1 Critical finding (AS-006) and 1 Low finding (AS-011):

$$
\text{RiskScore} = (25 \times 1) + (2 \times 1) = 27 \quad \Rightarrow \text{Grade C}
$$

---

## 3. Grade Boundaries

| Grade | RiskScore Range | Gateway Action | Meaning |
|-------|:---------------:|:--------------:|---------|
| **S** | 0 (no findings) | ALLOW | Zero risk. Perfect score. |
| **A** | 1 – 9           | ALLOW | Minimal risk. Safe for production agents. |
| **B** | 10 – 24         | ALLOW + rate limit | Low risk. Minor issues; review findings. |
| **C** | 25 – 49         | REQUIRE_APPROVAL | Moderate risk. Remediation recommended before production use. |
| **D** | 50 – 74         | REQUIRE_APPROVAL | High risk. Use only in isolated/sandboxed environments. |
| **F** | 75+             | BLOCK | Critical risk. Do not use in agentic pipelines. |

---

## 4. Check Catalog

All active rules as of [ToolTrust Scanner v0.1.4](https://github.com/AgentSafe-AI/tooltrust-scanner):

| ID | Category | Severity | What it detects |
|----|----------|:--------:|-----------------|
| AS-001 | Tool Poisoning | **Critical** | Hidden adversarial prompts in tool descriptions (`ignore previous instructions`, `system:`, `<INST>`) |
| AS-002 | Permission Surface | High / Low | Tools declaring `exec`, `network`, `db`, or `fs` beyond their stated purpose; unnecessarily broad input schema |
| AS-003 | Scope Mismatch | **High** | Tool names that contradict their permissions (e.g. `read_config` secretly holding `exec`) |
| AS-004 | Supply Chain (CVE) | High / Critical | Third-party dependencies with known CVEs — queried live from [OSV database](https://osv.dev) |
| AS-005 | Privilege Escalation | **High** | OAuth/token scopes broader than stated purpose (`admin`, `:write` wildcards); escalation signals in description (`sudo`, `impersonate`) |
| AS-006 | Arbitrary Code Execution | **Critical** | Tool name or description implies arbitrary script/code execution (`evaluate_script`, `execute javascript`, `_evaluate` suffix, `page.evaluate()` patterns) |
| AS-010 | Secret Handling | **Medium** | Input parameters accepting API keys/passwords/tokens; credentials logged or stored insecurely |
| AS-011 | DoS Resilience | **Low** | Network/execution tools with no rate-limit, timeout, or retry configuration |

---

## 5. Scan Scope & Limitations

- **Static analysis only** (v1.1). Dynamic/runtime analysis is planned for a future release.
- Tier 3 (grep-based) coverage is best-effort. A tool name missed by extraction will not be scored.
- Scores reflect the tool version at `scan_date`. Scores are **not** retroactively updated when rules change; a rescan must be triggered.
- A clean scan result does not constitute an endorsement of overall software quality or runtime security.

---

## 6. Versioning

This methodology follows [Semantic Versioning](https://semver.org). Breaking changes to the formula or grade boundaries will increment the major version and require re-scanning all affected tools.

| Methodology version | Scanner version | Change |
|:-------------------:|:---------------:|--------|
| 1.0 | v0.1.2 | Initial release |
| 1.1 | v0.1.4 | Added AS-006 (Arbitrary Code Execution); 3-tier tool discovery |

---

## 7. Contributing

To challenge a finding or request a rescan, open a [Scan Request issue](https://github.com/AgentSafe-AI/tooltrust-directory/issues/new?template=SCAN_REQUEST.md).
