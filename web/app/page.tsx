import {
  getAllReports,
  displayGrade,
} from "@/lib/data";
import { GradeBadge } from "@/lib/grades";
import { RegistryWithFilters } from "@/components/RegistryWithFilters";
import Link from "next/link";
import { ShieldAlert, Terminal, Bomb, KeyRound, Package, Code2 } from "lucide-react";
import { Suspense } from "react";

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
  const mediumCount = reports.filter((r) => displayGrade(r) === "C").length;
  const riskyCount = reports.filter((r) =>
    ["D", "F"].includes(displayGrade(r))
  ).length;
  const incompleteCount = reports.filter((r) => displayGrade(r) === "?").length;
  const scannedCount = reports.length - incompleteCount;
  const totalFindings = reports.reduce(
    (sum, report) => sum + (report.findings?.length ?? 0),
    0
  );
  const whyItMatters = [
    {
      id: "AS-001",
      title: "Prompt Injection",
      body: "Malicious tool descriptions can hijack the agent's reasoning flow and redirect behavior.",
      icon: Bomb,
      accent: "text-red-400",
    },
    {
      id: "AS-002",
      title: "Excessive Permissions",
      body: "Agents may be allowed to delete files, upload data, or reach sensitive local resources.",
      icon: KeyRound,
      accent: "text-orange-400",
    },
    {
      id: "AS-006",
      title: "Arbitrary Code Execution",
      body: "Attackers may be able to make your agent run arbitrary host commands or scripts.",
      icon: Code2,
      accent: "text-red-400",
    },
    {
      id: "AS-008",
      title: "Supply Chain",
      body: "Known malicious packages such as the LiteLLM .pth backdoor can steal AWS or SSH credentials at startup.",
      icon: Package,
      accent: "text-red-400",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="space-y-4">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            <ShieldAlert className="h-3.5 w-3.5" />
            MCP Security Directory
          </div>
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              Protect Your AI Agents from Malicious MCP Tools
            </h1>
            <p className="max-w-2xl text-zinc-400">
              Daily scanning across {scannedCount} MCP tools — detecting prompt injection,
              supply chain attacks, and excessive permissions before your agent trusts them.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/?grade=D"
              className="inline-flex items-center justify-center rounded-xl border border-red-500/40 bg-red-500/15 px-5 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-500/25 hover:text-red-200"
            >
              Browse Risky Tools
            </Link>
            <a
              href="#scan-your-mcp"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-950/70 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Scan My MCP
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
              <p className="text-2xl font-bold text-zinc-100">{totalFindings}</p>
              <p className="text-sm text-zinc-500">Total Findings</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
              <p className="text-2xl font-bold text-emerald-400">{safeCount}</p>
              <p className="text-sm text-zinc-500">Safe (S/A/B)</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
              <p className="text-2xl font-bold text-yellow-400">{mediumCount}</p>
              <p className="text-sm text-zinc-500">Medium Risk (C)</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
              <p className="text-2xl font-bold text-red-400">{riskyCount}</p>
              <p className="text-sm text-zinc-500">Risky (D/F)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
            Why These Findings Matter
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            Representative high-impact checks. Full rule coverage is available on each tool page and in the methodology docs.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {whyItMatters.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4"
              >
                <div className="flex items-start gap-3">
                  <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${item.accent}`} />
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-zinc-100">
                  {item.id} {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-zinc-400">
                  {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 transition hover:border-zinc-700 hover:bg-zinc-800/60"
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
      <Suspense>
        <RegistryWithFilters reports={reports} />
      </Suspense>

      {/* Scan your tools */}
      <section id="scan-your-mcp" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-5">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          <h2 className="text-lg font-semibold text-zinc-100">Scan your MCP servers</h2>
        </div>

        {/* MCP — primary */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Via MCP (recommended) — works inside Claude Code, Cursor, Claude Desktop</p>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <pre className="text-sm font-mono text-zinc-300 whitespace-pre">
{`{
  "mcpServers": {
    "tooltrust": {
      "command": "npx",
      "args": ["-y", "tooltrust-mcp"]
    }
  }
}`}
            </pre>
          </div>
          <p className="text-xs text-zinc-500">
            Then ask your agent: <code className="text-emerald-400">run tooltrust_scan_config</code>
          </p>
        </div>

        <div className="border-t border-zinc-800" />

        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-red-300">
            How to block a risky tool
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            If a tool is graded D or F, disable it in your production <code className="text-red-300">.mcp.json</code> before waiting for a fix and re-scan.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300">{`{
  "mcpServers": {
    "tool-name": {
      "disabled": true
    }
  }
}`}</pre>
        </div>

        {/* CLI — secondary */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Via CLI</p>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <code className="text-sm font-mono text-zinc-300">
              <span className="text-zinc-500 select-none">$ </span>
              <span className="text-emerald-400">curl</span>
              {" -sfL https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-scanner/main/install.sh | bash"}
            </code>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <code className="text-sm font-mono text-zinc-300">
              <span className="text-zinc-500 select-none">$ </span>
              <span className="text-emerald-400">tooltrust-scanner</span>
              {` scan --server "npx -y @modelcontextprotocol/server-filesystem /tmp"`}
            </code>
          </div>
        </div>

        <a
          href="https://github.com/AgentSafe-AI/tooltrust-scanner"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs text-sky-500 hover:text-sky-400 underline underline-offset-2"
        >
          Full docs & GitHub Actions integration →
        </a>
      </section>
    </div>
  );
}
