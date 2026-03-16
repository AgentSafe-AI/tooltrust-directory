"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, LayoutGrid, List } from "lucide-react";
import type { Report } from "@/lib/report-utils";
import {
  displayGrade,
  keyFindingsSummary,
  formatScannedAgo,
} from "@/lib/report-utils";
import { GradeBadge } from "@/lib/grades";

const GRADES = ["All", "A", "B", "C", "D", "F"] as const;

const GRADE_BUTTON_STYLES: Record<string, string> = {
  All: "bg-zinc-800 text-zinc-200 border-zinc-700",
  S: "bg-amber-500/20 text-amber-400 border-amber-500/50",
  A: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
  B: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  C: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  D: "bg-orange-500/20 text-orange-400 border-orange-500/50",
  F: "bg-red-500/20 text-red-400 border-red-500/50",
};

function sortReports(reports: Report[]) {
  return [...reports].sort((a, b) => {
    const starsA = a.stars ?? 0;
    const starsB = b.stars ?? 0;
    if (starsB !== starsA) return starsB - starsA;
    const rank: Record<string, number> = {
      S: 0,
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      F: 5,
    };
    const gA = rank[displayGrade(a)] ?? 6;
    const gB = rank[displayGrade(b)] ?? 6;
    return gA - gB;
  });
}

function filterReports(
  reports: Report[],
  query: string,
  gradeFilter: string,
  categoryFilter: string
) {
  const q = query.trim().toLowerCase();
  return reports.filter((r) => {
    if (q) {
      const match =
        r.tool_id.toLowerCase().includes(q) ||
        (r.description?.toLowerCase().includes(q) ?? false) ||
        (r.vendor?.toLowerCase().includes(q) ?? false);
      if (!match) return false;
    }
    if (gradeFilter !== "All" && displayGrade(r) !== gradeFilter) return false;
    if (categoryFilter !== "All" && r.category !== categoryFilter) return false;
    return true;
  });
}

export function RegistryWithFilters({ reports }: { reports: Report[] }) {
  const [query, setQuery] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"table" | "cards">("cards");

  const categories = useMemo(() => {
    const set = new Set(reports.map((r) => r.category).filter(Boolean));
    return Array.from(set).sort() as string[];
  }, [reports]);

  const sorted = useMemo(() => sortReports(reports), [reports]);
  const filtered = useMemo(
    () => filterReports(sorted, query, gradeFilter, categoryFilter),
    [sorted, query, gradeFilter, categoryFilter]
  );

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-zinc-100">Live Registry</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode("table")}
            className={`rounded-lg border px-3 py-1.5 text-sm transition ${
              viewMode === "table"
                ? "border-zinc-600 bg-zinc-800 text-zinc-100"
                : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
            }`}
            aria-pressed={viewMode === "table"}
          >
            <List className="mr-1.5 inline h-4 w-4" /> Table
          </button>
          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={`rounded-lg border px-3 py-1.5 text-sm transition ${
              viewMode === "cards"
                ? "border-zinc-600 bg-zinc-800 text-zinc-100"
                : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
            }`}
            aria-pressed={viewMode === "cards"}
          >
            <LayoutGrid className="mr-1.5 inline h-4 w-4" /> Cards
          </button>
        </div>
      </div>

      {/* Full-width search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          placeholder="Search servers by name, description, or author..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2.5 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600"
          aria-label="Search tools"
        />
      </div>

      {/* Grade filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-zinc-400">Grade:</span>
        {GRADES.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGradeFilter(g)}
            className={`rounded-lg border px-2.5 py-1 text-sm font-medium transition ${
              gradeFilter === g
                ? GRADE_BUTTON_STYLES[g] ?? "bg-zinc-700 text-zinc-200 border-zinc-600"
                : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-zinc-400">Category:</span>
        <button
          type="button"
          onClick={() => setCategoryFilter("All")}
          className={`rounded-lg border px-2.5 py-1 text-sm transition ${
            categoryFilter === "All"
              ? "border-zinc-600 bg-zinc-800 text-zinc-100"
              : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategoryFilter(c)}
            className={`rounded-lg border px-2.5 py-1 text-sm transition ${
              categoryFilter === c
                ? "border-zinc-600 bg-zinc-800 text-zinc-100"
                : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {viewMode === "table" ? (
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="px-4 py-3 font-medium text-zinc-400">Name</th>
                <th className="px-4 py-3 font-medium text-zinc-400">Version</th>
                <th className="px-4 py-3 font-medium text-zinc-400">Grade</th>
                <th className="px-4 py-3 font-medium text-zinc-400">Key Findings</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.tool_id}
                  className="border-b border-zinc-800/80 transition hover:bg-zinc-800/30 last:border-0"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/tool/${r.tool_id}`}
                      className="font-medium text-emerald-400 hover:underline"
                    >
                      {r.tool_id}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-500">
                    {r.version || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/tool/${r.tool_id}`}>
                      <GradeBadge grade={displayGrade(r)} size="sm" dark />
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-zinc-400">
                    {keyFindingsSummary(r)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <Link
              key={r.tool_id}
              href={`/tool/${r.tool_id}`}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-zinc-700"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-zinc-100">{r.tool_id}</h3>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="rounded border border-zinc-700 bg-zinc-800/80 px-1.5 py-0.5 text-xs text-zinc-400">
                      mcp
                    </span>
                    {r.version && (
                      <span className="rounded border border-zinc-700 bg-zinc-800/80 px-1.5 py-0.5 text-xs text-zinc-400">
                        {r.version}
                      </span>
                    )}
                  </div>
                </div>
                <GradeBadge grade={displayGrade(r)} size="sm" dark showEmoji={false} />
              </div>
              {r.description && (
                <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                  {r.description}
                </p>
              )}
              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-zinc-800 pt-3 text-xs text-zinc-500">
                {r.category && (
                  <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-blue-400">
                    {r.category}
                  </span>
                )}
                {r.findings && r.findings.length > 0 && (
                  <span className="rounded bg-orange-500/10 px-1.5 py-0.5 text-orange-400">
                    {r.findings.length} findings
                  </span>
                )}
                {r.stars != null && r.stars > 0 && (
                  <span>⭐ {r.stars >= 1000 ? `${(r.stars / 1000).toFixed(1)}k` : r.stars}</span>
                )}
                {r.scan_date && (
                  <span>Scanned {formatScannedAgo(r.scan_date)}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 py-12 text-center text-zinc-500">
          No tools match the current filters.
        </div>
      )}
    </section>
  );
}
