# 🟢 helix-song-coinex-mcp-server

> # CoinEx MCP Server

A Model Context Protocol (MCP) server that enables AI agents to interact seamlessly with the CoinEx cryptocurrency exchange. This server provides comprehensive access to market data, trading operations, and account management through a standardized MCP interface.

## Key Features

- **Market Data Access**: Retrieve real-time tickers, order books, K-lines, and recent trades for both spot and futures markets
- **Futures Analytics**: Access funding rates, premium indices, basis history, position tiers, and liquidation data
- **Account Management**: Query account balances and manage trading positions
- **Order Operations**: Place, cancel, and track orders with full history access
- **Flexible Deployment**: Supports multiple transport protocols (stdio, HTTP, SSE) for various integration scenarios

## Quick Start

### Installation via http (Recommended)
just add this url `https://mcp.coinex.com/mcp`  to your mcp configuration in agent. for example, use this command to add it to your claude code: 
```
claude mcp add --transport http coinex-mcp-server https://mcp.coinex.com/mcp
```

### Installation via uvx (Support get balance / place order by API key)

Configure your MCP client (e.g., Claude Desktop) with the following JSON:

```json
{
  "mcpServers": {
    "coinex": {
      "command": "uvx",
      "args": ["coinex-mcp-server"],
      "env": {
        "COINEX_ACCESS_ID": "your_access_id_here",
        "COINEX_SECRET_KEY": "your_secret_key_here"
      }
    }
  }
}
```

### HTTP Mode Deployment by source code
* install 
`pip install coinex-mcp-server`

* start the server in HTTP mode:
```bash
python -m coinex_mcp_server.main --transport http --host 127.0.0.1 --port 8000 --path /mcp --enable-http-auth
```
Pass credentials via HTTP headers:
- `X-CoinEx-Access-Id: <your_access_id>`
- `X-CoinEx-Secret-Key: <your_secret_key>`

## Usage Examples

- **Get Market Tickers**: `list_markets(market_type="spot")` or `get_tickers(symbol="BTCUSDT")`
- **Query Order Book**: `get_orderbook(symbol="BTCUSDT", limit=20)`
- **Check Account Balance**: `get_account_balance()`
- **Place Order**: `place_order(symbol="BTCUSDT", side="buy", type="limit", amount="0.01", price="50000")`

## Security Notes

⚠️ **Important**: 
- Never expose HTTP authentication in public services
- Deploy with HTTPS/TLS in production environments

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [helix-song-coinex-mcp-server](https://smithery.ai/server/helix-song/coinex_mcp_server) |
| **Scan Date** | 2026-05-10 |
| **Scanner** | tooltrust-scanner/v0.3.9 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 12 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/helix-song-coinex-mcp-server.json)*
