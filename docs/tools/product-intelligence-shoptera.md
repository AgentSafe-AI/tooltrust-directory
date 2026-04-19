# 🟡 product-intelligence-shoptera

> Shoptera Product Intelligence
Search product catalogs across thousands of Central European e-shops. Semantic search, keyword matching, GTIN/EAN lookup — via REST API or MCP.

~2,500 e-shops | ~8.5M products | 7 countries (CZ, SK, PL, HU, RO, DE, AT)

Live stats: GET /stats/global

Quickstart
No authentication required. Base URL: https://shoptera.ai/api

Semantic search — natural language, understands intent:

curl "https://shoptera.ai/api/v1/search?q=dárek+pro+zahradníka+do+500+Kč&max_price=500&currency=CZK&origin_country=CZ"
Keyword search — exact title matching, fast:

curl "https://shoptera.ai/api/v1/search/text?title=Nike+Air+Max+90&brand=Nike"
GTIN/EAN lookup — find e-shops by barcode:

curl "https://shoptera.ai/api/v1/search/gtin/5901234123457"
Saving tokens: Add fields to return only what you need (up to 70% smaller response):

curl "https://shoptera.ai/api/v1/search?q=boty&limit=5&fields=title,price,product_url,cart_action"
Quick Install
Claude Code (one command)
claude mcp add --transport http shoptera https://shoptera.ai/api/mcp
Cursor
Add to Cursor Settings → Features → MCP → Add New MCP Server, or edit ~/.cursor/mcp.json:

{
  "mcpServers": {
    "shoptera": { "url": "https://shoptera.ai/api/mcp" }
  }
}
Windsurf
Add via Cascade → MCP Servers → Add Server, or edit ~/.codeium/windsurf/mcp_config.json:

{
  "mcpServers": {
    "shoptera": { "url": "https://shoptera.ai/api/mcp" }
  }
}
VS Code (Copilot / Continue)
Edit .vscode/mcp.json in your workspace:

{
  "mcpServers": {
    "shoptera": { "url": "https://shoptera.ai/api/mcp" }
  }
}
Any tool (universal installer)
npx add-mcp https://shoptera.ai/api/mcp -n shoptera -g -y
All Platforms
Platform	Setup	Details
Claude Code	claude mcp add --transport http shoptera https://shoptera.ai/api/mcp	Skill guide
Cursor	MCP config	Settings → Features → MCP
Windsurf	MCP config	Cascade → MCP Servers
VS Code	MCP config	.vscode/mcp.json
OpenAI Codex	AGENTS.md	Agent config reference
ChatGPT	OpenAPI spec	Custom GPT actions. Instructions
Gemini	GEMINI.md	Tool definitions and endpoints
Any HTTP client	Examples	curl, Python, JavaScript
MCP Details
Endpoint: https://shoptera.ai/api/mcp (streamable HTTP, stateless, no auth)

3 tools: search_products, search_products_by_text, lookup_by_gtin

Capabilities
Product Search — semantic vs keyword vs GTIN, when to use which, filters, scoring
Cart Actions — three action types, how to handle each
Data Coverage — countries, data freshness, live stats
API Reference
Full documentation: api/reference.md

OpenAPI spec: api/openapi.yaml

Endpoints
Method	Path	Description
GET	/api/v1/search?q=...	Semantic search (natural language)
GET	/api/v1/search/text?title=...	Keyword search (exact title match)
GET	/api/v1/search/gtin/{gtin}	GTIN/EAN barcode lookup
GET	/stats/global	Catalog statistics
Code Examples
Semantic search — curl, Python, JavaScript
Keyword search — curl, Python, JavaScript
GTIN/EAN lookup — curl, Python, JavaScript
Cart actions — handling all three action types

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 19 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [product-intelligence-shoptera](https://smithery.ai/server/product_intelligence/shoptera) |
| **Scan Date** | 2026-04-19 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 3 |
| Medium   | 0 |
| Low      | 4 |
| Info     | 3 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 12 properties (threshold: 10)

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/product-intelligence-shoptera.json)*
