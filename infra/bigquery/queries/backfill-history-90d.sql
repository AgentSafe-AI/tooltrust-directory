-- Idempotent historical backfill for the previous 90 complete UTC dates.
--
-- GitHub Archive exposes githubarchive.day.yesterday as a view. This script
-- therefore builds concrete YYYYMMDD table names and executes one MERGE per
-- date instead of using githubarchive.day.*.
--
-- Missing WatchEvent/PullRequestEvent rows mean "no observation". They are
-- intentionally not materialized as zeroes.

DECLARE source_day DATE DEFAULT DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY);
DECLARE end_day DATE DEFAULT DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY);
DECLARE source_table STRING;

WHILE source_day <= end_day DO
  SET source_table = FORMAT(
    '`githubarchive.day.%s`',
    FORMAT_DATE('%Y%m%d', source_day)
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
        AND repo.name IN (
          SELECT repo
          FROM `gws-cli-1785715774.tooltrust_analytics.repository_registry`
          WHERE enabled
        )
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
        AND repo.name IN (
          SELECT repo
          FROM `gws-cli-1785715774.tooltrust_analytics.repository_registry`
          WHERE enabled
        )
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

  SET source_day = DATE_ADD(source_day, INTERVAL 1 DAY);
END WHILE;
