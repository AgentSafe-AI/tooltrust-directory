# 🟢 axel-belfort-weather-api

> Weather data API for AI agents. Current conditions and 7-day forecast for any location: temperature, humidity, wind speed, precipitation, UV index, and weather description. Worldwide coverage.

Tools: data_get_weather.

Use this for travel planning, event logistics, agriculture, or location-aware applications. Returns structured data ready for automated decision-making.

Returns: {current, forecast[], location}. No API key required — x402 micropayment $0.001/call on Base L2.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [axel-belfort-weather-api](https://smithery.ai/server/axel-belfort/weather-api) |
| **Scan Date** | 2026-07-09 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/axel-belfort-weather-api.json)*
