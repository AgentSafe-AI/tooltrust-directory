"use client";

import { useMemo, useState, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, LayoutGrid, List, Star } from "lucide-react";
import type { Report } from "@/lib/report-utils";
import {
  displayGrade,
  keyFindingsSummary,
  formatScannedAgo,
  getToolImpactLine,
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

const GRADE_BUTTON_INACTIVE_STYLES: Record<string, string> = {
  S: "border-zinc-800 bg-zinc-900 text-amber-600 hover:text-amber-300 hover:border-amber-900",
  A: "border-zinc-800 bg-zinc-900 text-emerald-600 hover:text-emerald-400 hover:border-emerald-900",
  B: "border-zinc-800 bg-zinc-900 text-blue-600 hover:text-blue-400 hover:border-blue-900",
  C: "border-zinc-800 bg-zinc-900 text-yellow-700 hover:text-yellow-400 hover:border-yellow-900",
  D: "border-zinc-800 bg-zinc-900 text-orange-600 hover:text-orange-400 hover:border-orange-900",
  F: "border-zinc-800 bg-zinc-900 text-red-700 hover:text-red-400 hover:border-red-900",
};

type SortKey = "stars" | "grade";
type SortDir = "asc" | "desc";

function sortReports(reports: Report[], key: SortKey, dir: SortDir) {
  const gradeRank: Record<string, number> = { A: 0, B: 1, C: 2, D: 3, F: 4 };
  return [...reports].sort((a, b) => {
    let cmp = 0;
    if (key === "stars") {
      cmp = (b.stars ?? 0) - (a.stars ?? 0);
    } else {
      cmp = (gradeRank[displayGrade(a)] ?? 5) - (gradeRank[displayGrade(b)] ?? 5);
    }
    if (cmp === 0) cmp = a.tool_id.localeCompare(b.tool_id);
    return dir === "asc" ? -cmp : cmp;
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
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQueryState] = useState(() => searchParams.get("q") ?? "");
  const [gradeFilter, setGradeFilterState] = useState<string>(
    () => searchParams.get("grade") ?? "All"
  );
  const [categoryFilter, setCategoryFilterState] = useState<string>(
    () => searchParams.get("category") ?? "All"
  );
  const [viewMode, setViewModeState] = useState<"table" | "cards">(() => {
    const v = searchParams.get("view");
    return v === "table" ? "table" : "cards";
  });
  const [sortKey, setSortKey] = useState<SortKey>("stars");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "grade" ? "asc" : "desc");
    }
  };

  const pushURL = useCallback(
    (q: string, grade: string, cat: string, view: string) => {
      const p = new URLSearchParams();
      if (q) p.set("q", q);
      if (grade !== "All") p.set("grade", grade);
      if (cat !== "All") p.set("category", cat);
      if (view !== "cards") p.set("view", view);
      const qs = p.toString();
      router.replace(qs ? `/?${qs}` : "/", { scroll: false });
    },
    [router]
  );

  const setQuery = (v: string) => { setQueryState(v); pushURL(v, gradeFilter, categoryFilter, viewMode); };
  const setGradeFilter = (v: string) => { setGradeFilterState(v); pushURL(query, v, categoryFilter, viewMode); };
  const setCategoryFilter = (v: string) => { setCategoryFilterState(v); pushURL(query, gradeFilter, v, viewMode); };
  const setViewMode = (v: "table" | "cards") => { setViewModeState(v); pushURL(query, gradeFilter, categoryFilter, v); };

  const categories = useMemo(() => {
    const set = new Set(reports.map((r) => r.category).filter(Boolean));
    return Array.from(set).sort() as string[];
  }, [reports]);

  const sorted = useMemo(() => sortReports(reports, sortKey, sortDir), [reports, sortKey, sortDir]);
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
            className={`rounded-lg border px-3 py-2.5 text-sm transition ${
              viewMode === "table"
                ? "border-zinc-600 bg-zinc-800 text-zinc-100"
                : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
            }`}
            aria-pressed={viewMode === "table"}
          >
            <List className="mr-1.5 inline h-4 w-4" /> Table
          </button>
          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={`rounded-lg border px-3 py-2.5 text-sm transition ${
              viewMode === "cards"
                ? "border-zinc-600 bg-zinc-800 text-zinc-100"
                : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
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
            className={`rounded-lg border px-2.5 py-2 text-sm font-medium transition ${
              gradeFilter === g
                ? GRADE_BUTTON_STYLES[g] ?? "bg-zinc-700 text-zinc-200 border-zinc-600"
                : GRADE_BUTTON_INACTIVE_STYLES[g] ?? "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
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
          className={`rounded-lg border px-2.5 py-2 text-sm transition ${
            categoryFilter === "All"
              ? "border-zinc-600 bg-zinc-800 text-zinc-100"
              : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategoryFilter(c)}
            className={`rounded-lg border px-2.5 py-2 text-sm transition ${
              categoryFilter === c
                ? "border-zinc-600 bg-zinc-800 text-zinc-100"
                : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {viewMode === "table" ? (
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="px-4 py-3 font-medium text-zinc-400">Name</th>
                <th className="px-4 py-3 font-medium text-zinc-400">Version</th>
                <th
                  className="px-4 py-3 font-medium text-zinc-400 cursor-pointer select-none hover:text-zinc-200 whitespace-nowrap"
                  onClick={() => toggleSort("stars")}
                >
                  Stars {sortKey === "stars" ? (sortDir === "desc" ? "↓" : "↑") : <span className="opacity-30">↕</span>}
                </th>
                <th
                  className="px-4 py-3 font-medium text-zinc-400 cursor-pointer select-none hover:text-zinc-200"
                  onClick={() => toggleSort("grade")}
                >
                  Grade {sortKey === "grade" ? (sortDir === "asc" ? "↑" : "↓") : <span className="opacity-30">↕</span>}
                </th>
                <th className="px-4 py-3 font-medium text-zinc-400">Impact</th>
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
                  <td className="px-4 py-3 text-sm text-zinc-400">
                    {r.stars != null && r.stars > 0
                      ? r.stars >= 1000 ? `${(r.stars / 1000).toFixed(1)}k` : r.stars
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/tool/${r.tool_id}`}>
                      <GradeBadge grade={displayGrade(r)} size="sm" dark />
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-zinc-300">
                    <p className="max-w-md">{getToolImpactLine(r)}</p>
                  </td>
                  <td className="px-4 py-3 text-zinc-400">
                    <span className="flex flex-wrap gap-x-1.5 gap-y-0.5">
                      {keyFindingsSummary(r).split(", ").map((token, i) => (
                        <span key={i} className="whitespace-nowrap">{token}{i < keyFindingsSummary(r).split(", ").length - 1 ? "," : ""}</span>
                      ))}
                    </span>
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
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700 hover:bg-zinc-800/60"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  {r.vendor && (
                    <Image
                      src={`https://github.com/${r.vendor}.png?size=64`}
                      alt={r.vendor}
                      width={36}
                      height={36}
                      className="h-9 w-9 shrink-0 rounded-lg bg-zinc-800"
                    />
                  )}
                  <div className="min-w-0">
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
                </div>
                <GradeBadge grade={displayGrade(r)} size="sm" dark showEmoji={false} />
              </div>
              {r.description && (
                <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                  {r.description}
                </p>
              )}
              <div className="mt-3 border-t border-zinc-800 pt-3 space-y-1.5">
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
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
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>
                    {r.stars != null && r.stars > 0 ? (
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-zinc-500 text-zinc-500" />
                        {r.stars >= 1000 ? `${(r.stars / 1000).toFixed(1)}k` : r.stars}
                      </span>
                    ) : null}
                  </span>
                  {r.scan_date && (
                    <span>Scanned {formatScannedAgo(r.scan_date)}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 py-12 text-center space-y-3">
          <p className="text-zinc-500">No tools match the current filters.</p>
          <button
            type="button"
            onClick={() => { setQuery(""); setGradeFilter("All"); setCategoryFilter("All"); }}
            className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
