-- Daily scheduled query. It dynamically selects yesterday's concrete table so
-- BigQuery never expands the githubarchive.day.* views or scans the archive.
DECLARE source_table STRING;
SET source_table = FORMAT(
  '`githubarchive.day.%s`',
  FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
);

EXECUTE IMMEDIATE FORMAT("""
  MERGE `gws-cli-1785715774.tooltrust_analytics.star_history_daily` AS target
  USING (
    SELECT
      repo.name AS repo,
      DATE(created_at) AS day,
      COUNT(*) AS stars_added
    FROM %s
    WHERE type = 'WatchEvent'
      AND repo.name = 'modelcontextprotocol/typescript-sdk'
    GROUP BY repo, day
  ) AS source
  ON target.repo = source.repo
    AND target.day = source.day
    AND target.source = 'githubarchive_bq'
  WHEN MATCHED THEN UPDATE SET
    stars_added = source.stars_added,
    fetched_at = CURRENT_TIMESTAMP(),
    data_quality = 'observed_watch_events'
  WHEN NOT MATCHED THEN INSERT
    (repo, day, stars_added, source, fetched_at, data_quality)
  VALUES
    (source.repo, source.day, source.stars_added, 'githubarchive_bq',
     CURRENT_TIMESTAMP(), 'observed_watch_events')
""", source_table);

EXECUTE IMMEDIATE FORMAT("""
  MERGE `gws-cli-1785715774.tooltrust_analytics.pull_request_history_weekly` AS target
  USING (
    SELECT
      repo.name AS repo,
      DATE_TRUNC(DATE(created_at), WEEK(MONDAY)) AS week,
      COUNTIF(JSON_VALUE(payload, '$.action') = 'opened') AS prs_opened,
      COUNTIF(JSON_VALUE(payload, '$.action') = 'closed'
        AND JSON_VALUE(payload, '$.pull_request.merged') = 'true') AS prs_merged,
      COUNTIF(JSON_VALUE(payload, '$.action') = 'closed') AS prs_closed,
      COUNT(DISTINCT actor.login) AS active_contributors
    FROM %s
    WHERE type = 'PullRequestEvent'
      AND repo.name = 'modelcontextprotocol/typescript-sdk'
    GROUP BY repo, week
  ) AS source
  ON target.repo = source.repo
    AND target.week = source.week
    AND target.source = 'githubarchive_bq'
  WHEN MATCHED THEN UPDATE SET
    prs_opened = source.prs_opened,
    prs_merged = source.prs_merged,
    prs_closed = source.prs_closed,
    active_contributors = source.active_contributors,
    fetched_at = CURRENT_TIMESTAMP(),
    data_quality = 'observed_pull_request_events'
  WHEN NOT MATCHED THEN INSERT
    (repo, week, prs_opened, prs_merged, prs_closed, active_contributors,
     source, fetched_at, data_quality)
  VALUES
    (source.repo, source.week, source.prs_opened, source.prs_merged,
     source.prs_closed, source.active_contributors, 'githubarchive_bq',
     CURRENT_TIMESTAMP(), 'observed_pull_request_events')
""", source_table);
