# 🟡 pinkpixel-dev-mindbridge-mcp

> MindBridge is an AI orchestration MCP server that lets any app talk to any LLM — OpenAI, Anthropic, DeepSeek, Ollama, and more — through a single unified API. Route queries, compare models, get second opinions, and build smarter multi-LLM workflows.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `1.2.0` |
| **Vendor** | pinkpixel-dev |
| **Stars** | ⭐ 30 |
| **npm Package** | `@pinkpixel/mindbridge` |
| **npm Downloads (30d)** | 294 |
| **Language** | TypeScript |
| **Source** | [pinkpixel-dev-mindbridge-mcp](https://github.com/pinkpixel-dev/mindbridge-mcp) |
| **Scan Date** | 2026-04-03 |
| **Scanner** | tooltrust-scanner/v0.3.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 1 |
| Medium   | 0 |
| Low      | 1 |
| Info     | 0 |

## Detailed Findings

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 13 properties (threshold: 10)

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** High

**Description:**
input parameter "maxTokens" appears to accept a secret or credential

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/pinkpixel-dev-mindbridge-mcp.json)*
