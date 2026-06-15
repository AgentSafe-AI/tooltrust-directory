# 🔴 openclaw-hal9000-romulus-31780

> ROMulus is a retro gaming ROM search engine that aggregates results from four major sites. Search by game title and console to get download page URLs, cover images, and file sizes... all in one all.

 Tools:
 • search_roms — Find ROMs by title, optionally filtered by console (NES, SNES, N64, GameCube, PS1,
   PS2, PSP, GBA, Genesis, Dreamcast, and 20+ more)
 • get_game_details — Fetch full metadata for a game: year, region, genre, languages, rating,
  serial number, and description
 • list_systems — List all 28 supported consoles

 No API key required.

| Field | Value |
|-------|-------|
| **Grade** | **D** |
| **Risk Score** | 50 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [openclaw-hal9000-romulus-31780](https://smithery.ai/server/openclaw-hal9000/romulus-31780) |
| **Scan Date** | 2026-06-15 |
| **Scanner** | tooltrust-scanner/v0.3.16 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 2 |
| Medium   | 1 |
| Low      | 2 |
| Info     | 3 |

## Detailed Findings

### 🔴 🛡️ `AS-001` — Tool Poisoning (Prompt Injection)

**Severity:** Critical

**Description:**
possible prompt injection detected in tool description: pattern matched: (?im)^\s*system\s*:

**Recommendation:**
Remove adversarial instructions from tool descriptions. Validate all tool-definition strings against a safe-pattern allowlist before registration.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

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

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/openclaw-hal9000-romulus-31780.json)*
