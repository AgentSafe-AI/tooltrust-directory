# 🟠 daniel-abbay-compuute-scan-api

> Static security scanner for MCP servers. POST a public GitHub URL, get severity counts, a score, and the top findings with file+line back.

37 rules across TypeScript, JavaScript, Python, Go, Rust, C#, Java, and Kotlin — every language with an official MCP SDK. Detects argument injection for npx/uvx/pipx/pnpx runner binaries (CWE-88), known CVEs in 40+ top packages, and the usual L0 discovery (transport, tool inventory, dependency pinning).

This is a pattern detector, not an exploitability oracle. Around 90% raw false-positive rate on unfiltered output — triage is on you, and the response says so explicitly.

POST /v1/scan is free with no API key. POST /v1/scan/pay charges $0.10 USDC per scan via x402 on Base. Manual L2-L4 audits at compuute.se/audit when you need dataflow review.

Wraps compuute-scan (MIT, zero deps). Per-rule false-positive rates and the methodology paper live in the repo.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 27 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [daniel-abbay-compuute-scan-api](https://smithery.ai/server/daniel-abbay/compuute-scan-api) |
| **Scan Date** | 2026-08-30 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 2 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: code/command execution, network access, filesystem access

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔴 ⚡ `AS-006` — Arbitrary Code Execution

**Severity:** Critical

**Description:**
tool name or description implies arbitrary script/code execution (evaluate_script, execute javascript, etc.)

**Recommendation:**
This tool can execute arbitrary code or shell commands on the host system. Remove it unless strictly required. If kept: (1) restrict access to trusted users/agents only, (2) require human approval before each invocation (Claude Desktop: set approval_required: true; other clients: enable equivalent confirmation), (3) use the most restrictive sandbox or read-only mode available, and (4) never expose this tool to untrusted input sources.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/daniel-abbay-compuute-scan-api.json)*
