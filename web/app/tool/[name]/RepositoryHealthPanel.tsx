import { ExternalLink, GitFork, GitPullRequest, Users, Star, Tag, Activity, GitCommitHorizontal, PackageCheck } from "lucide-react";
import type { ReactNode } from "react";
import type { Report } from "@/lib/report-utils";

type Props = { report: Report };

function formatCount(value?: number): string {
  if (value == null) return "Not collected";
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}k`;
  return value.toLocaleString();
}

function formatDate(value?: string): string {
  if (!value) return "Not collected";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not collected";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatReleaseVersion(report: Report): string {
  return report.latest_release_version || report.latest_release_tag || "Not collected";
}

function MiniLineChart({ values, color }: { values: number[]; color: string }) {
  const width = 420;
  const height = 92;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / Math.max(values.length - 1, 1)) * width;
    const y = height - ((value - min) / range) * (height - 12) - 6;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-24 w-full" role="img" aria-label="Trend preview">
      <path d={`M 0 ${height - 1} H ${width}`} stroke="rgb(39 39 42)" strokeWidth="1" />
      <polyline points={points} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {values.map((value, index) => {
        const [x, y] = points.split(" ")[index].split(",");
        return <circle key={`${value}-${index}`} cx={x} cy={y} r="3" fill={color} />;
      })}
    </svg>
  );
}

function Metric({ icon, label, value, detail }: { icon: ReactNode; label: string; value: string; detail?: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
      <div className="flex items-center gap-2 text-xs text-zinc-500">{icon}{label}</div>
      <p className="mt-2 text-lg font-semibold text-zinc-100">{value}</p>
      {detail && <p className="mt-1 text-xs text-zinc-500">{detail}</p>}
    </div>
  );
}

export function RepositoryHealthPanel({ report }: Props) {
  // These metadata fields are optional until the GitHub metadata collector is enabled.
  const hasRepoUrl = report.source_url?.includes("github.com");
  const sampleStars = [61, 68, 72, 79, 86, 91, 100];
  const samplePullRequests = [2, 4, 3, 7, 5, 8, 10];

  return (
    <section className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-sky-400" />
            <h2 className="text-lg font-semibold text-zinc-100">Repository health</h2>
          </div>
          <p className="mt-1 text-sm text-zinc-500">
            Popularity and maintenance signals alongside the security grade.
          </p>
        </div>
        {hasRepoUrl && (
          <a href={report.source_url} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-400 hover:text-zinc-200 hover:underline">
            View repository <ExternalLink className="ml-1 inline h-3 w-3" />
          </a>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Metric icon={<Star className="h-3.5 w-3.5" />} label="Stars" value={formatCount(report.stars)} detail={report.stars != null ? "current snapshot" : undefined} />
        <Metric icon={<GitFork className="h-3.5 w-3.5" />} label="Forks" value={formatCount(report.forks)} detail={report.forks != null ? "current snapshot" : "GitHub metadata pending"} />
        <Metric icon={<Users className="h-3.5 w-3.5" />} label="Contributors" value={formatCount(report.contributors)} detail={report.contributors != null ? "public GitHub contributors" : "GitHub metadata pending"} />
        <Metric icon={<GitCommitHorizontal className="h-3.5 w-3.5" />} label="Last commit" value={formatDate(report.last_commit_at)} detail={report.last_commit_at ? "GitHub repository activity" : "GitHub metadata pending"} />
        <Metric icon={<Tag className="h-3.5 w-3.5" />} label="Last release" value={formatDate(report.last_release_at)} detail={report.latest_release_name || "GitHub metadata pending"} />
        <Metric icon={<PackageCheck className="h-3.5 w-3.5" />} label="Release version" value={formatReleaseVersion(report)} detail={report.latest_release_tag && report.latest_release_version && report.latest_release_tag !== report.latest_release_version ? `Tag ${report.latest_release_tag}` : "Latest GitHub release"} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-medium text-zinc-200">Stars trend</h3>
              <p className="text-xs text-zinc-500">POC preview · daily history collector pending</p>
            </div>
            <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-2 py-1 text-xs text-sky-300">28d</span>
          </div>
          <MiniLineChart values={sampleStars} color="#38bdf8" />
          <div className="flex justify-between text-xs text-zinc-600"><span>28d ago</span><span>Today</span></div>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-medium text-zinc-200">Pull request activity</h3>
              <p className="text-xs text-zinc-500">POC preview · monthly history collector pending</p>
            </div>
            <GitPullRequest className="h-4 w-4 text-violet-400" />
          </div>
          <MiniLineChart values={samplePullRequests} color="#a78bfa" />
          <div className="flex justify-between text-xs text-zinc-600"><span>Older</span><span>Latest</span></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-zinc-800 pt-4 text-xs">
        {report.language && <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-zinc-300">{report.language}</span>}
        {report.license && <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-zinc-300">{report.license}</span>}
        {report.category && <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-zinc-300">{report.category}</span>}
        {report.npm_downloads_monthly != null && <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-zinc-300">{formatCount(report.npm_downloads_monthly)}/mo npm downloads</span>}
        <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-zinc-500">Last scan {formatDate(report.scan_date)}</span>
      </div>
    </section>
  );
}
