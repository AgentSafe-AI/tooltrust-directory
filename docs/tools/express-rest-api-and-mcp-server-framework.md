# 🟢 express-rest-api-and-mcp-server-framework

> Express REST API and MCP Server Framework is a comprehensive development framework for building RESTful APIs and MCP servers with Express.js. It provides a complete template for creating production-ready APIs using Node.js, Express, Mongoose (MongoDB), and Sequelize (SQL databases).

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `1.1.0` |
| **Vendor** | iolufemi |
| **Stars** | ⭐ 147 |
| **npm Package** | `Express-REST-API-and-MCP-Server-Framework` |
| **Language** | TypeScript |
| **Source** | [express-rest-api-and-mcp-server-framework](https://github.com/iolufemi/Express-REST-API-and-MCP-Server-Framework) |
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
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/express-rest-api-and-mcp-server-framework.json)*
