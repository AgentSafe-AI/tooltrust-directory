# 🛡️ ToolTrust Directory

**Discover safe, audited MCP servers before your AI agent blindly trusts them.**

A public registry of AI agent tools, continuously scanned for prompt injection, data exfiltration, and privilege escalation by [ToolTrust Scanner](https://github.com/AgentSafe-AI/tooltrust-scanner).

[Insert Directory UI GIF Here]

[![Tools Audited](https://img.shields.io/badge/tools%20audited-37-brightgreen)](./data/reports/)
[![Last Scan](https://img.shields.io/badge/last%20scan-2026--03--20-blue)](./data/reports/)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](./LICENSE)
[![Schema](https://img.shields.io/badge/schema-v1.0-orange)](./report.schema.json)

---

## 📊 Security Registry

<!-- TOOLTRUST:BEGIN -- Do not edit this section manually. -->

*[Full Directory](./docs/full-directory.md) · [data/reports/](./data/reports/) · [docs/tools/](./docs/tools/)*

| Tool | Version | Stars | Grade | Key Findings | Scanned |
|------|---------|:-----:|:-----:|:-------------|:-------:|
| [context7](https://github.com/upstash/context7) | `ctx7@0.3.6` | 49.8k | **[B](./docs/tools/context7.md)** | 🔑 `AS-002`, ⚡ `AS-011` | Mar 20 |
| [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | `chrome-dev…` | 30.4k | **[C](./docs/tools/chrome-devtools-mcp.md)** | 🔑 `AS-002` ×14, ⚡ `AS-006`, ⚡ `AS-011` ×3 | Mar 20 |
| [claude-task-master](https://github.com/eyaltoledano/claude-task-master) | `task-maste…` | 26.0k | **[A](./docs/tools/claude-task-master.md)** | 🔑 `AS-002` | Mar 20 |
| [n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | `2.37.4` | 15.4k | **[C](./docs/tools/n8n-mcp.md)** | 🔑 `AS-002` ×7, ⚡ `AS-011` ×2 | Mar 20 |
| [mcp-server-brave-search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | `0.6.2` | 12.4k | **[A](./docs/tools/mcp-server-brave-search.md)** | 🗝️ `AS-010` | Mar 1 |
| [mcp-server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github) | `2.0.0` | 12.4k | **[B](./docs/tools/mcp-server-github.md)** | 🔓 `AS-005`, ⚡ `AS-011` | Mar 1 |
| [mcp-server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | `1.2.0` | 12.4k | **[B](./docs/tools/mcp-server-filesystem.md)** | 🔑 `AS-002` | Mar 1 |
| [openmetadata](https://github.com/open-metadata/OpenMetadata) | `1.11.13-re…` | 9.0k | **[B](./docs/tools/openmetadata.md)** | 🔑 `AS-002` ×2, ⚡ `AS-011` | Mar 20 |
| [klavis](https://github.com/Klavis-AI/klavis) | `python-v2.…` | 5.7k | **[B](./docs/tools/klavis.md)** | 🔑 `AS-002`, ⚡ `AS-011` | Mar 20 |
| [osaurus](https://github.com/osaurus-ai/osaurus) | `0.14.23` | 4.4k | **[A](./docs/tools/osaurus.md)** | ✅ None | Mar 20 |
| [kubefwd](https://github.com/txn2/kubefwd) | `1.25.12` | 4.1k | **[B](./docs/tools/kubefwd.md)** | 🔑 `AS-002` ×4, ⚡ `AS-011` | Mar 20 |
| [notion-mcp-server](https://github.com/makenotion/notion-mcp-server) | `2.1.0` | 4.1k | **[C](./docs/tools/notion-mcp-server.md)** | 🔑 `AS-002` ×30, ⚡ `AS-011` ×22 | Mar 20 |
| [mcp-server-chart](https://github.com/antvis/mcp-server-chart) | `0.9.10` | 3.8k | **[B](./docs/tools/mcp-server-chart.md)** | 🔑 `AS-002`, ⚡ `AS-011` | Mar 20 |
| [fast-agent](https://github.com/evalstate/fast-agent) | `0.6.1` | 3.7k | **[A](./docs/tools/fast-agent.md)** | ✅ None | Mar 20 |
| [archestra](https://github.com/archestra-ai/archestra) | `platform-v…` | 3.5k | **[A](./docs/tools/archestra.md)** | ✅ None | Mar 20 |
| [shadcn-ui-mcp-server](https://github.com/Jpisnice/shadcn-ui-mcp-server) | `2.0.0` | 2.7k | **[A](./docs/tools/shadcn-ui-mcp-server.md)** | 🔑 `AS-002` | Mar 20 |
| [mcp-server-kubernetes](https://github.com/Flux159/mcp-server-kubernetes) | `3.3.0` | 1.4k | **[B](./docs/tools/mcp-server-kubernetes.md)** | 🔑 `AS-002` ×6, ⚡ `AS-011` ×3 | Mar 20 |
| [linkedin-mcp-server](https://github.com/stickerdaniel/linkedin-mcp-server) | `4.4.1` | 1.1k | **[B](./docs/tools/linkedin-mcp-server.md)** | 🔑 `AS-002` ×3, ⚡ `AS-011` ×2 | Mar 20 |
| [drawio-mcp-server](https://github.com/lgazo/drawio-mcp-server) | `1.8.0` | 1.1k | **[A](./docs/tools/drawio-mcp-server.md)** | 🔑 `AS-002` ×2 | Mar 20 |
| [mongodb-mcp-server](https://github.com/mongodb-js/mongodb-mcp-server) | `1.8.1` | 966 | **[C](./docs/tools/mongodb-mcp-server.md)** | 🔑 `AS-002` ×31, ⚡ `AS-011` ×3 | Mar 20 |
| [apify-mcp-server](https://github.com/apify/apify-mcp-server) | `0.9.11` | 925 | **[D](./docs/tools/apify-mcp-server.md)** | 🔑 `AS-002` ×27, ⚡ `AS-011` ×7, ⚡ `AS-006` ×2 | Mar 20 |
| [openapi-mcp-server](https://github.com/janwilmake/openapi-mcp-server) | `1.2.0-beta04` | 888 | **[C](./docs/tools/openapi-mcp-server.md)** | 🔑 `AS-002` ×8, ⚡ `AS-011` ×2 | Mar 20 |
| [kubectl-mcp-server](https://github.com/rohitg00/kubectl-mcp-server) | `1.24.0` | 853 | **[C](./docs/tools/kubectl-mcp-server.md)** | 🔑 `AS-002` ×94, ⚡ `AS-011` ×54, 🗝️ `AS-010` ×2 | Mar 20 |
| [ms-365-mcp-server](https://github.com/Softeria/ms-365-mcp-server) | `0.45.2` | 543 | **[C](./docs/tools/ms-365-mcp-server.md)** | 🔑 `AS-002` ×157, ⚡ `AS-011` ×72 | Mar 20 |
| [line-bot-mcp-server](https://github.com/line/line-bot-mcp-server) | `0.4.2` | 530 | **[A](./docs/tools/line-bot-mcp-server.md)** | 🔑 `AS-002` ×4 | Mar 20 |
| [minecraft-mcp-server](https://github.com/yuniko-software/minecraft-mcp-server) | `2.0.4` | 515 | **[A](./docs/tools/minecraft-mcp-server.md)** | 🔑 `AS-002` ×4, ⚡ `AS-011` ×2 | Mar 20 |
| [mcp-server-motherduck](https://github.com/motherduckdb/mcp-server-motherduck) | `1.0.3` | 444 | **[C](./docs/tools/mcp-server-motherduck.md)** | 🔑 `AS-002` ×7, ⚡ `AS-011` | Mar 20 |
| [airtable-mcp-server](https://github.com/domdomegg/airtable-mcp-server) | `1.13.0` | 428 | **[B](./docs/tools/airtable-mcp-server.md)** | 🔑 `AS-002` ×8, ⚡ `AS-011` | Mar 20 |
| [puppeteer-mcp-server](https://github.com/merajmehrabi/puppeteer-mcp-server) | `0.7.2` | 417 | **[C](./docs/tools/puppeteer-mcp-server.md)** | 🔑 `AS-002` ×3, ⚡ `AS-011` ×3, ⚡ `AS-006` | Mar 20 |
| [evm-mcp-server](https://github.com/mcpdotdirect/evm-mcp-server) | `2.0.4` | 370 | **[C](./docs/tools/evm-mcp-server.md)** | 🔑 `AS-002` ×13, ⚡ `AS-011` ×9, 🗝️ `AS-010` ×6 | Mar 20 |
| [vscode-mcp-server](https://github.com/juehang/vscode-mcp-server) | `0.4.0` | 340 | **[C](./docs/tools/vscode-mcp-server.md)** | 🔑 `AS-002` ×11, ⚡ `AS-011` ×2 | Mar 20 |
| [codex-mcp-server](https://github.com/tuannvm/codex-mcp-server) | `1.4.2` | 329 | **[D](./docs/tools/codex-mcp-server.md)** | 🔑 `AS-002` ×5, ⚡ `AS-006`, ⚡ `AS-011` ×2 | Mar 20 |
| [mcp-server](https://github.com/mapbox/mcp-server) | `0.9.0` | 317 | **[C](./docs/tools/mcp-server.md)** | 🔑 `AS-002` ×15, ⚡ `AS-011` ×6 | Mar 20 |
| [mcp-documentation-server](https://github.com/andrea9293/mcp-documentation-server) | `1.13.0` | 294 | **[C](./docs/tools/mcp-documentation-server.md)** | 🔑 `AS-002` ×8, ⚡ `AS-011` ×3 | Mar 20 |
| [mcp-server-commands](https://github.com/g0t4/mcp-server-commands) | `0.7.4` | 225 | **[B](./docs/tools/mcp-server-commands.md)** | 📦 `AS-004` ×2 | Mar 2 |
| [signoz-mcp-server](https://github.com/SigNoz/signoz-mcp-server) | `0.0.5` | 74 | **[C](./docs/tools/signoz-mcp-server.md)** | 🔑 `AS-002` ×12, ⚡ `AS-011` ×5 | Mar 20 |
| [clay-mcp](https://github.com/clay-inc/clay-mcp) | `1.0.5` | 30 | **[B](./docs/tools/clay-mcp.md)** | 🔑 `AS-002` ×17, ⚡ `AS-011` ×6 | Mar 20 |

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

| ID | Detects |
|----|---------|
| 🛡️&nbsp;**AS&#8209;001** | **Tool Poisoning** (`Critical`) — Adversarial prompts hidden in tool descriptions (`ignore previous instructions`, `<INST>`) |
| 🔑&nbsp;**AS&#8209;002** | **Permission Surface** (`High`/`Low`) — `exec`, `network`, `db`, `fs` beyond stated purpose; over-broad input schema |
| 📐&nbsp;**AS&#8209;003** | **Scope Mismatch** (`High`) — Tool name contradicts its permissions (e.g. `read_config` with `exec`) |
| 📦&nbsp;**AS&#8209;004** | **Supply Chain CVEs** (`High`/`Critical`) — Known CVEs in bundled dependencies via [OSV](https://osv.dev) |
| 🔓&nbsp;**AS&#8209;005** | **Privilege Escalation** (`High`) — `admin`/`:write` OAuth scopes; `sudo`/`impersonate` in descriptions |
| ⚡&nbsp;**AS&#8209;006** | **Arbitrary Code Execution** (`Critical`) — `evaluate_script`, `_evaluate` suffix, `execute javascript`, `page.evaluate()` patterns |
| ℹ️&nbsp;**AS&#8209;007** | **Insufficient Tool Data** (`Info`) — Tool lacks a valid description or schema, preventing agents from understanding its capabilities or limitations |
| 🗝️&nbsp;**AS&#8209;010** | **Secret Handling** (`Medium`) — Input params accepting API keys/passwords; credentials logged insecurely |
| ⚡&nbsp;**AS&#8209;011** | **DoS Resilience** (`Low`) — No rate-limit, timeout, or retry config on network/exec tools |

Full details → [docs/methodology.md](./docs/methodology.md)

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
