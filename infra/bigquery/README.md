# ToolTrust BigQuery history pipeline

The dataset `gws-cli-1785715774.tooltrust_analytics` is in the US region and
contains compact, date-partitioned repository health aggregates.

## Tables

- `repository_snapshots`: current GitHub metadata snapshots.
- `star_history_daily`: daily observed GitHub `WatchEvent` star additions.
- `pull_request_history_weekly`: weekly PR opened/merged/closed activity.
- `collection_runs`: collector run provenance and failures.

## Daily scheduled query

`queries/daily-history.sql` dynamically selects yesterday's concrete GitHub
Archive table and MERGEs the aggregates, so it does not expand
`githubarchive.day.*` views or duplicate rows on retry. The current POC query
targets `modelcontextprotocol/typescript-sdk`; replace that predicate with a
repository registry when the multi-repository collector is enabled.

Creating a scheduled query with `bq mk --transfer_config` may ask for a
one-time BigQuery Data Transfer OAuth consent. Complete the URL shown by the
CLI in an authenticated browser, then rerun the command from the terminal.

Before production use, attach a service account to the transfer configuration
and grant it only BigQuery Job User plus write access to this dataset.
