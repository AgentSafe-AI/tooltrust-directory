#!/usr/bin/env bash
# scripts/rescan-all.sh
#
# Clears all existing scan reports and triggers a full re-scan via
# workflow_dispatch (force_rescan=true).
#
# Prerequisites: gh CLI authenticated, git remote configured.
#
# Usage:
#   ./scripts/rescan-all.sh
#   ./scripts/rescan-all.sh --dry-run   # preview only, no destructive changes

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REPORTS_DIR="$REPO_ROOT/data/reports"
REPO="AgentSafe-AI/tooltrust-directory"
WORKFLOW="daily-audit.yml"
DRY_RUN=false

for arg in "$@"; do
  [ "$arg" = "--dry-run" ] && DRY_RUN=true
done

# ── Count existing reports ──────────────────────────────────────────────────
REPORT_COUNT=$(find "$REPORTS_DIR" -name '*.json' 2>/dev/null | wc -l | tr -d ' ')
echo "Found ${REPORT_COUNT} existing reports in ${REPORTS_DIR}"

if [ "$DRY_RUN" = "true" ]; then
  echo "[dry-run] Would delete all ${REPORT_COUNT} reports and trigger force rescan."
  exit 0
fi

# ── Clear reports ───────────────────────────────────────────────────────────
echo "Clearing reports..."
find "$REPORTS_DIR" -name '*.json' -delete
echo "Cleared ${REPORT_COUNT} report(s)."

# ── Commit and push ─────────────────────────────────────────────────────────
cd "$REPO_ROOT"
git add data/reports/
if git diff --staged --quiet; then
  echo "Nothing to commit (reports already empty)."
else
  git commit -m "chore: clear all reports for full rescan [skip ci]"
  git push
  echo "Pushed cleared reports."
fi

# ── Trigger workflow ─────────────────────────────────────────────────────────
echo "Triggering full rescan (force_rescan=true)..."
gh workflow run "$WORKFLOW" \
  --repo "$REPO" \
  --field force_rescan=true

echo ""
echo "Rescan triggered. Monitor progress:"
echo "  gh run list --repo $REPO --workflow=$WORKFLOW"
