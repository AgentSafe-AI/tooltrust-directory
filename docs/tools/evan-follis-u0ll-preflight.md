# 🟢 evan-follis-u0ll-preflight

> Check if your MCP server is ready to publish on the MCP Registry, Smithery, or npm.

Preflight validates your server's actual artifacts — `server.json`, `package.json`, `smithery.yaml` — against the documented requirements of each directory. Every finding includes the evidence found, the directory rule it maps to, and the exact fix.

## What it checks

- **MCP Registry** — server.json schema, name format, packages/remotes config, transport type, npm mcpName ownership, PyPI README marker
- **Smithery** — Streamable HTTP transport, public HTTPS endpoint, server-card presence
- **npm** — name, version, entry point (bin/main)

Each finding is tagged with evidence level (`verified_from_artifact` or `inferred`), rule type (`hard_requirement`, `directory_convention`, or `heuristic`), and a source URL linking to the directory documentation.

## How to use

Call `check_publish_readiness` with raw artifact contents (all fields optional):

- `manifest` — your server.json
- `package_json` — your package.json
- `smithery_yaml` — your smithery.yaml
- `pyproject_toml` — your pyproject.toml
- `readme` — your README
- `target_directories` — optional array of `mcp_registry`, `smithery`, `npm`

Returns a verdict (`checks_pass`, `fixable`, or `not_ready`), per-directory readiness, and evidence-backed findings with concrete fixes.

Zero dependencies. No LLM calls. No authentication. No PII collection.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [evan-follis-u0ll-preflight](https://smithery.ai/server/evan-follis-u0ll/preflight) |
| **Scan Date** | 2026-05-30 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/evan-follis-u0ll-preflight.json)*
