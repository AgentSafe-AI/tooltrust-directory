-- ToolTrust repository health analytics schema.
-- Dataset location: US. Keep raw event queries date-partitioned and materialize
-- only compact daily/weekly aggregates here.

CREATE TABLE IF NOT EXISTS `gws-cli-1785715774.tooltrust_analytics.repository_registry` (
  repo STRING NOT NULL,
  enabled BOOL NOT NULL,
  source STRING,
  tool_id STRING,
  updated_at TIMESTAMP NOT NULL
)
CLUSTER BY repo;

CREATE TABLE IF NOT EXISTS `gws-cli-1785715774.tooltrust_analytics.repository_snapshots` (
  repo STRING NOT NULL,
  snapshot_date DATE NOT NULL,
  stars INT64,
  forks INT64,
  contributors INT64,
  last_commit_at TIMESTAMP,
  latest_release_version STRING,
  latest_release_tag STRING,
  latest_release_name STRING,
  latest_release_at TIMESTAMP,
  source STRING NOT NULL,
  fetched_at TIMESTAMP NOT NULL,
  data_quality STRING
)
PARTITION BY snapshot_date
CLUSTER BY repo;

CREATE TABLE IF NOT EXISTS `gws-cli-1785715774.tooltrust_analytics.star_history_daily` (
  repo STRING NOT NULL,
  day DATE NOT NULL,
  stars_added INT64 NOT NULL,
  source STRING NOT NULL,
  fetched_at TIMESTAMP NOT NULL,
  data_quality STRING
)
PARTITION BY day
CLUSTER BY repo;

CREATE TABLE IF NOT EXISTS `gws-cli-1785715774.tooltrust_analytics.pull_request_history_weekly` (
  repo STRING NOT NULL,
  week DATE NOT NULL,
  prs_opened INT64 NOT NULL,
  prs_merged INT64 NOT NULL,
  prs_closed INT64 NOT NULL,
  active_contributors INT64,
  source STRING NOT NULL,
  fetched_at TIMESTAMP NOT NULL,
  data_quality STRING
)
PARTITION BY week
CLUSTER BY repo;

CREATE TABLE IF NOT EXISTS `gws-cli-1785715774.tooltrust_analytics.collection_runs` (
  run_id STRING NOT NULL,
  source STRING NOT NULL,
  started_at TIMESTAMP NOT NULL,
  finished_at TIMESTAMP,
  rows_collected INT64,
  error_count INT64,
  status STRING NOT NULL,
  error_message STRING
)
PARTITION BY DATE(started_at)
CLUSTER BY source, status;
