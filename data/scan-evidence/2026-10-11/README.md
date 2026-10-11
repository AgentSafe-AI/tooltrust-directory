# Scan-request review — 2026-10-11

Scanner: ToolTrust Scanner **v0.3.19**, source commit `23ea7a54ec0db8d749a3a9f8b32ff0cd0424606d`.
Standard deterministic scanning was used; optional ONNX deep scanning was **not** enabled.
Reports were transformed with directory commit `08d37220c`.
This is a tool-contract and dependency-inventory review, not a runtime security audit.

## #16 — Magic Hour MCP

- Source: `magichourhq/magic-hour-mcp@958836e73d0fe0ba090f162654e2c922ad14292e`.
- All **44 tools** enumerated from `mcp_magichour.openapi_server.mcp.list_tools()` in an isolated Python 3.12 environment, with inherited environment removed and socket connections blocked. No tool was invoked, no API credential was supplied, and the hosted service was not contacted.
- Used `fastmcp==3.4.0`; all 66 resolved extraction-environment distributions and their exact versions are retained in `magic-hour-mcp.osv-request.json`. These are not a vendor deployment lockfile.
- Tool objects serialized through `to_mcp_tool().model_dump(mode="json", by_alias=True, exclude_none=True)` preserve descriptions, schemas and annotations from the actual provider.
- Contract result: **A / 2**, 37 Low AS-011 observations and 88 informational findings. Directory scoring uses the worst individual tool score, not the sum across every tool.
- The pinned implementation declares `API_TIMEOUT`, `API_LIMITS` and `API_RETRIES`. AS-011 is a declaration-level observation, not proof the implementation lacks timeouts.
- OSV returned no matches for the **66 resolved extraction-environment versions**. The source Python requirements are ranges and there is no Python lockfile; hosted dependency versions, other permitted resolutions and the separate web frontend are outside this check. The report retains limited-dependency-visibility findings.
- `upload_file_to_presigned_url` reads a caller-selected local path and sends it to a caller-selected URL. Media fetch helpers also accept URLs. These are relevant filesystem/network capabilities; a contract grade is not a validation of path confinement, URL restrictions, credential handling or authentication.
- No source LICENSE file was present at the pinned revision; no SPDX license was inferred.

## #21 — Autoposting CLI

- Source: `Autoposting-ai/autoposting-cli@da104175c6545d521f33d4e06847674daa364458`, CLI **0.4.0**.
- All **61 tools** copied directly from `packages/cli/src/mcp/tools.ts`'s `ALL_TOOLS` using Node 22.12 type stripping. Only this constant-definition module was imported. No dependencies installed, server started, credentials supplied or tool calls made.
- Checked **147 unique non-dev, non-link npm package/version pairs** from the pinned root `package-lock.json`, including transitive production dependencies. This inventory is source-lockfile based, not a claim about an independently installed npm tarball.
- Contract-only score: A / 2. After adding the two OSV advisory matches using their reviewed database severities: **C / 42** (2 + 15 High + 25 Critical).
- `@modelcontextprotocol/sdk@1.29.0`: **GHSA-6qxp-vccf-f47h**, High; patched in 1.31.0. The affected behavior concerns an OAuth client accepting an MCP-server-selected authorization server.
- `proxy-addr@2.0.7`: **GHSA-jqcg-44mw-7w3h**, Critical per OSV's reviewed severity; patched in 2.0.8. Affected behavior concerns IPv4-mapped IPv6 proxy trust.
- Package presence is verified. Exploitability in this CLI's stdio server is **not established**; the affected OAuth-client / HTTP trust-proxy paths are not the same as its demonstrated stdio entry point. No proprietary backend or hosted OAuth endpoint audit is claimed.
- OSV requests, full batch responses, detailed advisories and the normalized AS-004 findings are retained here. The contract findings retain AS-014 because tool metadata itself does not expose dependency inventory; the lockfile check is a separate evidence source.

## #22 — BlindOracle (awaiting source/deployment mapping)

- Requested source: `craigmbrown/blindoracle-mcp@08e228a725fae67ef35cd0426d3fc35e6d8bf15d`.
- Sent only an unauthenticated, free JSON-RPC `tools/list` request to `https://api.craigmbrown.com/v2/`. No paid operation or payment was attempted.
- Endpoint returned **39 tools**. The pinned `main.py` contains **26** `@mcp.tool()` registrations, including three conditional marketplace mirrors (`run_tests`, `git_status`, `list_target`).
- **No tool names overlap.** The live endpoint cannot currently be attributed to the requested source commit. `blindoracle-mcp.source-comparison.json` records both sets.
- Independent live contract scan retained as evidence only. No directory report or pinned-source grade is published for this request until the implementation/deployment mapping is clarified. Live dependency inventory and payment/backend behavior remain unverified.

## Remaining triage

- **#20 Hyperconsciousness:** pinned `src/mcp.rs` has 10 names in `tools()`. `remember` and `remember_many` call `crate::capture::Context::schema()` and `hyperconsciousness::capture_state::Change::schema()`. Request a complete `tools/list` export from that exact commit with a synthetic store, plus reproducible setup. Do not replace these nested schemas with empty objects or infer a clean result from unsupported Rust discovery. No grade assigned.
- **#18 YYLO:** the requested revision contains CLI code and agent skills/templates. Review requires a separately defined CLI/skill scope; a fabricated MCP manifest would not represent its process, filesystem and git operations. No grade assigned. Request confirmation of the intended shipped CLI/skill surface and release commit.
- **#9 BuyWhere:** request a fixed release/commit, credential requirements and a documented MCP entry point. No grade assigned.

## Reproduction and validation

Scan the retained contract snapshots (no external server required):

```sh
tooltrust-scanner scan --input data/scan-evidence/2026-10-11/magic-hour-mcp.tools.json --output json --file /tmp/magic-hour.scan.json
tooltrust-scanner scan --input data/scan-evidence/2026-10-11/autoposting-cli.tools.json --output json --file /tmp/autoposting.scan.json
tooltrust-scanner scan --input data/scan-evidence/2026-10-11/blindoracle-mcp.live-tools.json --output json --file /tmp/blindoracle.scan.json
```

Use `cmd/transform` for directory reports; Autoposting additionally requires `--osv-findings data/scan-evidence/2026-10-11/autoposting-cli.osv-findings.json`. Source URLs in the reports include the exact commits. Do not substitute main/HEAD, or attach this historical manifest to a later release via an unversioned static override.

OSV requests use `/v1/querybatch` in batches of at most 100 entries; full advisory records use `/v1/vulns/<ID>`. Responses are time-specific; later rescans can change.

Both reports use the existing `Scan Request` category so explicit nominations remain visible under the directory's GitHub popularity filter (observed stars: Magic Hour 8, Autoposting 0). This does not change the filter. The current Magic Hour repository metadata advertises Apache-2.0, but that was not retroactively attributed to the older pinned revision.

Validation: both reports pass `report.schema.json` with date-time format checks; all 105 input schemas validate; tool names/counts match snapshots exactly. `go test ./...` passes. Registry pages were generated with `pkg/sync.UpdateRegistry`; pre-existing equal-popularity row ordering was preserved to avoid unrelated churn.
