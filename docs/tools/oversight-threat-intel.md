# 🟢 oversight-threat-intel

> ## Sectora Threat Intelligence

  Ask your AI *"is this CVE actually being exploited?"* and get real data back — not a guess from 2024 training cutoff.

  Sectora blends **EPSS scores**, **CISA KEV** status, **public exploit** availability, **Nuclei templates**, and **CVSS** into a single 0–100 **weaponization
  score**. Your LLM stops hallucinating severity and starts giving actionable answers grounded in live signals.

  ---

  ### 🛠️ Tools

  | Tool | What it does |
  |---|---|
  | `lookup_cve` | Full CVE enrichment — EPSS, KEV, exploits, Nuclei, ransomware use |
  | `get_weaponization_score` | 0–100 score blending 5 exploitation signals |
  | `search_cves` | Find CVEs by keyword, severity, KEV status, or exploit availability |
  | `assess_tech_risk` | Risk summary for a stack (e.g. `"nginx 1.25, OpenSSL 3.1, PostgreSQL 16"`) |
  | `get_kev_recent` | Newly added CISA KEV entries |
  | `get_trending_cves` | EPSS spikes + new exploits this week |
  | `lookup_ip_reputation` | Community IP rep from the Sectora Shield WAF network |
  | `get_threat_stats` | Database coverage stats |

  ---

  ### 💬 Try these prompts

  - *"Is CVE-2024-3400 being actively exploited? What's its weaponization score?"*
  - *"What's the weaponization score for Log4Shell?"*
  - *"Assess the security risk of running nginx 1.25 and OpenSSL 3.1"*
  - *"Show me the critical CVEs added to CISA KEV this week"*
  - *"Has IP 45.33.32.156 been reported for attacks?"*

  ---

  ### ⚡ Quick start (Claude Desktop)

  ```json
  {
    "mcpServers": {
      "sectora": {
        "type": "streamable-http",
        "url": "https://mcp.sectora.io/mcp"
      }
    }
  }

  Works out of the box with Claude Desktop, Claude Code, Cursor, Windsurf, ChatGPT, and any MCP-compatible client.

  ---
  🎁 Free tier

  300 requests/minute per IP. No signup. No credit card. Discovery calls (tools/list, initialize) don't count against quota.

  Need higher limits for production use? Get a free API key at sectora.io/settings/api-keys → 3,000 req/min.

  ---
  🔒 Privacy

  We log request metadata (IP, country, tool name, latency) for abuse detection and service reliability. We do not log tool arguments or responses — the CVEs and
  IPs you look up are never stored. 30-day retention. Full details at sectora.io/legal/privacy.

  ---
  🏢 About

  Built and operated by Sectora — an AI-era DAST platform that scans production apps for vulnerabilities. This MCP is our way of putting the same threat-intel
  enrichment our scanners use directly inside your AI workflow

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [oversight-threat-intel](https://smithery.ai/server/oversight/threat-intel) |
| **Scan Date** | 2026-07-03 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 2 |
| Info     | 11 |

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, database access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: database access

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/oversight-threat-intel.json)*
