# ToolTrust BigQuery history pipeline

The dataset `gws-cli-1785715774.tooltrust_analytics` is in the US region and
contains compact, date-partitioned repository health aggregates.

## Tables

- `repository_snapshots`: current GitHub metadata snapshots.
- `repository_registry`: enabled canonical GitHub repositories to collect.
- `star_history_daily`: daily observed GitHub `WatchEvent` star additions.
- `pull_request_history_weekly`: weekly PR opened/merged/closed activity.
- `collection_runs`: collector run provenance and failures.

Refresh the enabled GitHub repository scope with
`./infra/bigquery/seed-repository-registry.sh`. It deduplicates repository
URLs from the committed reports, merges them by canonical `owner/repo`, and
removes its temporary staging table.

## Daily scheduled query

`queries/daily-history.sql` dynamically selects yesterday's concrete GitHub
Archive table and MERGEs the aggregates, so it does not expand
`githubarchive.day.*` views or duplicate rows on retry. It reads enabled repos
from `repository_registry`, allowing the collector scope to grow without
changing the scheduled query.

Creating a scheduled query with `bq mk --transfer_config` may ask for a
one-time BigQuery Data Transfer OAuth consent. Complete the URL shown by the
CLI in an authenticated browser, then rerun the command from the terminal.

Before production use, attach a service account to the transfer configuration
and grant it only BigQuery Job User plus write access to this dataset.
