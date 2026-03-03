---
name: Scan Request
about: Request a security audit for an MCP server or AI Skill
title: "[SCAN] <tool-name> v<version>"
labels: scan-request
assignees: ''
---

## Tool Information

**Tool Name:**
<!-- e.g. mcp-server-postgresql -->

**Repository / Source URL:**
<!-- The canonical source URL. Must be publicly accessible. -->
<!-- e.g. https://github.com/example/mcp-server-postgresql -->

**Version to Scan:**
<!-- Specific semver tag or commit SHA. Avoid "latest" — pin the exact version. -->
<!-- e.g. 1.4.2 or abc1234 -->

**Registry / Package Manager URL (optional):**
<!-- e.g. https://www.npmjs.com/package/@example/mcp-server-postgresql -->

---

## Classification

**Tool Type:**
- [ ] MCP Server
- [ ] AI Skill / Codex Skill
- [ ] Other (describe below)

**Primary Capability:**
<!-- One-line description of what this tool does. -->
<!-- e.g. Provides read/write access to a PostgreSQL database -->

**Requires Credentials / Secrets?**
- [ ] Yes (describe below)
- [ ] No

<!-- If yes, describe what secrets are required (e.g. DB_PASSWORD, GITHUB_TOKEN): -->

---

## Context & Priority

**Why should this tool be audited?**
<!-- Explain the use case and why trust is important for this tool. -->

**Estimated user base / adoption:**
<!-- e.g. 500 GitHub stars, used in X popular project -->

**Urgency:**
- [ ] Standard (audited in the next batch)
- [ ] Urgent (used in production by many agents)

---

## Submitter Checklist

- [ ] The source URL points to a **public** repository.
- [ ] I have pinned a specific **version or commit** (not `main`/`latest`).
- [ ] This tool is **not already listed** in the [Security Registry](../../README.md#-security-registry).
- [ ] I understand that AgentSentry performs **static analysis only** (v1.0).

---

> Reports are published to `data/reports/<tool-id>.json` and appear in the README once the scan is complete.
> See [docs/methodology.md](../../docs/methodology.md) for scoring details.
