# 🟢 rowhint-ntm5-rowhint

> # RowHint MCP Server

Airline seat quality intelligence via MCP. Per-seat quality scores (1-10) with plain-English notes for **66+ aircraft configurations** across 10 US airlines. Every score is hand-verified against live airline seat maps.

## Setup

Add to your Claude Desktop config:

```json
{
  "mcpServers": {
    "rowhint": {
      "url": "https://mcp.rowhint.com/mcp"
    }
  }
}
```

No API key required. All 5 tools are free.

## Key Features

- Per-seat quality scores (1-10) with transparent methodology
- Plain-English notes explaining why each seat scores the way it does
- Best seat finder filtered by cabin class
- Side-by-side seat comparison with score differences and summary
- Windowless window seat detection
- 66+ hand-verified configs across AA, DL, UA, WN, B6, AS, HA, F9, NK, G4

## Available Tools

1. **`rowhint_get_seat_score`** — Get quality score and notes for a specific seat
2. **`rowhint_get_best_seats`** — Find the highest-rated seats by cabin class
3. **`rowhint_compare_seats`** — Compare two seats side by side
4. **`rowhint_get_config_overview`** — Get full seat map overview for an aircraft
5. **`rowhint_get_windowless_seats`** — Find window seats that actually have no window

## Use Cases

- Travelers asking AI assistants "What's the best seat on my Delta A321neo flight?"
- Travel app developers adding seat quality data to booking tools
- AI travel agents making personalized seat recommendations
- Corporate travel tools optimizing seat assignments

## FAQ

**Does it cover international airlines?**
Not yet — currently covers 10 US airlines. International carriers are on the roadmap.

**How are scores calculated?**
Each seat is scored 1-10 based on legroom, recline, proximity to galley/lavatory, window alignment, and hardware. Full methodology at [rowhint.com](https://rowhint.com).

**Is an API key required?**
No. All tools are free with no authentication required.

**How often is the data updated?**
Configurations are hand-verified against live airline booking sites and updated when airlines change their layouts.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [rowhint-ntm5-rowhint](https://smithery.ai/server/rowhint-ntm5/RowHint) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/rowhint-ntm5-rowhint.json)*
