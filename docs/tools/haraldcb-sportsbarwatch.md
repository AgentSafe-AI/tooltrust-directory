# 🟡 haraldcb-sportsbarwatch

> Find sports bars showing live matches anywhere in the world. SportsBarWatch covers 2,200+ bars across 99 countries with daily-updated schedules for 30+ sports — football, ice hockey,  rugby, cricket, basketball, tennis, motorsport, and more. 

Ask what's on tonight in any city, find where to watch a specific match, or look up a team's upcoming schedule with bar availability. 

No API  key required.             

- Find bars by match — search by team names, competition, or match description, with optional  city filter
- What's on tonight — get every match showing at sports bars in a given city right now          
- Bar details — full info on any bar including address, contact, and upcoming match schedule    
- Match search — search across all upcoming matches by team, competition, or sport              
- Team schedule — upcoming fixtures for any team with bar counts and city coverage              
                                                                                                 
 Covers Premier League, Champions League, World Cup 2026, La Liga, Serie A, Bundesliga, NHL, NBA, AFL, Six Nations, F1, and hundreds more competitions. Data refreshed daily.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [haraldcb-sportsbarwatch](https://smithery.ai/server/haraldcb/sportsbarwatch) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 5 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/haraldcb-sportsbarwatch.json)*
