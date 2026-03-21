# ToolTrust Scoring Methodology

> **Version:** 1.2  |  **Effective Date:** 2026-03-21  |  **Scanner:** [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner)

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
| **S** | (Reserved)      | ALLOW | S grade is reserved for future dynamic runtime analysis. Static-only scans cap at A. |
| **A** | 0 – 9           | ALLOW | Minimal risk. Safe for production agents. |
| **B** | 10 – 24         | ALLOW + rate limit | Low risk. Minor issues; review findings. |
| **C** | 25 – 49         | REQUIRE_APPROVAL | Moderate risk. Remediation recommended before production use. |
| **D** | 50 – 74         | REQUIRE_APPROVAL | High risk. Use only in isolated/sandboxed environments. |
| **F** | 75+             | BLOCK | Critical risk. Do not use in agentic pipelines. |

---

## 4. Check Catalog

All active rules as of [ToolTrust Scanner v0.1.12](https://github.com/AgentSafe-AI/tooltrust-scanner):

| ID | Category | Severity | What it detects |
|----|----------|:--------:|-----------------|
| 🛡️ **AS&#8209;001** | **Critical** | Tool Poisoning | Hidden adversarial prompts in tool descriptions (`ignore previous instructions`, `system:`, `<INST>`) |
| 🔑 **AS&#8209;002** | High / Low | Permission Surface | Tools declaring `exec`, `network`, `db`, or `fs` beyond their stated purpose; unnecessarily broad input schema |
| 📐 **AS&#8209;003** | **High** | Scope Mismatch | Tool names that contradict their permissions (e.g. `read_config` secretly holding `exec`) |
| 📦 **AS&#8209;004** | High / Critical | Supply Chain (CVE) | Third-party dependencies with known CVEs — queried live from [OSV database](https://osv.dev) |
| 🔓 **AS&#8209;005** | **High** | Privilege Escalation | OAuth/token scopes broader than stated purpose (`admin`, `:write` wildcards); escalation signals in description (`sudo`, `impersonate`) |
| ⚡ **AS&#8209;006** | **Critical** | Arbitrary Code Execution | Tool name or description implies arbitrary script/code execution (`evaluate_script`, `execute javascript`, `_evaluate` suffix, `page.evaluate()` patterns) |
| ℹ️ **AS&#8209;007** | **Info** | Insufficient Tool Data | Tool lacks a valid description or schema, preventing agents from understanding its capabilities or limitations |
| 🔤 **AS&#8209;009** | **Medium** | Typosquatting | Tool name within edit-distance 2 of a well-known MCP tool name, suggesting impersonation of a trusted tool |
| 🗝️ **AS&#8209;010** | **Medium** | Secret Handling | Input parameters accepting API keys/passwords/tokens; credentials logged or stored insecurely |
| ⚡ **AS&#8209;011** | **Low** | DoS Resilience | Network/execution tools with no rate-limit, timeout, or retry configuration |
| 🔄 **AS&#8209;012** | **High** | Rug-Pull / Silent Update | Tool set changed between scans of the same version without a version bump — *directory pipeline only; requires historical scan data* |
| 👥 **AS&#8209;013** | High / Medium | Tool Shadowing | Duplicate or near-duplicate tool name registered across servers hijacks calls intended for a trusted tool |

---

### AS-001

**Tool Poisoning (Prompt Injection)** · Severity: Critical

Detects adversarial instructions embedded in a tool's `description` field — e.g. `ignore previous instructions`, `system:` prefixes, `<INST>` tags, jailbreak language, or data-exfiltration directives pointing to external URLs.

MCP tool descriptions are read by the LLM at runtime. A malicious server can use this field to override the agent's system prompt, exfiltrate data, or escalate privileges without the user's knowledge.

**Fix:** Remove adversarial instructions from tool descriptions. Validate all tool-definition strings against a safe-pattern allowlist before registration.

---

### AS-002

**Excessive Permission Surface** · Severity: High / Medium / Low

Detects tools that declare broad permission categories (`exec`, `fs`, `network`) beyond what their stated purpose requires, or whose input schema accepts parameters implying wide access (e.g. arbitrary shell commands, unrestricted file paths).

Over-privileged tools increase blast radius if the agent is manipulated or the tool is misused.

**Fix:** Validate input parameters using Enums where possible. Restrict file-system operations to explicit allowed directories. Scope network access to known hosts.

---

### AS-003

**Scope Mismatch** · Severity: High

Detects inconsistency between a tool's name, description, and declared permissions — e.g. a tool named `read_file` that also declares `exec` permission, or a description that understates actual capabilities.

**Fix:** Use explicit naming conventions that fully reflect actual capabilities.

---

### AS-004

**Supply Chain Vulnerability (CVE)** · Severity: High / Critical

Detects known CVEs in the tool's dependencies via [OSV](https://osv.dev) / Google OSV-Scanner.

**Fix:** Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

### AS-005

**Privilege Escalation** · Severity: High

Detects OAuth/token scopes that include admin or wildcard write access, or description-level signals suggesting impersonation or privilege escalation (`sudo`, `impersonate`, `act as admin`).

**Fix:** Restrict OAuth/token scopes to the minimum necessary. Remove admin, `:write` wildcards, and any description-level escalation signals.

---

### AS-006

**Arbitrary Code Execution** · Severity: Critical

Detects tools whose description or input schema indicate they can execute arbitrary shell commands, scripts, or code — e.g. parameters named `command`, `script`, `eval`, or descriptions containing "run any command".

Arbitrary code execution tools are the highest-risk category. A single prompt injection on an ACE tool can fully compromise the host.

**Fix:** If not strictly needed, remove the tool. If required, set `approval_required: true` in your MCP client config to ensure human-in-the-loop confirmation.

---

### AS-010

**Insecure Secret Handling** · Severity: Medium / High

Detects input parameters whose names suggest they accept raw secrets or credentials — e.g. `api_key`, `password`, `secret`, `token`, `private_key`.

Secrets passed as plain input parameters appear in agent traces, logs, and LLM context windows. A compromised agent or leaking trace exposes the credential.

**Fix:** Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

### AS-009

**Typosquatting** · Severity: Medium

Detects tool names that are within edit-distance 2 of a curated list of well-known MCP tool names (e.g. `list_files`, `read_file`, `brave_search`). A tool named `read_fille` or `list_filles` could impersonate a trusted tool to intercept agent calls.

Typosquatting is a supply-chain attack vector: a malicious server registers a slightly misspelled version of a popular tool hoping an agent or user selects it by mistake.

**Fix:** Rename the tool to a unique, clearly differentiated name. If the tool genuinely implements the same interface as the popular tool (e.g. a fork), document this explicitly and distinguish it with a vendor prefix.

---

### AS-011

**DoS Resilience — Missing Rate Limit / Timeout** · Severity: Low

Detects network or execution tools that declare no rate-limit, timeout, or retry configuration in their description or schema.

An agent in a loop can hammer an unthrottled tool, exhausting API quotas, causing cascading failures, or incurring unexpected costs.

**Fix:** Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### AS-012

**Rug-Pull / Silent Update** · Severity: High · *Directory pipeline only*

Detects when the set of tools exposed by a server changes between two scans of the **same version** without a version bump. A server that silently adds or removes tools after installation is a supply-chain red flag — commonly called a "rug-pull" attack.

> **Note:** This check requires historical scan data (the previous scan report for the same tool) and therefore runs only in the ToolTrust Directory CI pipeline, not in the standalone `tooltrust-scanner` CLI.

**Example:** `vsmithery` previously exposed `ig_get_media`, `ig_publish_photo`, etc. A later scan of the same version revealed those 22 tools had been silently replaced with 17 new `INSTAGRAM_*` tools — a complete interface swap with no version bump.

**Fix:** Pin your MCP server to a specific commit hash rather than a floating version tag. Audit the changelog and all tool definitions before updating. Enable the ToolTrust Directory daily re-scan to be notified of silent changes.

---

### AS-013

**Tool Shadowing** · Severity: High / Medium

Detects tool name collisions across a multi-server tool set. When two servers register tools with identical or near-identical names (edit-distance 1), the order of resolution becomes attacker-controlled. A malicious server can register `read_file` to intercept calls intended for the trusted filesystem server.

Exact duplicates are flagged as High (the hijack is unambiguous). Near-duplicates (edit-distance 1) are flagged as Medium (may be accidental or intentional).

**Fix:** Ensure each MCP server uses a unique namespace prefix for its tools (e.g. `github__search_repos` vs `linear__search_repos`). Audit multi-server configurations for name collisions before deploying to production agents.

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
| 1.2 | v0.1.12 | Added AS-009 (Typosquatting), AS-013 (Tool Shadowing); false-positive fixes for AS-001 and AS-010 |

---

## 7. Contributing

To challenge a finding or request a rescan, open a [Scan Request issue](https://github.com/AgentSafe-AI/tooltrust-directory/issues/new?template=SCAN_REQUEST.md).
