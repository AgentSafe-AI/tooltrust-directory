# ToolTrust Security Methodology

ToolTrust scans MCP tool definitions (names, descriptions, input schemas, declared permissions)
using the **[ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner)** and maps
findings to the AS-XXX rule catalog below.

---

## Grading

| Grade | Score | Policy |
|:-----:|------:|--------|
| A | 0–9 | Allow |
| B | 10–24 | Allow + rate limit |
| C | 25–49 | Require approval |
| D | 50–74 | Require approval |
| F | 75+ | Block |

Scores are worst-case across all tools in a server. Each finding adds weight based on severity:
Critical (+25), High (+15), Medium (+8), Low (+2).

---

## Rule Catalog

### AS-001 — Tool Poisoning (Prompt Injection)

**Detects:** Adversarial instructions embedded in a tool's description field designed to hijack
an AI agent's behavior — e.g. "ignore previous instructions", `<INST>` tags, `system:` prefixes,
jailbreak language, or data-exfiltration directives pointing to external URLs.

**Why it matters:** MCP tool descriptions are read by the LLM at runtime. A malicious server can
use this field to override the agent's system prompt and exfiltrate data or escalate privileges.

**Recommendation:** Remove adversarial instructions from tool descriptions. Validate all
tool-definition strings against a safe-pattern allowlist before registration.

---

### AS-002 — Excessive Permission Surface

**Detects:** Tools that declare broad permission categories (`exec`, `fs`, `network`) beyond what
their stated purpose requires, or whose input schema accepts parameters that imply wide access
(e.g. arbitrary shell commands, unrestricted file paths).

**Why it matters:** Over-privileged tools increase blast radius if the agent is manipulated or
the tool is misused. The principle of least privilege applies to MCP tools.

**Recommendation:** Validate input parameters using Enums where possible. Restrict file-system
operations to explicit allowed directories. Scope network access to known hosts.

---

### AS-003 — Scope Mismatch

**Detects:** Inconsistency between a tool's name, description, and declared permissions — e.g.
a tool named `read_file` that also declares `exec` permission, or a description that understates
actual capabilities.

**Why it matters:** Agents and humans trust tool names and descriptions to understand what a tool
does. Mismatches hide risk.

**Recommendation:** Use explicit naming conventions that fully reflect actual capabilities.
Ensure tool names, descriptions, and permission declarations are internally consistent.

---

### AS-004 — Supply Chain Vulnerability (CVE)

**Detects:** Known CVEs in the tool's declared dependencies via
[OSV](https://osv.dev) / [Google OSV-Scanner](https://github.com/google/osv-scanner).

**Why it matters:** A tool with a vulnerable dependency can be exploited to compromise the host
process or exfiltrate agent context.

**Recommendation:** Upgrade or replace the vulnerable dependency. Pin all dependency versions
and enable automated CVE scanning (Dependabot or OSV Scanner).

---

### AS-005 — Privilege Escalation

**Detects:** OAuth/token scopes that include admin or wildcard write access, or description-level
signals that suggest impersonation or privilege escalation (e.g. `sudo`, `impersonate`,
`act as admin`).

**Why it matters:** A tool with escalated privileges can be weaponized to perform actions far
beyond what the user intended to authorize.

**Recommendation:** Restrict OAuth/token scopes to the minimum necessary. Remove admin,
`:write` wildcards, and any description-level escalation signals.

---

### AS-006 — Arbitrary Code Execution

**Detects:** Tools whose description or input schema indicate they can execute arbitrary shell
commands, scripts, or code — e.g. parameters named `command`, `script`, `eval`, or descriptions
containing "run any command", "execute shell".

**Why it matters:** Arbitrary code execution tools are the highest-risk category. A single
prompt injection on an ACE tool can fully compromise the host.

**Recommendation:** If not strictly needed, remove the tool. If required, set
`approval_required: true` in your MCP client config to ensure human-in-the-loop confirmation.

---

### AS-008 — Known Compromised Package Version

**Detects:** Dependencies whose exact version or version range has been confirmed as malicious or
compromised, matched against an embedded offline blacklist compiled from public advisories
(Snyk, GitHub Security, NVD). Runs before any network call — zero latency, air-gap safe.

**Why it matters:** Standard CVE databases (OSV/NVD) have a 24–72 hour propagation delay after
a supply-chain attack is disclosed. The embedded blacklist provides immediate "virtual patching"
for confirmed incidents such as the March 2026 TeamPCP attack (litellm 1.82.7/8, trivy v0.69.4–6),
where malicious packages steal SSH keys, AWS credentials, and establish systemd persistence.

**Severity:**
- `SUPPLY_CHAIN_BLOCK` — confirmed malicious payload → **Critical** (+25 pts)
- `SUPPLY_CHAIN_WARN` — elevated risk, no confirmed payload → **High** (+15 pts)

**Recommendation:** Remove the affected package immediately and rotate all credentials
(SSH keys, AWS/GCP tokens, `.env` secrets). Check for persistence artefacts. Upgrade to a
clean version (e.g. `litellm ≥ 1.82.9`, `trivy ≥ v0.69.7`, `setup-trivy ≥ v0.2.6`).

---

### AS-010 — Insecure Secret Handling

**Detects:** Input parameters whose names suggest they accept raw secrets or credentials —
e.g. `api_key`, `password`, `secret`, `token`, `private_key`.

**Why it matters:** Secrets passed as plain input parameters appear in agent traces, logs, and
LLM context windows. A compromised agent or leaking trace exposes the credential.

**Recommendation:** Avoid accepting raw credentials as input parameters. Use secret managers
(e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in
agent traces.

---

### AS-011 — DoS Resilience (Missing Rate Limit / Timeout)

**Detects:** Network or execution tools that declare no rate-limit, timeout, or retry
configuration in their description or schema.

**Why it matters:** An agent in a loop can hammer an unthrottled tool, exhausting API quotas,
causing cascading failures, or incurring unexpected costs.

**Recommendation:** Declare explicit rate-limit, timeout, and retry configuration for all
network and execution tools. Implement exponential back-off and surface resource state to the
calling agent.

---

*Scan methodology and rule catalog are versioned alongside the
[ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner).*
