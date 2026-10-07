#!/usr/bin/env bash
set -euo pipefail

# Export compact BigQuery history rows into the static artifacts consumed by the
# directory UI. This keeps the web build independent from BigQuery at runtime.
PROJECT_ID="${BQ_PROJECT_ID:-gws-cli-1785715774}"
DATASET="${BQ_DATASET:-tooltrust_analytics}"
OUTPUT_DIR="${METRICS_OUTPUT_DIR:-data/repository-metrics}"
EXPORTED_AT="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

mkdir -p "$OUTPUT_DIR"

REGISTRY_FILE=$(mktemp)
STARS_FILE=$(mktemp)
PRS_FILE=$(mktemp)
trap 'rm -f "$REGISTRY_FILE" "$STARS_FILE" "$PRS_FILE"' EXIT

# --quiet keeps gcloud/bq notices out of stdout. The files are consumed by jq
# and must contain JSON only, especially when this runs in GitHub Actions.
bq query --quiet --project_id="$PROJECT_ID" --max_rows=100000 --use_legacy_sql=false --format=json \
  "SELECT repo, tool_id FROM \`${PROJECT_ID}.${DATASET}.repository_registry\` WHERE enabled ORDER BY tool_id" \
  | sed '/^WARNING:/d' > "$REGISTRY_FILE"
jq -e 'type == "array"' "$REGISTRY_FILE" >/dev/null || { echo "BigQuery registry query did not return JSON:" >&2; head -c 2000 "$REGISTRY_FILE" >&2; exit 1; }
bq query --quiet --project_id="$PROJECT_ID" --max_rows=100000 --use_legacy_sql=false --format=json \
  "SELECT repo, CAST(day AS STRING) AS day, stars_added, fetched_at FROM \`${PROJECT_ID}.${DATASET}.star_history_daily\` ORDER BY repo, day" \
  | sed '/^WARNING:/d' > "$STARS_FILE"
jq -e 'type == "array"' "$STARS_FILE" >/dev/null || { echo "BigQuery stars query did not return JSON:" >&2; head -c 2000 "$STARS_FILE" >&2; exit 1; }
bq query --quiet --project_id="$PROJECT_ID" --max_rows=100000 --use_legacy_sql=false --format=json \
  "SELECT repo, CAST(week AS STRING) AS week, prs_opened, prs_merged, prs_closed, active_contributors, fetched_at FROM \`${PROJECT_ID}.${DATASET}.pull_request_history_weekly\` ORDER BY repo, week" \
  | sed '/^WARNING:/d' > "$PRS_FILE"
jq -e 'type == "array"' "$PRS_FILE" >/dev/null || { echo "BigQuery pull request query did not return JSON:" >&2; head -c 2000 "$PRS_FILE" >&2; exit 1; }


jq -c '.[]' "$REGISTRY_FILE" | while IFS= read -r registry_row; do
  tool_id=$(jq -r '.tool_id // empty' <<<"$registry_row")
  [ -n "$tool_id" ] || continue
  repo=$(jq -r '.repo' <<<"$registry_row")
  stars_daily=$(jq -c --arg repo "$repo" '[.[] | select(.repo == $repo) | {day, stars_added: (.stars_added | tonumber)}]' "$STARS_FILE")
  pull_requests_weekly=$(jq -c --arg repo "$repo" '[.[] | select(.repo == $repo) | {week, prs_opened: (.prs_opened | tonumber), prs_merged: (.prs_merged | tonumber), prs_closed: (.prs_closed | tonumber), active_contributors: ((.active_contributors // "0") | tonumber)}]' "$PRS_FILE")
  if [ "$(jq 'length' <<<"$stars_daily")" -eq 0 ] && [ "$(jq 'length' <<<"$pull_requests_weekly")" -eq 0 ]; then
    continue
  fi
  stars_fetched_at=$(jq -r --arg repo "$repo" '[.[] | select(.repo == $repo) | .fetched_at] | max // ""' "$STARS_FILE")
  prs_fetched_at=$(jq -r --arg repo "$repo" '[.[] | select(.repo == $repo) | .fetched_at] | max // ""' "$PRS_FILE")
  fetched_at="$stars_fetched_at"
  if [[ "$prs_fetched_at" > "$fetched_at" ]]; then fetched_at="$prs_fetched_at"; fi
  jq -n \
    --arg tool_id "$tool_id" \
    --arg repo "$repo" \
    --arg source "githubarchive_bq" \
    --arg fetched_at "$fetched_at" \
    --arg exported_at "$EXPORTED_AT" \
    --arg data_quality "observed_events" \
    --argjson stars_daily "$stars_daily" \
    --argjson pull_requests_weekly "$pull_requests_weekly" \
    '{tool_id: $tool_id, repo: $repo, source: $source, fetched_at: $fetched_at,
      exported_at: $exported_at,
      data_quality: $data_quality, stars_daily: $stars_daily,
      pull_requests_weekly: $pull_requests_weekly}' \
    > "$OUTPUT_DIR/${tool_id}.json"
  echo "exported $tool_id"
done
