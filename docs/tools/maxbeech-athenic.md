# 🟠 maxbeech-athenic

> Transform Your AI Assistant into a True Business Automation Platform

Athenic is the only MCP server that lets ChatGPT, Claude, and other AI assistants actually do the work — autonomously running complex, multi-step business workflows on your behalf.

⸻

Why Athenic?

Your Assistant Can Finally Take Action

Most MCP servers only handle basic data lookups. Athenic adds an AI workforce to your assistant — so instead of just telling you what to do, it gets it done.

What Sets Athenic Apart

🚀 Long-Running Autonomous Tasks
Athenic runs for hours, not minutes. Ask your assistant to “research my top 10 competitors and prepare a report” — and return to find a full, sourced analysis waiting for you.

🤖 Multi-Agent Coordination
Athenic orchestrates multiple AI agents — research, marketing, analytics — working together to complete full workflows end-to-end.

🎯 Organization-Specific Intelligence
It learns your business. Connect your CRM, social accounts, and internal docs so when you ask “create a social campaign,” it already knows your voice, audience, and channels.

⚡ Execution, Not Just Advice
Post content, schedule tasks, publish blogs, analyze results — all automatically, with optional approval steps for sensitive actions.

⸻

Use Cases

For Startup Founders
	•	“Build our social presence” → Athenic creates, schedules, and optimizes posts across Twitter, LinkedIn, and Bluesky.
	•	“Research our market” → It identifies competitors, finds potential partners, drafts outreach, and tracks responses.

For Growth Marketers
	•	“Optimize our SEO” → Athenic researches trends, writes optimized content, builds links, and monitors rankings.
	•	“Run a competitive analysis” → It tracks competitors’ pricing, launches, and campaigns — and alerts you to opportunities.

For Operations Teams
	•	“Every Monday, send me a CRM performance report” → Automated data pulls, analysis, and summaries.
	•	“Analyze support tickets for patterns” → Finds recurring issues and suggests improvements automatically.

⸻

Key Features

🔗 Universal Assistant Integration
Works seamlessly with:
	•	ChatGPT (Apps SDK)
	•	Claude Desktop (native MCP)
	•	Cursor (development workflows)
	•	Any MCP-compatible client

🛠️ Dynamic Tool Ecosystem
Athenic automatically generates tools from your connected services:
	•	Research (PubMed, arXiv, web search)
	•	Social Media (LinkedIn, Twitter, Bluesky)
	•	Business Tools (CRM, analytics, email)
	•	Knowledge Base (RAG-powered queries)

📊 Live Progress Tracking
See every workflow unfold in real time — progress bars, execution steps, results, and error logs — all within your AI interface.

🔐 Enterprise-Grade Security
API Key, OAuth 2.1, or Anonymous access.
Encrypted data, SOC 2–compliant infrastructure, and organization-level isolation.

⸻

Real-World Scenarios

Content Marketing:
“Write a blog post about AI in healthcare, optimize it, and promote it.”
Athenic researches, drafts, schedules posts, and tracks engagement — entirely autonomously.

Competitive Intelligence:
“Monitor our top competitors and alert me to major changes.”
Athenic scrapes, analyzes, and summarizes — only pinging you when it matters.

Partnership Outreach:
“Find 20 YouTube creators for collaboration.”
Athenic discovers, qualifies, contacts, and tracks creators — from start to signed deal.

⸻

For Developers
	•	Protocol: MCP 2024-11-05
	•	Transport: Streamable HTTP (long-running ops)
	•	Auth: OAuth 2.1, API Keys, Anonymous
	•	UI: ChatGPT Apps SDK + Skybridge
	•	Realtime: Supabase Realtime

Example Config:

{
  "mcpServers": {
    "athenic": {
      "url": "https://getathenic.com/api/mcp",
      "transport": "streamable-http",
      "headers": {
        "X-API-Key": "ath_live_your_key_here"
      }
    }
  }
}

One config gives your assistant the ability to orchestrate workflows, access tools, run multi-agent systems, and query your org’s private data.

⸻

Pricing

Free Tier: 20 credits, all integrations, community support.
Pro: 1,000+ credits, advanced workflows, priority support.
Enterprise: Dedicated infrastructure, SLAs, custom agents, white-label options.

⸻

Get Started
	1.	Visit getathenic.com
	2.	Create an API key
	3.	Add it to your MCP client
	4.	Start delegating complex tasks

Or test instantly with anonymous access:

{
  "mcpServers": {
    "athenic": {
      "url": "https://getathenic.com/api/mcp",
      "transport": "streamable-http"
    }
  }
}


⸻

Why Teams Choose Athenic

“We cut social media time by 90% while increasing engagement.” — Sarah K., TechStart

“Athenic’s research agent replaced a whole analyst team.” — Michael R., DataCorp

“I approve final posts, but everything else runs itself.” — Lisa T., GrowthCo

⸻

The Future of AI Assistants

Most assistants advise. Athenic acts.
Stop prompting — start delegating.

👉 getathenic.com

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 32 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [maxbeech-athenic](https://smithery.ai/server/maxbeech/athenic) |
| **Scan Date** | 2026-04-13 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 5 |
| Medium   | 1 |
| Low      | 4 |
| Info     | 5 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

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
tool declares exec permission

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

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

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

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/maxbeech-athenic.json)*
