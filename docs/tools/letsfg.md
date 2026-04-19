# 🟡 letsfg

> Agent-native flight search. 102 airline connectors fire in parallel — Ryanair, EasyJet, Wizz Air, Southwest, AirAsia, Qantas, and 96 more — plus enterprise GDS/NDC providers (Amadeus, Duffel, Sabre, Travelport) through the LetsFG backend. One tool call scans the entire world for flights, including airlines your agent didn't know existed.

Your agent doesn't need to build a flight integration. It doesn't need to scrape. Just add this MCP server and it can search and book flights in seconds.

### Why?

Flight websites inflate prices with demand tracking, cookie-based pricing, and surge markup. The same flight is often **$20–$50 cheaper** through LetsFG — raw airline price, zero markup.

### How it works

`search_flights` fires all relevant connectors in parallel on your machine + queries enterprise GDS sources in the cloud. Results come back merged, deduplicated, sorted by price. ~5 seconds for a full global search.

### Tools

| Tool | What it does | Cost |
|------|-------------|------|
| `search_flights` | Search 400+ airlines | Free |
| `search_hotels` | Search hotels worldwide | Free |
| `resolve_location` | City/airport → IATA code | Free |
| `get_agent_profile` | Your usage & profile | Free |
| `unlock_flight_offer` | Confirm live price, reserve 30 min | Free |
| `setup_payment` | Attach Stripe payment | Free |
| `book_flight` | Book with real PNR + e-ticket | Ticket price only |

**Search is free forever. Booking charges the raw airline ticket price via Stripe — we add zero margin.**

`LETSFG_API_KEY` is optional. Without it, the server runs all 102 local connectors. With it, you also get 400+ airlines via enterprise GDS/NDC sources.

### Pricing

- **Personal use** — completely free. Search, unlock, book. No limits.
- **Commercial use** — 1% fee (min $1 USD) per booking, collected via Stripe Connect. Search and unlock are still free.
- **First 1,000 GitHub stars** — star the repo and link your GitHub username to get free unlimited access (personal & commercial). No trial, no catch.

### Links

- **GitHub:** [github.com/LetsFG/LetsFG](https://github.com/LetsFG/LetsFG) — full docs, 102 connector source code, architecture guide, agent integration tutorials
- **API Docs:** [api.letsfg.co/docs](https://api.letsfg.co/docs)
- **PyPI:** [pypi.org/project/letsfg](https://pypi.org/project/letsfg/)
- **npm:** [npmjs.com/package/letsfg-mcp](https://www.npmjs.com/package/letsfg-mcp)

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 19 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [letsfg](https://smithery.ai/server/letsfg) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 1 |
| Low      | 3 |
| Info     | 7 |

## Detailed Findings

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

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
tool declares http permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "token" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/letsfg.json)*
