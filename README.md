# 🛡️ ToolTrust Directory

> **This repo hosts [tooltrust.dev](https://www.tooltrust.dev/) — the website and pre-scanned report data. If you want to scan your own MCP servers, go to [tooltrust-scanner](https://github.com/AgentSafe-AI/tooltrust-scanner).**

A public registry of AI agent tools, continuously scanned for prompt injection, data exfiltration, and privilege escalation by [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner).

> **🚨 Supply-Chain Incident Coverage (March 2026)**
> ToolTrust now detects and blocks confirmed supply-chain incidents including the LiteLLM / TeamPCP compromise and the malicious axios npm publish (`axios@1.14.1`, `axios@0.30.4`). For npm-backed MCP servers, ToolTrust also scores dependency visibility, transitive lockfile evidence, lifecycle scripts, and IOC indicators such as `plain-crypto-js`.

![ToolTrust Directory UI](./docs/tooltrust-ui.png)

[![Tools Audited](https://img.shields.io/badge/tools%20audited-1234-brightgreen)](./data/reports/)
[![Last Scan](https://img.shields.io/badge/last%20scan-2026--06--07-blue)](./data/reports/)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](./LICENSE)
[![Schema](https://img.shields.io/badge/schema-v1.0-orange)](./report.schema.json)

---

## 📊 Security Registry

<!-- TOOLTRUST:BEGIN -- Do not edit this section manually. -->

*Top 50 by popularity. View all 1234 tools → [Full Directory](./docs/full-directory.md) · [data/reports/](./data/reports/) · [docs/tools/](./docs/tools/)*

| Tool | Version | Popularity | Grade | Key Findings | Scanned |
|------|---------|:-----:|:-----:|:-------------|:-------:|
| [playwright-mcp](https://github.com/microsoft/playwright-mcp) | `0.0.75` | 14.5M/mo | **[D](./docs/tools/playwright-mcp.md)** | 📦 `AS-004` ×23, 🔑 `AS-002` ×15, ⚡ `AS-006` ×2, ⚡ `AS-011` ×6 | Jun 7 |
| [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | `chrome-dev…` | 9.3M/mo | **[D](./docs/tools/chrome-devtools-mcp.md)** | 📦 `AS-004` ×29, 🔑 `AS-002` ×16, ⚡ `AS-011` ×4, ⚡ `AS-006` | Jun 7 |
| [context7](https://github.com/upstash/context7) | `1.0.30` | 5.0M/mo | **[B](./docs/tools/context7.md)** | `AS-014` ×2, 🔑 `AS-002`, ⚡ `AS-011` | Jun 7 |
| [upstash-context7-mcp](https://github.com/upstash/context7) | `1.0.30` | 5.0M/mo | **[B](./docs/tools/upstash-context7-mcp.md)** | `AS-014` ×2, 🔑 `AS-002`, ⚡ `AS-011` | Jun 7 |
| [gemini-cli](https://github.com/google-gemini/gemini-cli) | `0.47.0-nig…` | 3.1M/mo | **[C](./docs/tools/gemini-cli.md)** | `AS-014` ×56, 🔑 `AS-002` ×35, ⚡ `AS-011` ×11 | Jun 7 |
| [cloudflare-containers](https://github.com/cloudflare/containers) | `0.3.2` | 1.4M/mo | **[A](./docs/tools/cloudflare-containers.md)** | 🔑 `AS-002` ×5, ⚡ `AS-011`, `AS-014` ×7 | May 30 |
| [mcp-server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | `typescript…` | 1.3M/mo | **[C](./docs/tools/mcp-server-filesystem.md)** | 🔑 `AS-002` ×15, 📦 `AS-004` ×14, ⚡ `AS-011` | Jun 7 |
| [mcp-server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github) | `typescript…` | 563.6k/mo | **[C](./docs/tools/mcp-server-github.md)** | 🔑 `AS-002` ×35, 📦 `AS-004` ×26, ⚡ `AS-011` ×18 | Jun 7 |
| [xcodebuildmcp](https://github.com/getsentry/XcodeBuildMCP) | `2.6.2` | 532.0k/mo | **[B](./docs/tools/xcodebuildmcp.md)** | `AS-014` ×71, 🔑 `AS-002` ×35, ⚡ `AS-011` ×3 | Jun 7 |
| [n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | `2.57.1` | 528.8k/mo | **[C](./docs/tools/n8n-mcp.md)** | 📦 `AS-004` ×7, 🔑 `AS-002` ×7, ⚡ `AS-011` ×2 | Jun 7 |
| [mcp-server-sequential-thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) | `typescript…` | 438.7k/mo | **[B](./docs/tools/mcp-server-sequential-thinking.md)** | 📦 `AS-004` | Jun 7 |
| [firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server) | `3.2.1` | 377.0k/mo | **[C](./docs/tools/firecrawl-mcp-server.md)** | 🔑 `AS-002` ×14, `AS-014` ×8, ⚡ `AS-011` ×7 | Jun 7 |
| [cameroncooke-xcodebuildmcp](https://github.com/getsentry/XcodeBuildMCP) | `2.3.2` | 329.3k/mo | **[B](./docs/tools/cameroncooke-xcodebuildmcp.md)** | `AS-014` ×71, 🔑 `AS-002` ×35, ⚡ `AS-011` ×3 | May 30 |
| [notion-mcp-server](https://github.com/makenotion/notion-mcp-server) | `2.1.0` | 316.9k/mo | **[D](./docs/tools/notion-mcp-server.md)** | 🔑 `AS-002` ×30, 📦 `AS-004` ×22, ⚡ `AS-011` ×22 | Jun 7 |
| [figma-context-mcp](https://github.com/GLips/Figma-Context-MCP) | `0.12.0` | 296.4k/mo | **[B](./docs/tools/figma-context-mcp.md)** | `AS-014` ×9, 🔑 `AS-002`, ⚡ `AS-011` | Jun 7 |
| [tavily-mcp](https://github.com/tavily-ai/tavily-mcp) | `0.2.20` | 165.1k/mo | **[C](./docs/tools/tavily-mcp.md)** | 🔑 `AS-002` ×10, 📦 `AS-004` ×5, ⚡ `AS-011` ×5 | Jun 7 |
| [tavily-ai-tavily-mcp](https://github.com/tavily-ai/tavily-mcp) | `0.2.19` | 155.7k/mo | **[C](./docs/tools/tavily-ai-tavily-mcp.md)** | 🔑 `AS-002` ×10, 📦 `AS-004` ×5, ⚡ `AS-011` ×5 | May 30 |
| [ruflo](https://github.com/ruvnet/ruflo) | `3.10.34` | 147.4k/mo | **[B](./docs/tools/ruflo.md)** | `AS-014` ×33, 🔑 `AS-002` ×25, ⚡ `AS-011` | Jun 7 |
| [context-mode](https://github.com/mksglu/context-mode) | `1.0.162` | 131.5k/mo | **[C](./docs/tools/context-mode.md)** | `AS-012`, 🔑 `AS-002` ×6, `AS-014` ×8, ⚡ `AS-011` ×2 | Jun 7 |
| [mcp-server-kubernetes](https://github.com/Flux159/mcp-server-kubernetes) | `3.8.0` | 104.2k/mo | **[B](./docs/tools/mcp-server-kubernetes.md)** | `AS-014` ×22, 🔑 `AS-002` ×6, ⚡ `AS-011` ×3 | Jun 7 |
| [mcp-server-brave-search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | `typescript…` | 104.1k/mo | **[C](./docs/tools/mcp-server-brave-search.md)** | 🔑 `AS-002` ×12, ⚡ `AS-011` ×7, `AS-014` ×8, 🗝️ `AS-010` ×2 | Jun 7 |
| [circleci-public-mcp-server-circleci](https://github.com/CircleCI-Public/mcp-server-circleci) | `0.15.1` | 101.4k/mo | **[D](./docs/tools/circleci-public-mcp-server-circleci.md)** | 🔑 `AS-002` ×21, 📦 `AS-004` ×17, ⚡ `AS-011` ×13, 📐 `AS-003` ×2 | May 30 |
| [ms-365-mcp-server](https://github.com/Softeria/ms-365-mcp-server) | `0.114.4` | 97.9k/mo | **[D](./docs/tools/ms-365-mcp-server.md)** | 📦 `AS-004` ×178, 🔑 `AS-002` ×376, ⚡ `AS-011` ×172 | Jun 7 |
| [mcp-server-time](https://github.com/modelcontextprotocol/servers/tree/main/src/time) | `typescript…` | 86.8k | **[A](./docs/tools/mcp-server-time.md)** | `AS-014` ×2 | Jun 7 |
| [apify-mcp-server](https://github.com/apify/apify-mcp-server) | `0.10.12` | 84.8k/mo | **[D](./docs/tools/apify-mcp-server.md)** | 🔑 `AS-002` ×27, ⚡ `AS-011` ×7, `AS-014` ×16, ⚡ `AS-006` ×2 | Jun 7 |
| [mobile-mcp](https://github.com/mobile-next/mobile-mcp) | `0.0.31-beta` | 77.5k/mo | **[C](./docs/tools/mobile-mcp.md)** | 📦 `AS-004` ×23, 🔑 `AS-002` ×5, ⚡ `AS-011` | Jun 7 |
| [exa-mcp-server](https://github.com/exa-labs/exa-mcp-server) | `3.2.1` | 67.9k/mo | **[C](./docs/tools/exa-mcp-server.md)** | 🔑 `AS-002` ×4, 📦 `AS-004` ×2, ⚡ `AS-011` ×2 | Jun 7 |
| [desktopcommandermcp](https://github.com/wonderwhy-er/DesktopCommanderMCP) | `0.2.42` | 66.2k/mo | **[C](./docs/tools/desktopcommandermcp.md)** | 🔑 `AS-002` ×22, `AS-014` ×26, ⚡ `AS-011` ×8, 📐 `AS-003` | Jun 7 |
| [brave-search-mcp-server](https://github.com/brave/brave-search-mcp-server) | `2.0.83` | 66.1k/mo | **[C](./docs/tools/brave-search-mcp-server.md)** | 🔑 `AS-002` ×12, ⚡ `AS-011` ×7, `AS-014` ×8, 🗝️ `AS-010` ×2 | Jun 7 |
| [claude-task-master](https://github.com/eyaltoledano/claude-task-master) | `0.20.0` | 64.2k/mo | **[B](./docs/tools/claude-task-master.md)** | `AS-014` ×14, 🔑 `AS-002` ×9, ⚡ `AS-011` | Jun 7 |
| [railway-mcp-server](https://github.com/railwayapp/railway-mcp-server) | `0.1.11` | 46.5k/mo | **[C](./docs/tools/railway-mcp-server.md)** | `AS-012`, 🔑 `AS-002` ×57, `AS-014` ×36, ⚡ `AS-011` ×13, 🗝️ `AS-010` | May 30 |
| [obsidian-mcp-server](https://github.com/cyanheads/obsidian-mcp-server) | `3.2.4` | 42.3k/mo | **[B](./docs/tools/obsidian-mcp-server.md)** | 🔑 `AS-002` ×9, `AS-014` ×13, ⚡ `AS-011` ×2 | Jun 7 |
| [dive](https://github.com/OpenAgentPlatform/Dive) | `0.14.2` | 38.7k/mo | **[C](./docs/tools/dive.md)** | 🔑 `AS-002` ×3, ⚡ `AS-011` ×2, `AS-014` ×2 | Jun 7 |
| [git-mcp-server](https://github.com/cyanheads/git-mcp-server) | `2.15.1` | 35.5k/mo | **[C](./docs/tools/git-mcp-server.md)** | 🔑 `AS-002` ×39, 📦 `AS-004` ×28, ⚡ `AS-011` ×9 | Jun 7 |
| [tacticlaunch-mcp-linear](https://github.com/tacticlaunch/mcp-linear) | `1.1.2` | 31.6k/mo | **[C](./docs/tools/tacticlaunch-mcp-linear.md)** | `AS-014` ×42, 🔑 `AS-002` ×21, ⚡ `AS-011` ×8 | May 30 |
| [brightdata-mcp](https://github.com/brightdata/brightdata-mcp) | `2.10.0` | 30.5k/mo | **[C](./docs/tools/brightdata-mcp.md)** | 🔑 `AS-002` ×67, ⚡ `AS-011` ×58, `AS-014` ×65 | Jun 7 |
| [github-mcp-server](https://github.com/github/github-mcp-server) | `1.1.2` | 30.5k | **[C](./docs/tools/github-mcp-server.md)** | 🔑 `AS-002` ×75, ⚡ `AS-011` ×36, `AS-014` ×86, 📐 `AS-003`, 🗝️ `AS-010` | Jun 7 |
| [aas-ee-open-websearch](https://github.com/Aas-ee/open-webSearch) | `2.1.11` | 28.5k/mo | **[C](./docs/tools/aas-ee-open-websearch.md)** | 🔑 `AS-002` ×7, 📦 `AS-004` ×6, ⚡ `AS-011` ×6 | Jun 7 |
| [mcp-server-typescript](https://github.com/dataforseo/mcp-server-typescript) | `2.9.7` | 27.7k/mo | **[C](./docs/tools/mcp-server-typescript.md)** | 📦 `AS-004` ×83, 🔑 `AS-002` ×24, ⚡ `AS-011` ×13 | Jun 7 |
| [antvis-mcp-server-chart](https://github.com/antvis/mcp-server-chart) | `0.9.10` | 26.1k/mo | **[B](./docs/tools/antvis-mcp-server-chart.md)** | `AS-014` ×26, 🔑 `AS-002`, ⚡ `AS-011` | May 30 |
| [mcp-server-chart](https://github.com/antvis/mcp-server-chart) | `0.9.10` | 25.8k/mo | **[B](./docs/tools/mcp-server-chart.md)** | `AS-014` ×26, 🔑 `AS-002`, ⚡ `AS-011` | Jun 7 |
| [neo](https://github.com/neomjs/neo) | `11.19.1` | 22.3k/mo | **[B](./docs/tools/neo.md)** | `AS-014` ×8, 🔑 `AS-002`, ⚡ `AS-011` | Jun 7 |
| [kastalien-research-clear-thought-two](https://github.com/Kastalien-Research/thoughtbox) | `1.2.0` | 20.1k/mo | **[C](./docs/tools/kastalien-research-clear-thought-two.md)** | `AS-014` ×3, 🔑 `AS-002` ×3, ⚡ `AS-011` | May 30 |
| [kastalien-research-thoughtbox](https://github.com/Kastalien-Research/thoughtbox) | `1.2.0` | 20.1k/mo | **[C](./docs/tools/kastalien-research-thoughtbox.md)** | `AS-014` ×3, 🔑 `AS-002` ×3, ⚡ `AS-011` | May 30 |
| [mcp-server-asana](https://github.com/roychri/mcp-server-asana) | `1.6.0` | 19.6k/mo | **[C](./docs/tools/mcp-server-asana.md)** | 🔑 `AS-002` ×8, ⚡ `AS-011` ×3, `AS-014` ×10 | Jun 7 |
| [postman-mcp-server](https://github.com/postmanlabs/postman-mcp-server) | `2.8.9` | 19.1k/mo | **[C](./docs/tools/postman-mcp-server.md)** | 🔑 `AS-002` ×53, ⚡ `AS-011` ×15, `AS-014` ×41 | Jun 7 |
| [dainfernalcoder-perplexity-mcp](https://github.com/DaInfernalCoder/perplexity-mcp) | `Feature` | 17.5k/mo | **[B](./docs/tools/dainfernalcoder-perplexity-mcp.md)** | 🔑 `AS-002`, ⚡ `AS-011`, `AS-014` | May 30 |
| [openmetadata](https://github.com/open-metadata/OpenMetadata) | `1.2.1` | 14.1k | **[C](./docs/tools/openmetadata.md)** | `AS-014` ×31, 🔑 `AS-002` ×11, ⚡ `AS-011` ×8 | Jun 7 |
| [xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp) | `2026.05.28…` | 14.0k | **[C](./docs/tools/xiaohongshu-mcp.md)** | 🔑 `AS-002` ×7, ⚡ `AS-011` ×5, `AS-014` ×10 | Jun 7 |
| [skill-seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | `3.7.0` | 14.0k | **[B](./docs/tools/skill-seekers.md)** | 🔑 `AS-002`, ⚡ `AS-011`, `AS-014` ×5 | Jun 7 |

<!-- TOOLTRUST:END -->

---

## ⚖️ Grading System

| Grade | Gateway Action | Description |
|:-----:|:--------------:|-------------|
| **S** 🌟 | `ALLOW` | Reserved for dynamic analysis |
| **A** | `ALLOW` | Minimal risk. Safe for production agents. |
| **B** | `ALLOW` + rate limit | Low risk. Minor issues, but generally safe. |
| **C** | `REQUIRE_APPROVAL` | Moderate risk. Remediation recommended. |
| **D** | `REQUIRE_APPROVAL` | High risk. Use only in isolated environments. |
| **F** | `BLOCK` | Critical risk. Do not use in agentic pipelines. |

Full methodology: [docs/methodology.md](./docs/methodology.md)

---

## 🔍 Check Catalog

ToolTrust Scanner check IDs referenced in all reports:

| ID | Severity | Detects |
|----|:--------:|---------|
| 🛡️&nbsp;**AS&#8209;001** | `Critical` | **Tool Poisoning** — Adversarial prompts hidden in tool descriptions (`ignore previous instructions`, `<INST>`) |
| 🔑&nbsp;**AS&#8209;002** | `High`/`Low` | **Permission Surface** — `exec`, `network`, `db`, `fs` beyond stated purpose; over-broad input schema |
| 📐&nbsp;**AS&#8209;003** | `High` | **Scope Mismatch** — Tool name contradicts its permissions (e.g. `read_config` with `exec`) |
| 📦&nbsp;**AS&#8209;004** | `High`/`Critical` | **Supply Chain CVEs** — Known CVEs in bundled dependencies via [OSV](https://osv.dev) |
| 🔓&nbsp;**AS&#8209;005** | `High` | **Privilege Escalation** — `admin`/`:write` OAuth scopes; `sudo`/`impersonate` in descriptions |
| ⚡&nbsp;**AS&#8209;006** | `Critical` | **Arbitrary Code Execution** — `evaluate_script`, `_evaluate` suffix, `execute javascript`, `page.evaluate()` patterns |
| ℹ️&nbsp;**AS&#8209;007** | `Info` | **Insufficient Tool Data** — Tool lacks a valid description or schema |
| 🚨&nbsp;**AS&#8209;008** | `Critical` | **Known Compromised Package** — Offline embedded blacklist of confirmed supply-chain attacks (LiteLLM 1.82.7/1.82.8, Trivy v0.69.4-v0.69.6, Langflow <1.9.0, Axios 1.14.1/0.30.4). Zero-latency, no network required. |
| 🔤&nbsp;**AS&#8209;009** | `Medium` | **Typosquatting** — Tool name within edit-distance 2 of a well-known MCP tool, suggesting impersonation |
| 🗝️&nbsp;**AS&#8209;010** | `Medium` | **Secret Handling** — Input params accepting API keys/passwords; credentials logged insecurely |
| ⚡&nbsp;**AS&#8209;011** | `Low` | **DoS Resilience** — No rate-limit, timeout, or retry config on network/exec tools |
| 🔄&nbsp;**AS&#8209;012** | `High` | **Rug-Pull** — Tool set changed between scans of the same version without a version bump *(directory pipeline only)* |
| 👥&nbsp;**AS&#8209;013** | `High`/`Medium` | **Tool Shadowing** — Duplicate or near-duplicate tool name hijacks calls intended for a trusted tool |
| ℹ️&nbsp;**AS&#8209;014** | `Info` | **Dependency Inventory Unavailable** — MCP server exposed neither `metadata.dependencies` nor a `repo_url`, so supply-chain coverage is limited and must be treated as incomplete |
| ⚠️&nbsp;**AS&#8209;015** | `Medium`/`High` | **Suspicious NPM Lifecycle Script** — npm dependency publishes `preinstall` / `postinstall` / similar install-time scripts; severity rises for remote-fetch or inline-execution patterns |
| 🚨&nbsp;**AS&#8209;016** | `Critical` | **Suspicious NPM IOC Dependency** — published npm metadata or install-time scripts reference a known malicious IOC package, domain, URL, or reviewed script pattern such as `plain-crypto-js`, even if the top-level package name is new |
| ⚠️&nbsp;**AS&#8209;017** | `Medium` | **Suspicious Data Exfiltration Description** — tool description explicitly suggests sending user data, content, or conversation history to external / remote endpoints, without classifying it as prompt injection |
| ℹ️&nbsp;**AS&#8209;018** | `Info` | **Embedded MCP Server Detected** — source-level MCP SDK usage was found, but tools could not be enumerated from a manifest or live handshake, so manual review is still required |
| 🔓&nbsp;**AS&#8209;019** | `High` | **Unauthenticated MCP Route Exposure** — embedded MCP HTTP routes expose the same handler without equivalent authentication middleware |

Full details → [docs/methodology.md](./docs/methodology.md)

---

## 🤖 AI Agent Integration

Let your AI agent scan its own tools. Add ToolTrust as an MCP server in your `.mcp.json` or `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "tooltrust": {
      "command": "npx",
      "args": ["-y", "tooltrust-mcp"]
    }
  }
}
```

This gives your agent five security tools:

| Tool | Description |
|------|-------------|
| `tooltrust_scan_config` | Scan all MCP servers in your `.mcp.json` or `~/.claude.json` in parallel |
| `tooltrust_scan_server` | Launch and scan a specific MCP server |
| `tooltrust_scanner_scan` | Scan a JSON blob of tool definitions |
| `tooltrust_lookup` | Look up a server's trust grade from this directory |
| `tooltrust_list_rules` | List all security rules with IDs and descriptions |

**Claude Code users:** ask your agent to run `tooltrust_scan_config` to audit every MCP server in your project in one shot.

---

## 🤝 Contribute

**Request a scan** — [open an issue](https://github.com/AgentSafe-AI/tooltrust-directory/issues/new?template=SCAN_REQUEST.md) with the tool's public URL and version.

**Dispute a finding** — open an issue referencing the finding ID (e.g. `AS-002`).

**Integrate ToolTrust Scanner** — see [docs/dev.md](./docs/dev.md) for the data pipeline and schema spec.

---

## 📛 Add to your README

If your MCP server was audited and earned a grade, add our badge to your repo:

**Grade A (recommended)** — copy this into your README:

```markdown
[![ToolTrust Grade A](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-a.svg)](https://github.com/AgentSafe-AI/tooltrust-directory)
```

**Other grades** — replace `grade-a` with `grade-s`, `grade-b`, `grade-c`, `grade-d`, or `grade-f`:

| Grade | Badge |
|:-----:|-------|
| S | [![Grade S](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-s.svg)](https://github.com/AgentSafe-AI/tooltrust-directory) |
| A | [![Grade A](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-a.svg)](https://github.com/AgentSafe-AI/tooltrust-directory) |
| B | [![Grade B](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-b.svg)](https://github.com/AgentSafe-AI/tooltrust-directory) |
| C | [![Grade C](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-c.svg)](https://github.com/AgentSafe-AI/tooltrust-directory) |
| D | [![Grade D](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-d.svg)](https://github.com/AgentSafe-AI/tooltrust-directory) |
| F | [![Grade F](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-f.svg)](https://github.com/AgentSafe-AI/tooltrust-directory) |

*Badges link to this directory. Generate SVGs locally: `go run ./cmd/badge`*

---

## ⚙️ Automation

The registry table above is kept up to date by a daily GitHub Actions workflow:

```
.github/workflows/daily-audit.yml   ← cron 00:00 UTC + manual dispatch
```

Each run:
1. **Discovers** popular MCP servers via GitHub Search (50+ stars) plus Smithery-native servers (10+ uses)
2. **Scans** new/updated tools with ToolTrust Scanner + OSV supply-chain analysis
3. **Publishes** updated reports to `data/reports/` and regenerates this README

---

*Licensed [MIT](./LICENSE). Scanner engine: [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner).*
