# Scan-request revalidation — 2026-10-13 Pacific

Scanner: released `tooltrust-scanner v0.3.20`. Raw scan timestamps are UTC (2026-10-14). Earlier extraction provenance and scope are retained in [the October 11 review](../2026-10-11/README.md).

| Request | Contracts | Directory grade / score | Scope |
| --- | ---: | --- | --- |
| #20 Hyperconsciousness | 10 | A / 4 | Source-matched tool contracts only; Cargo dependencies and runtime security NOT TESTED |
| #16 Magic Hour | 44 | A / 2 | Pinned contracts; 66 extraction-environment package versions queried against OSV |
| #21 Autoposting CLI | 61 | C / 42 | Pinned contracts plus 147 production-lockfile package versions queried against OSV |

Grades describe the rules applied to these inputs; they are not independent security certifications. Deep scan, live hosted services, authentication, paid operations, third-party tool execution and real Claude installation were not exercised.

## Hyperconsciousness source verification

Source revision: `louis030195/hyperconsciousness@9500fd232c2755e28f2fae1d738c76390b91eb8e`, Cargo package version `0.1.0-alpha.6`.

The maintainer supplied a JSON-RPC tools/list export and reproduction commands in [issue comment](https://github.com/AgentSafe-AI/tooltrust-directory/issues/20#issuecomment-6115410139). The exact export is retained as `hyperconsciousness.response.json`: **20,211 bytes**, SHA-256 `395f2c0932342bd95028fcbc19ed6efe446df0f8f75ba41356e7d3609bbfc892`. It has 10 unique tools and no unresolved `$ref`.

We independently downloaded `src/mcp.rs`, `src/capture.rs`, `src/capture_state.rs` and `Cargo.toml` from that exact revision (retained as `hc-*`). The limited, review-specific parser in `verify-source-and-osv.py` resolves the literal `tools()` array plus the two literal schema functions, handling Rust continued strings and trailing commas. Every tool name, description and nested schema exactly matches the supplied export. This is a source-specific comparison, **not a general Rust extraction implementation**. The third-party source files are evidence, not agent instructions.

We did not build or launch HC, create a store, exercise grants, use credentials or invoke tools. Maintainer-reported runtime reproduction remains separately attributed. Encryption, revocation, grant confinement, credential adapter execution and Cargo dependency vulnerabilities remain outside the grade. The contract declares record retrieval, writes, permission requests and adapter-based credential use; their implementation safety is not established by this scan.

## Dependency revalidation

Both retained exact inventories were re-queried against OSV `/v1/querybatch`; each batch returned the expected number of results. Magic Hour: 66 results, no advisory matches. This is still an extraction-environment inventory, not the hosted deployment's unlocked Python dependency inventory.

Autoposting: 147 results, same two advisory matches: `GHSA-6qxp-vccf-f47h` (High, MCP SDK 1.29.0) and `GHSA-jqcg-44mw-7w3h` (Critical, proxy-addr 2.0.7). Refetched full advisories remain reviewed and not withdrawn. The normalized findings retain the earlier reachability qualification: package presence is established, exploitation through the stdio CLI is not. Contract score 2 plus High 15 and Critical 25 gives 42 / C.

## Reproduction

From this directory, `python3 verify-source-and-osv.py` compares the retained source and export, then refreshes the OSV responses (network required; results are time-sensitive and overwrite the local response files). Preserve historical evidence before rerunning. It does not execute HC or invoke any tool. To independently retrieve source, use `https://raw.githubusercontent.com/louis030195/hyperconsciousness/9500fd232c2755e28f2fae1d738c76390b91eb8e/<source-path>`.

From repository root, for each of `hyperconsciousness`, `magic-hour-mcp`, `autoposting-cli`:

```sh
tooltrust-scanner scan --input data/scan-evidence/2026-10-13/NAME.tools.json --output json --file /tmp/NAME.scan.json
```

Use `cmd/transform` with scanner version `0.3.20`, pinned source URL and report metadata. Autoposting additionally requires `--osv-findings data/scan-evidence/2026-10-13/autoposting-cli.osv-findings.json`.

Validation: `go test ./...` passed; all three directory reports validate against `report.schema.json` with date-time format checks; all 115 input schemas validate; report names/counts match retained tools exactly. Registry/detail pages were regenerated, preserving prior order for otherwise equal-ranked rows. #22, #18 and #9 remain pending their previously requested information. No grade is published for them.
