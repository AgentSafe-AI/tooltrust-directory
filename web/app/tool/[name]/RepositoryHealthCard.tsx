import type { RepositoryHealth } from "@/lib/data";
import { Activity, GitFork, GitPullRequest, Star, Tag, Users } from "lucide-react";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function formatRelativeDate(value?: string): string {
  if (!value) return "Unknown";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Unknown";
  const days = Math.max(0, Math.floor((Date.now() - date.getTime()) / 86_400_000));
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function rangeLabel(history: RepositoryHealth["history"]): string | null {
  if (!history || history.length < 2) return null;
  const delta = history[history.length - 1].stars - history[0].stars;
  if (delta === 0) return "No star change yet";
  const firstDate = Date.parse(`${history[0].date}T00:00:00Z`);
  const lastDate = Date.parse(`${history[history.length - 1].date}T00:00:00Z`);
  const rangeDays = Number.isNaN(firstDate) || Number.isNaN(lastDate)
    ? history.length - 1
    : Math.max(1, Math.round((lastDate - firstDate) / 86_400_000));
  return `${delta > 0 ? "+" : ""}${formatNumber(delta)} stars in ${rangeDays}d`;
}

function Sparkline({ values, color }: { values: number[]; color: string }) {
  if (values.length < 2) return null;
  const width = 156;
  const height = 36;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - 4 - ((value - min) / spread) * (height - 8);
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-9 w-full" aria-hidden="true" preserveAspectRatio="none">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function Metric({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2.5">
      <div className="flex items-center gap-1.5 text-xs text-zinc-500">{icon}{label}</div>
      <p className="mt-1 text-base font-semibold text-zinc-200">{value}</p>
    </div>
  );
}

export function RepositoryHealthCard({ health }: { health: RepositoryHealth }) {
  const history = health.history ?? [];
  const starTrend = rangeLabel(history);
  const hasTrend = history.length >= 2;

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5" aria-labelledby="repository-health">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div>
          <h2 id="repository-health" className="text-base font-semibold text-zinc-100">Repository health</h2>
          <p className="mt-1 text-xs text-zinc-500">
            GitHub snapshot for <span className="font-mono text-zinc-400">{health.repository}</span> · refreshed {formatRelativeDate(health.refreshed_at)}
          </p>
        </div>
        {starTrend && <span className="text-xs font-medium text-emerald-400">{starTrend}</span>}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <Metric label="Stars" value={formatNumber(health.stars)} icon={<Star className="h-3.5 w-3.5" />} />
        <Metric label="Forks" value={formatNumber(health.forks)} icon={<GitFork className="h-3.5 w-3.5" />} />
        <Metric label="Contributors" value={formatNumber(health.contributors)} icon={<Users className="h-3.5 w-3.5" />} />
        <Metric label="Open pull requests" value={formatNumber(health.open_pull_requests)} icon={<GitPullRequest className="h-3.5 w-3.5" />} />
        <Metric label="Last release" value={formatRelativeDate(health.last_release_at)} icon={<Tag className="h-3.5 w-3.5" />} />
        <Metric label="Last commit" value={formatRelativeDate(health.last_commit_at)} icon={<Activity className="h-3.5 w-3.5" />} />
      </div>

      {hasTrend && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2.5">
            <p className="text-xs font-medium text-zinc-400">Stars</p>
            <Sparkline values={history.map((item) => item.stars)} color="#34d399" />
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2.5">
            <p className="text-xs font-medium text-zinc-400">Open pull requests</p>
            <Sparkline values={history.map((item) => item.open_pull_requests)} color="#a1a1aa" />
          </div>
        </div>
      )}
    </section>
  );
}
