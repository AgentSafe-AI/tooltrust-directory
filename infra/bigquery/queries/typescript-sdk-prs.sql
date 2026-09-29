SELECT
  DATE_TRUNC(DATE(created_at), WEEK(MONDAY)) AS week,
  COUNTIF(JSON_VALUE(payload, '$.action') = 'opened') AS prs_opened,
  COUNTIF(JSON_VALUE(payload, '$.action') = 'closed'
    AND JSON_VALUE(payload, '$.pull_request.merged') = 'true') AS prs_merged,
  COUNTIF(JSON_VALUE(payload, '$.action') = 'closed') AS prs_closed,
  COUNT(DISTINCT actor.login) AS active_contributors
FROM `githubarchive.day.202609*`
WHERE _TABLE_SUFFIX BETWEEN '01' AND '28'
  AND type = 'PullRequestEvent'
  AND repo.name = 'modelcontextprotocol/typescript-sdk'
GROUP BY week
ORDER BY week;
