# 🟢 xltnapps-octotrip-rental-cars

> # OctoTrip Rental Cars MCP Server

Free, no-login MCP server for discovering and comparing rental cars with real-time pricing from multiple providers worldwide.

**Endpoint:** `https://mcp.octotrip.app/rental-cars/mcp`

## Affiliate Disclosure

OctoTrip is free to use. Booking links contain affiliate attribution -- OctoTrip may earn a commission at no extra cost to you. Search results are ranked by price within each car category, not by affiliate payout.

## Quick Start

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "octotrip-rental-cars": {
      "url": "https://mcp.octotrip.app/rental-cars/mcp"
    }
  }
}
```

No API key or login required.

## Tool: `search`

Search for rental cars by location, dates, and preferences. Returns available cars from multiple vendors grouped by category (economy, compact, SUV, etc.), showing the cheapest options in each. Dates can be in any common format (YYYY-MM-DD, DD.MM.YYYY, "August 1, 2026", etc.).

### Parameters

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `location` | string | yes | -- | Pickup city, airport, or address |
| `pickup_date` | string | yes | -- | Any common date format |
| `dropoff_date` | string | yes | -- | Any common date format |
| `dropoff_location` | string | no | same as pickup | For one-way rentals |
| `pickup_time` | string | no | `"12:00"` | HH:MM format |
| `dropoff_time` | string | no | `"12:00"` | HH:MM format |
| `currency` | string | no | `"EUR"` | ISO 4217 currency code |
| `language` | string | no | `"en"` | 2-letter language code |
| `age` | integer | no | `30` | Driver age (younger drivers may incur surcharges) |

### Response Format

Results are grouped by SIPP car category with the cheapest 2 options per group:

```json
{
  "results": [
    {
      "name": "Volkswagen Golf",
      "vendor": "Europcar",
      "sipp": "CDMR",
      "category": "Compact",
      "price": 181.03,
      "price_per_day": 45.26,
      "pay_now": 181.03,
      "pay_later": 0,
      "currency": "EUR",
      "transmission": "manual",
      "passengers": 5,
      "bags": 1,
      "doors": 4,
      "air_con": true,
      "fuel_policy": "Full to Full",
      "mileage": "Unlimited",
      "free_cancellation": true,
      "free_amendment": true,
      "deposit": 800,
      "excess": 950,
      "included_protections": ["Collision Damage Waiver", "Theft Protection"],
      "image_url": "https://...",
      "booking_url": "https://...",
      "link_type": "affiliate",
      "affiliate_disclosure": "This link contains affiliate attribution. OctoTrip may earn a commission at no extra cost to you."
    }
  ],
  "total": 23,
  "total_available": 379,
  "rental_days": 4,
  "pickup_location_resolved": "Munich International Airport",
  "dropoff_location_resolved": "Munich International Airport",
  "query": { ... }
}
```

### Error Responses

The server returns structured errors with suggestions:

- **`location_not_found`** -- location could not be resolved. Try a more specific name or airport.
- **`invalid_date`** -- date format not recognized. Use YYYY-MM-DD, DD.MM.YYYY, or similar.
- **`no_results`** -- no cars available for the given criteria. Try different dates or a nearby location.

## Example Prompts

- Find me a cheap rental car at Amsterdam Schiphol for next weekend
- Compare automatic SUVs available in Munich Airport for July 10-15
- I need a car in Barcelona from August 1-14, budget around 30 EUR/day
- One-way rental from Berlin to Hamburg, picking up Friday, returning Monday
- What's the cheapest economy car at London Heathrow for a week in September?

## Privacy

This server does not store, log, or track any user data. Queries are forwarded to provider APIs and results are returned directly. See [PRIVACY.md](PRIVACY.md) for details.

## Security

To report a vulnerability, see [SECURITY.md](SECURITY.md).

## License

MIT

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [xltnapps-octotrip-rental-cars](https://smithery.ai/server/xltnapps/octotrip-rental-cars) |
| **Scan Date** | 2026-07-05 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 2 |

## Detailed Findings

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/xltnapps-octotrip-rental-cars.json)*
