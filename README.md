# 🛡️ ToolTrust Directory

**Discover safe, audited MCP servers before your AI agent blindly trusts them.**

A public registry of AI agent tools, continuously scanned for prompt injection, data exfiltration, and privilege escalation by [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner).

> **🚨 Urgent Security Update (March 24, 2026)**
> ToolTrust now detects and blocks the LiteLLM / TeamPCP supply chain exploit. If you are adding MCP servers that rely on litellm (v1.82.7/8), ToolTrust will trigger a CRITICAL Grade F warning and block installation to protect your SSH/AWS keys.

[Insert Directory UI GIF Here]

[![Tools Audited](https://img.shields.io/badge/tools%20audited-158-brightgreen)](./data/reports/)
[![Last Scan](https://img.shields.io/badge/last%20scan-2026--03--27-blue)](./data/reports/)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](./LICENSE)
[![Schema](https://img.shields.io/badge/schema-v1.0-orange)](./report.schema.json)

---

## 📊 Security Registry

<!-- TOOLTRUST:BEGIN -- Do not edit this section manually. -->

*Top 50 by stars. View all 158 tools → [Full Directory](./docs/full-directory.md) · [data/reports/](./data/reports/) · [docs/tools/](./docs/tools/)*

| Tool | Version | Stars | Grade | Key Findings | Scanned |
|------|---------|:-----:|:-----:|:-------------|:-------:|
| [n8n](https://github.com/n8n-io/n8n) | `stable` | 181.2k | **[C](./docs/tools/n8n.md)** | 🔑 `AS-002` ×27, ⚡ `AS-011` ×9, ⚡ `AS-006`, 🗝️ `AS-010` | Mar 27 |
| [gemini-cli](https://github.com/google-gemini/gemini-cli) | `0.35.2` | 99.2k | **[D](./docs/tools/gemini-cli.md)** | 🔑 `AS-002` ×8, ⚡ `AS-011` ×5, 🗝️ `AS-010` ×2 | Mar 27 |
| [mcp-server-sequential-thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) | `2026.1.26` | 82.0k | **[A](./docs/tools/mcp-server-sequential-thinking.md)** | ✅ None | Mar 25 |
| [mcp-server-time](https://github.com/modelcontextprotocol/servers/tree/main/src/time) | `2026.1.26` | 82.0k | **[A](./docs/tools/mcp-server-time.md)** | ✅ None | Mar 25 |
| [mcp-server-fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) | `2026.1.26` | 82.0k | **[B](./docs/tools/mcp-server-fetch.md)** | 🔑 `AS-002` ×3, ⚡ `AS-011` ×3 | Mar 25 |
| [mcp-server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | `2026.1.26` | 82.0k | **[C](./docs/tools/mcp-server-filesystem.md)** | 🔑 `AS-002` ×15, ⚡ `AS-011` | Mar 25 |
| [mcp-server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github) | `2026.1.26` | 82.0k | **[C](./docs/tools/mcp-server-github.md)** | 🔑 `AS-002` ×35, ⚡ `AS-011` ×18 | Mar 25 |
| [mcp-server-brave-search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | `2026.1.26` | 82.0k | **[C](./docs/tools/mcp-server-brave-search.md)** | 🔑 `AS-002` ×14, ⚡ `AS-011` ×6 | Mar 25 |
| [context7](https://github.com/upstash/context7) | `ctx7@0.3.6` | 50.5k | **[B](./docs/tools/context7.md)** | 🔑 `AS-002`, ⚡ `AS-011` | Mar 25 |
| [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | `chrome-dev…` | 31.3k | **[C](./docs/tools/chrome-devtools-mcp.md)** | 🔑 `AS-002` ×14, ⚡ `AS-006`, ⚡ `AS-011` ×3 | Mar 25 |
| [ui-tars-desktop](https://github.com/bytedance/UI-TARS-desktop) | `0.3.0` | 29.1k | **[D](./docs/tools/ui-tars-desktop.md)** | 🔑 `AS-002` ×26, 📐 `AS-003` ×7, ⚡ `AS-011` ×6 | Mar 25 |
| [github-mcp-server](https://github.com/github/github-mcp-server) | `0.32.0` | 28.2k | **[C](./docs/tools/github-mcp-server.md)** | 🔑 `AS-002` ×46, ⚡ `AS-011` ×21 | Mar 25 |
| [ruflo](https://github.com/ruvnet/ruflo) | `3.5.48` | 26.2k | **[B](./docs/tools/ruflo.md)** | 🔑 `AS-002` ×9, ⚡ `AS-011` ×5 | Mar 26 |
| [claude-task-master](https://github.com/eyaltoledano/claude-task-master) | `task-maste…` | 26.2k | **[A](./docs/tools/claude-task-master.md)** | 🔑 `AS-002` | Mar 25 |
| [n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | `2.41.0` | 16.5k | **[C](./docs/tools/n8n-mcp.md)** | 🔑 `AS-002` ×7, ⚡ `AS-011` ×2 | Mar 27 |
| [figma-context-mcp](https://github.com/GLips/Figma-Context-MCP) | `0.8.0` | 13.9k | **[C](./docs/tools/figma-context-mcp.md)** | 🔑 `AS-002` ×13, 📐 `AS-003`, 🗝️ `AS-010`, ⚡ `AS-011` ×3 | Mar 25 |
| [xhs-downloader](https://github.com/JoeanAmier/XHS-Downloader) | `2.7` | 10.5k | **[C](./docs/tools/xhs-downloader.md)** | 🔑 `AS-002` ×10, ⚡ `AS-011` ×5 | Mar 20 |
| [mcp-use](https://github.com/mcp-use/mcp-use) | `python-v1.…` | 9.5k | **[B](./docs/tools/mcp-use.md)** | 🔑 `AS-002` ×3, ⚡ `AS-011` ×3 | Mar 25 |
| [openmetadata](https://github.com/open-metadata/OpenMetadata) | `1.12.3-rel…` | 9.0k | **[B](./docs/tools/openmetadata.md)** | 🔑 `AS-002` ×2, ⚡ `AS-011` | Mar 25 |
| [browser-tools-mcp](https://github.com/AgentDeskAI/browser-tools-mcp) | `1.2.0` | 7.1k | **[C](./docs/tools/browser-tools-mcp.md)** | 🔑 `AS-002` ×5, ⚡ `AS-011` ×3 | Mar 25 |
| [ida-pro-mcp](https://github.com/mrexodia/ida-pro-mcp) | `1.4.0` | 6.6k | **[B](./docs/tools/ida-pro-mcp.md)** | 🗝️ `AS-010`, 🔑 `AS-002`, ⚡ `AS-011` | Mar 20 |
| [firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server) | `3.2.1` | 5.8k | **[C](./docs/tools/firecrawl-mcp-server.md)** | 🔑 `AS-002` ×17, ⚡ `AS-011` ×9 | Mar 25 |
| [desktopcommandermcp](https://github.com/wonderwhy-er/DesktopCommanderMCP) | `0.2.38` | 5.8k | **[C](./docs/tools/desktopcommandermcp.md)** | 🔑 `AS-002` ×22, ⚡ `AS-011` ×8, 📐 `AS-003` | Mar 25 |
| [klavis](https://github.com/Klavis-AI/klavis) | `python-v2.…` | 5.7k | **[B](./docs/tools/klavis.md)** | 🔑 `AS-002`, ⚡ `AS-011` | Mar 25 |
| [whatsapp-mcp](https://github.com/lharries/whatsapp-mcp) | `0.0.1` | 5.4k | **[C](./docs/tools/whatsapp-mcp.md)** | 🔑 `AS-002` ×14, ⚡ `AS-011` ×7 | Mar 25 |
| [xcodebuildmcp](https://github.com/getsentry/XcodeBuildMCP) | `2.3.0` | 4.9k | **[B](./docs/tools/xcodebuildmcp.md)** | 🔑 `AS-002` ×35, ⚡ `AS-011` ×3 | Mar 25 |
| [deep-research](https://github.com/u14app/deep-research) | `0.11.0` | 4.5k | **[A](./docs/tools/deep-research.md)** | ✅ None | Mar 25 |
| [osaurus](https://github.com/osaurus-ai/osaurus) | `0.15.6` | 4.5k | **[A](./docs/tools/osaurus.md)** | ✅ None | Mar 27 |
| [mobile-mcp](https://github.com/mobile-next/mobile-mcp) | `0.0.49` | 4.1k | **[B](./docs/tools/mobile-mcp.md)** | 🔑 `AS-002` ×5, ⚡ `AS-011` | Mar 25 |
| [notion-mcp-server](https://github.com/makenotion/notion-mcp-server) | `2.1.0` | 4.1k | **[C](./docs/tools/notion-mcp-server.md)** | 🔑 `AS-002` ×30, ⚡ `AS-011` ×22 | Mar 25 |
| [exa-mcp-server](https://github.com/exa-labs/exa-mcp-server) | `3.1.9` | 4.1k | **[C](./docs/tools/exa-mcp-server.md)** | `AS-012`, 🔑 `AS-002` ×16, ⚡ `AS-011` ×5 | Mar 25 |
| [kubefwd](https://github.com/txn2/kubefwd) | `1.25.12` | 4.1k | **[B](./docs/tools/kubefwd.md)** | 🔑 `AS-002` ×4, ⚡ `AS-011` | Mar 25 |
| [mcp-server-chart](https://github.com/antvis/mcp-server-chart) | `0.9.10` | 3.9k | **[B](./docs/tools/mcp-server-chart.md)** | 🔑 `AS-002`, ⚡ `AS-011` | Mar 25 |
| [fast-agent](https://github.com/evalstate/fast-agent) | `0.6.7` | 3.7k | **[A](./docs/tools/fast-agent.md)** | ✅ None | Mar 25 |
| [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) | `graphql-mc…` | 3.6k | **[D](./docs/tools/mcp-server-cloudflare.md)** | 🔑 `AS-002` ×5, ⚡ `AS-011` ×2, ⚡ `AS-006` | Mar 25 |
| [excel-mcp-server](https://github.com/haris-musa/excel-mcp-server) | `0.1.7` | 3.6k | **[B](./docs/tools/excel-mcp-server.md)** | 🔑 `AS-002` ×17, ⚡ `AS-011` ×3, 🗝️ `AS-010` | Mar 24 |
| [archestra](https://github.com/archestra-ai/archestra) | `platform-v…` | 3.5k | **[A](./docs/tools/archestra.md)** | ✅ None | Mar 25 |
| [mcp-server-browserbase](https://github.com/browserbase/mcp-server-browserbase) | `2.4.3` | 3.2k | **[C](./docs/tools/mcp-server-browserbase.md)** | 🔑 `AS-002` ×5, ⚡ `AS-011` ×3 | Mar 25 |
| [shadcn-ui-mcp-server](https://github.com/Jpisnice/shadcn-ui-mcp-server) | `2.0.0` | 2.7k | **[A](./docs/tools/shadcn-ui-mcp-server.md)** | 🔑 `AS-002` | Mar 25 |
| [solon](https://github.com/opensolon/solon) | `3.9.5` | 2.7k | **[S 🌟](./docs/tools/solon.md)** | ✅ None | Mar 10 |
| [code-graph-rag](https://github.com/vitali87/code-graph-rag) | `0.0.148` | 2.2k | **[C](./docs/tools/code-graph-rag.md)** | 🔑 `AS-002` ×24, ⚡ `AS-011` ×22 | Mar 25 |
| [brightdata-mcp](https://github.com/brightdata/brightdata-mcp) | `2.8.6` | 2.2k | **[C](./docs/tools/brightdata-mcp.md)** | 🔑 `AS-002` ×66, ⚡ `AS-011` ×57 | Mar 25 |
| [mcp-shrimp-task-manager](https://github.com/cjo4m06/mcp-shrimp-task-manager) | `1.0.21` | 2.1k | **[C](./docs/tools/mcp-shrimp-task-manager.md)** | 🔑 `AS-002` ×10, ⚡ `AS-011` ×6 | Mar 25 |
| [google-workspace-mcp](https://github.com/taylorwilsdon/google_workspace_mcp) | `1.15.0` | 1.9k | **[B](./docs/tools/google-workspace-mcp.md)** | 🔑 `AS-002` ×2, ⚡ `AS-011` ×2 | Mar 25 |
| [mcp-router](https://github.com/mcp-router/mcp-router) | `0.6.2` | 1.9k | **[A](./docs/tools/mcp-router.md)** | ✅ None | Mar 25 |
| [unity-mcp](https://github.com/IvanMurzak/Unity-MCP) | `0.61.0` | 1.7k | **[B](./docs/tools/unity-mcp.md)** | 🔑 `AS-002` ×10, ⚡ `AS-011` | Mar 26 |
| [n8n-mcp-server](https://github.com/leonardsellem/n8n-mcp-server) | `0.1.8` | 1.6k | **[C](./docs/tools/n8n-mcp-server.md)** | 🔑 `AS-002` ×27, ⚡ `AS-011` ×9, ⚡ `AS-006`, 🗝️ `AS-010` | Mar 25 |
| [mcp-memory-service](https://github.com/doobidoo/mcp-memory-service) | `10.28.3` | 1.6k | **[B](./docs/tools/mcp-memory-service.md)** | 🔑 `AS-002` ×6, ⚡ `AS-011` ×2 | Mar 27 |
| [tavily-mcp](https://github.com/tavily-ai/tavily-mcp) | `0.2.18` | 1.5k | **[C](./docs/tools/tavily-mcp.md)** | 🔑 `AS-002` ×10, ⚡ `AS-011` ×5 | Mar 25 |
| [contextplus](https://github.com/ForLoopCodes/contextplus) | `1.0.8` | 1.5k | **[C](./docs/tools/contextplus.md)** | 🔑 `AS-002` ×19, 🗝️ `AS-010`, ⚡ `AS-011` ×6 | Mar 25 |

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
| 🚨&nbsp;**AS&#8209;008** | `Critical` | **Known Compromised Package** — Offline embedded blacklist of confirmed supply-chain attacks (TeamPCP: litellm 1.82.7/8, trivy v0.69.4-6, langflow <1.9.0). Zero-latency, no network required. |
| 🔤&nbsp;**AS&#8209;009** | `Medium` | **Typosquatting** — Tool name within edit-distance 2 of a well-known MCP tool, suggesting impersonation |
| 🗝️&nbsp;**AS&#8209;010** | `Medium` | **Secret Handling** — Input params accepting API keys/passwords; credentials logged insecurely |
| ⚡&nbsp;**AS&#8209;011** | `Low` | **DoS Resilience** — No rate-limit, timeout, or retry config on network/exec tools |
| 🔄&nbsp;**AS&#8209;012** | `High` | **Rug-Pull** — Tool set changed between scans of the same version without a version bump *(directory pipeline only)* |
| 👥&nbsp;**AS&#8209;013** | `High`/`Medium` | **Tool Shadowing** — Duplicate or near-duplicate tool name hijacks calls intended for a trusted tool |

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
1. **Discovers** popular MCP servers via GitHub Search (top 50 by stars)
2. **Scans** new/updated tools with ToolTrust Scanner + OSV supply-chain analysis
3. **Publishes** updated reports to `data/reports/` and regenerates this README

---

*Licensed [MIT](./LICENSE). Scanner engine: [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner).*
