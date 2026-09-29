#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="${TOOLTRUST_BQ_PROJECT_ID:-gws-cli-1785715774}"
DATASET="${TOOLTRUST_BQ_DATASET:-tooltrust_analytics}"
REPORTS_DIR="${REPORTS_DIR:-data/reports}"
STAGING_TABLE="${PROJECT_ID}:${DATASET}.repository_registry_seed"
REGISTRY_TABLE="\`${PROJECT_ID}.${DATASET}.repository_registry\`"
STAGING_SQL="\`${PROJECT_ID}.${DATASET}.repository_registry_seed\`"
TEMP_DIR="$(mktemp -d -t tooltrust-registry)"
trap 'rm -rf "$TEMP_DIR"' EXIT

jq -c -s '
  map(select(.source_url? | test("github.com/")))
  | map((.source_url | capture("github\\.com/(?<owner>[^/]+)/(?<repo>[^/#?]+)")) as $r
    | {repo: ($r.owner + "/" + ($r.repo | rtrimstr(".git"))),
       enabled: true, source: "directory_report", tool_id: .tool_id,
       updated_at: (now | strftime("%Y-%m-%dT%H:%M:%SZ"))})
  | sort_by(.repo)
  | unique_by(.repo)
  | .[]
' "$REPORTS_DIR"/*.json > "$TEMP_DIR/registry.jsonl"

bq --project_id="$PROJECT_ID" load --replace \
  --source_format=NEWLINE_DELIMITED_JSON \
  --schema='repo:STRING,enabled:BOOL,source:STRING,tool_id:STRING,updated_at:TIMESTAMP' \
  "$STAGING_TABLE" "$TEMP_DIR/registry.jsonl"

bq --project_id="$PROJECT_ID" query --use_legacy_sql=false "
MERGE ${REGISTRY_TABLE} AS target
USING ${STAGING_SQL} AS source
ON target.repo = source.repo
WHEN MATCHED THEN UPDATE SET
  enabled = source.enabled,
  source = source.source,
  tool_id = source.tool_id,
  updated_at = source.updated_at
WHEN NOT MATCHED THEN INSERT (repo, enabled, source, tool_id, updated_at)
VALUES (source.repo, source.enabled, source.source, source.tool_id, source.updated_at);
"

bq --project_id="$PROJECT_ID" rm -f -t "$STAGING_TABLE"
echo "Repository registry refreshed from $REPORTS_DIR"
