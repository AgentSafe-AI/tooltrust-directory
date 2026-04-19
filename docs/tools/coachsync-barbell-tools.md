# 🟡 coachsync-barbell-tools

> **CoachSync MCP** provides barbell strength training tools for AI assistants. Built for coaches, lifters, and fitness apps that want to add structured programming to their AI workflows.

No API key required — connect and start using.

## Tools

### Warmup Calculator
Generate a Starting Strength-style warmup ramp for any barbell lift. Produces structured warmup sets with decreasing reps as weight increases, starting from the empty bar. Supports custom bar weights (women's bar, training bar) and rounding increments. Works for squat, bench, press, deadlift, and power clean.

### Plate Loader
Calculate which plates to load on each side of the barbell to hit a target weight. Uses a greedy algorithm with standard plate denominations, or supply your own inventory for home gym setups. Supports both lb and kg.

### Novice LP Generator
Build a complete 4-week novice linear progression program based on the Starting Strength model. Takes a lifter profile (sex, bodyweight, age, training frequency) and returns a week-by-week program with squat every session, alternating press/bench, deadlift progressing to power cleans, and session-by-session weight increases. Includes coaching notes tailored to the lifter (age-adjusted recovery tips, microplate recommendations).

## Connect

```
https://mcp.coachsync.io/mcp
```

Transport: Streamable HTTP. Compatible with Claude Desktop, Cursor, Windsurf, and any MCP client.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 12 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [coachsync-barbell-tools](https://smithery.ai/server/coachsync/barbell-tools) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 2 |
| Info     | 3 |

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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
tool declares http permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/coachsync-barbell-tools.json)*
