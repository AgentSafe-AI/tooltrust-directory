INSERT INTO `gws-cli-1785715774.tooltrust_analytics.star_history_daily`
  (repo, day, stars_added, source, fetched_at, data_quality)
SELECT
  repo.name,
  DATE(created_at),
  COUNT(*),
  'githubarchive_bq',
  CURRENT_TIMESTAMP(),
  'observed_watch_events'
FROM `githubarchive.day.202609*`
WHERE _TABLE_SUFFIX BETWEEN '01' AND '28'
  AND type = 'WatchEvent'
  AND repo.name = 'modelcontextprotocol/typescript-sdk'
GROUP BY repo.name, DATE(created_at);

INSERT INTO `gws-cli-1785715774.tooltrust_analytics.pull_request_history_weekly`
  (repo, week, prs_opened, prs_merged, prs_closed, active_contributors, source, fetched_at, data_quality)
SELECT
  repo.name,
  DATE_TRUNC(DATE(created_at), WEEK(MONDAY)),
  COUNTIF(JSON_VALUE(payload, '$.action') = 'opened'),
  COUNTIF(JSON_VALUE(payload, '$.action') = 'closed'
    AND JSON_VALUE(payload, '$.pull_request.merged') = 'true'),
  COUNTIF(JSON_VALUE(payload, '$.action') = 'closed'),
  COUNT(DISTINCT actor.login),
  'githubarchive_bq',
  CURRENT_TIMESTAMP(),
  'observed_pull_request_events'
FROM `githubarchive.day.202609*`
WHERE _TABLE_SUFFIX BETWEEN '01' AND '28'
  AND type = 'PullRequestEvent'
  AND repo.name = 'modelcontextprotocol/typescript-sdk'
GROUP BY repo.name, DATE_TRUNC(DATE(created_at), WEEK(MONDAY));
