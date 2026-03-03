import { getAllReports, displayGrade } from "@/lib/data";
import { GradeBadge } from "@/lib/grades";
import { RegistryWithFilters } from "@/components/RegistryWithFilters";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const reports = getAllReports();
  const sorted = [...reports].sort((a, b) => {
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
  const sTier = sorted.filter((r) => displayGrade(r) === "S");

  const safeCount = reports.filter((r) =>
    ["S", "A", "B"].includes(displayGrade(r))
  ).length;
  const riskyCount = reports.filter((r) =>
    ["D", "F"].includes(displayGrade(r))
  ).length;

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          AI Agent Tool Security Directory
        </h1>
        <p className="max-w-2xl text-zinc-400">
          Security analysis for MCP servers, skills, and AI agent tools. Every
          tool is scanned for prompt injection, permission risks, and scope
          mismatches.
        </p>

        {/* Stats row: 3 dark cards */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4">
            <p className="text-2xl font-bold text-zinc-100">{reports.length}</p>
            <p className="text-sm text-zinc-500">Tools Scanned</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4">
            <p className="text-2xl font-bold text-emerald-400">{safeCount}</p>
            <p className="text-sm text-zinc-500">Safe (S/A/B)</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4">
            <p className="text-2xl font-bold text-red-400">{riskyCount}</p>
            <p className="text-sm text-zinc-500">Risky (D/F)</p>
          </div>
        </div>
      </section>

      {/* S-Tier Wall */}
      {sTier.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-100">
            S-Tier — Zero Risks
          </h2>
          <p className="mb-4 text-sm text-zinc-500">
            Tools with risk_score 0 and no findings. Safe for production agents.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sTier.slice(0, 12).map((r) => (
              <Link
                key={r.tool_id}
                href={`/tool/${r.tool_id}`}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 transition hover:border-zinc-700"
              >
                <span className="font-medium text-zinc-100">{r.tool_id}</span>
                <GradeBadge grade="S" size="sm" dark />
              </Link>
            ))}
          </div>
          {sTier.length > 12 && (
            <p className="mt-2 text-sm text-zinc-500">
              +{sTier.length - 12} more S-grade tools in the registry below.
            </p>
          )}
        </section>
      )}

      {/* Registry with search, filters, cards */}
      <RegistryWithFilters reports={reports} />
    </div>
  );
}
