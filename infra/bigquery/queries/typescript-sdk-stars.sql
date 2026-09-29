SELECT
  DATE(created_at) AS day,
  COUNT(*) AS stars_added
FROM `githubarchive.day.202609*`
WHERE _TABLE_SUFFIX BETWEEN '01' AND '28'
  AND type = 'WatchEvent'
  AND repo.name = 'modelcontextprotocol/typescript-sdk'
GROUP BY day
ORDER BY day;
