# 🟢 dante-r-g36u-onehq-comissions-calculator

> OneHQ Commission Calculator MCP is a MCP server that gives AI assistants direct access to insurance commission calculation and compliance tools. It lets you model distribution hierarchies, calculate exact earnings per agent tier, validate structures against real carrier rules, and look up benchmark contract ranges — all without leaving your AI workflow.

The OneHQ Commission Calculator MCP exposes 5 tools:

1. calculate_commission — Computes exact earnings per agent given an annual premium and a hierarchy of contract percentages. Returns direct commissions and override spreads at every tier.
   Preferred input: annual_premium (number) + agents array with name and contract_pct per tier.
   Example output: IMO override $1,200 / BGA override $1,200 / Agent direct $10,800 / Total distributed $13,200.

2. build_hierarchy — Takes named tiers and returns a validated, sorted hierarchy ready to feed into calculate_commission. Also provides 4 pre-built templates: Standard BGA, BGA with MGA, Direct Agent, and Multi-Level.
   Preferred input: tiers array with name and contract_pct per level.
   Example output: sorted tier list with validation status and 4 template options.

3. validate_hierarchy — Checks a hierarchy against a specific carrier's allowed contract ranges before submission. Returns a pass/fail result with tier-by-tier errors and warnings.
   Preferred input: carrier name (e.g. "protective", "mutual-of-omaha") + hierarchy array with name and pct per tier.
   Example output: overall PASS/FAIL, per-tier range check results, and a warning count.

4. get_carrier_info — Returns typical contract percentage ranges per tier (Agent, MGA, BGA, IMO) and maximum hierarchy totals for 6 supported carriers. Call with no argument to list all available carriers.
   Preferred input: carrier name (optional). Omit to get the full carrier list.
   Example output: Agent range 85–100%, BGA range 105–120%, IMO range 115–130%, max hierarchy 145%.

5. onehq_info — Returns a structured overview of the OneHQ platform (ICM, CRM, DMS, Agent Portal, Data Visualization) with relevant links. Optionally filter by topic to narrow results.
   Preferred input: topic string (optional) — e.g. "commissions", "crm", "agent portal".
   Example output: matching module name, description, and documentation link.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [dante-r-g36u-onehq-comissions-calculator](https://smithery.ai/server/dante-r-g36u/onehq-comissions-calculator) |
| **Scan Date** | 2026-05-30 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/dante-r-g36u-onehq-comissions-calculator.json)*
