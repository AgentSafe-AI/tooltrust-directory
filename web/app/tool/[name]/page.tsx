import { getReportByToolName, displayGrade } from "@/lib/data";
import { GradeProgressRing } from "@/lib/grades";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shield, ExternalLink, CheckCircle2, ScanSearch } from "lucide-react";
import { CopyBadgeButton } from "./CopyBadgeButton";
import { ScanSnippets } from "./ScanSnippets";

interface PageProps {
  params: Promise<{ name: string }>;
}

function formatScanDate(scanDate: string): string {
  try {
    const d = new Date(scanDate);
    return d.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function severityBadgeClass(severity: string): string {
  const s = severity.toUpperCase();
  if (s === "CRITICAL") return "bg-red-500/10 text-red-500";
  if (s === "HIGH") return "bg-orange-500/10 text-orange-500";
  if (s === "MEDIUM") return "bg-yellow-500/10 text-yellow-500";
  if (s === "LOW") return "bg-zinc-500/10 text-zinc-400";
  return "bg-zinc-500/10 text-zinc-500";
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params;
  const report = getReportByToolName(name);
  if (!report) return { title: "Tool Not Found | ToolTrust" };
  const grade = displayGrade(report);
  return {
    title: `${report.tool_id} — Grade ${grade} | ToolTrust`,
    description: report.description ?? `Security report for ${report.tool_id}`,
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { name } = await params;
  const report = getReportByToolName(name);
  if (!report) notFound();

  const grade = displayGrade(report);
  const hasFindings = report.findings && report.findings.length > 0;
  const directoryUrl =
    "https://github.com/AgentSafe-AI/tooltrust-directory";
  const summary = report.summary;

  const severityChips = [
    { label: "Critical", n: summary.critical, className: "bg-red-500/10 text-red-500" },
    { label: "High", n: summary.high, className: "bg-orange-500/10 text-orange-500" },
    { label: "Medium", n: summary.medium, className: "bg-yellow-500/10 text-yellow-500" },
    { label: "Low", n: summary.low, className: "bg-zinc-500/10 text-zinc-400" },
    { label: "Info", n: summary.info, className: "bg-zinc-500/10 text-zinc-500" },
  ].filter((s) => s.n > 0);

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-zinc-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-zinc-400">
          Directory
        </Link>
        <span className="mx-1">/</span>
        <span className="text-zinc-400">{report.tool_id}</span>
      </nav>

      {/* Header: progress ring left, tool details right */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <GradeProgressRing
            grade={grade}
            score={report.risk_score}
            maxScore={100}
          />
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            {report.vendor && (
              <img
                src={`https://github.com/${report.vendor}.png?size=80`}
                alt={report.vendor}
                className="h-10 w-10 shrink-0 rounded-xl bg-zinc-800"
              />
            )}
            <h1 className="text-2xl font-bold text-zinc-100">
              {report.tool_id}
            </h1>
            <span className="rounded border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-xs text-zinc-400">
              mcp
            </span>
            {report.version && (
              <span className="rounded border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-xs text-zinc-400">
                {report.version}
              </span>
            )}
          </div>
          {(report.vendor || report.source_url) && (
            <p className="text-sm text-zinc-500">
              {report.vendor ? (
                <a
                  href={report.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-300 hover:underline"
                >
                  @{report.vendor}
                  <ExternalLink className="ml-0.5 inline h-3 w-3" />
                </a>
              ) : (
                <a
                  href={report.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-300 hover:underline"
                >
                  {report.source_url}
                  <ExternalLink className="ml-0.5 inline h-3 w-3" />
                </a>
              )}
            </p>
          )}
          {report.description && (
            <p className="text-sm text-zinc-500">{report.description}</p>
          )}
          <p className="text-xs text-zinc-500">
            By {report.vendor || "—"} | {report.findings?.length ?? 0} findings
            | Scanned {formatScanDate(report.scan_date)}
          </p>
        </div>
      </div>

      {/* Summary severity chips */}
      {hasFindings && severityChips.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {severityChips.map((s) => (
            <span
              key={s.label}
              className={`rounded px-2.5 py-1 text-xs font-medium ${s.className}`}
            >
              {s.n} {s.label}
            </span>
          ))}
        </div>
      )}

      {/* Security Findings */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
        <h2 className="border-b border-zinc-800 px-5 py-4 text-lg font-semibold text-zinc-100">
          Security Findings ({report.findings?.length ?? 0})
        </h2>
        {!hasFindings ? (
          <div className="flex flex-col items-center justify-center border-t border-zinc-800/50 bg-zinc-900 py-16 text-center">
            <CheckCircle2 className="mb-3 h-12 w-12 text-emerald-500" />
            <p className="text-lg font-medium text-zinc-100">
              Zero Security Risks Detected
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              No findings in this scan. Safe for production use.
            </p>
          </div>
        ) : (() => {
          // Group findings by rule ID + severity so that one rule with
          // mixed severities (e.g. AS-002 High AND AS-002 Medium) renders
          // as separate cards, keeping the badge label accurate.
          const severityOrder: Record<string, number> = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3, INFO: 4 };
          const grouped = new Map<string, typeof report.findings>();
          for (const f of report.findings!) {
            const key = `${f.id}|${f.severity.toUpperCase()}`;
            const arr = grouped.get(key) || [];
            arr.push(f);
            grouped.set(key, arr);
          }
          const sortedGroups = Array.from(grouped.values()).sort((a, b) => {
            const sa = severityOrder[a[0].severity.toUpperCase()] ?? 5;
            const sb = severityOrder[b[0].severity.toUpperCase()] ?? 5;
            return sa - sb;
          });

          return (
            <ul className="divide-y divide-zinc-800">
              {sortedGroups.map((group, i) => {
                const first = group[0];
                return (
                  <li
                    key={i}
                    className="border-b border-zinc-800 bg-zinc-900 p-5 last:border-0"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded px-2 py-1 text-xs font-bold uppercase ${severityBadgeClass(first.severity)}`}
                        >
                          {first.severity}
                        </span>
                        <span className="font-semibold text-zinc-100">
                          {first.title} {group.length > 1 && <span className="ml-1 text-zinc-400">×{group.length}</span>}
                        </span>
                      </div>

                      {/* Description */}
                      {group.length === 1 ? (
                        <p className="text-sm text-zinc-500">
                          {first.tool_name && <span className="font-mono text-zinc-300 mr-2">{first.tool_name}:</span>}
                          {first.description}
                        </p>
                      ) : (
                        <ul className="list-disc pl-5 text-sm text-zinc-500 space-y-1">
                          {group.map((f, j) => (
                            <li key={j}>
                              {f.tool_name && <span className="font-mono text-zinc-300 mr-2">{f.tool_name}:</span>}
                              {f.description}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* AS-012 Rug-Pull: structured diff of added / removed tools */}
                      {first.id === "AS-012" && first.metadata && (() => {
                        const added = (first.metadata.added as string[]) ?? [];
                        const removed = (first.metadata.removed as string[]) ?? [];
                        return (
                          <div className="mt-2 rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono overflow-hidden">
                            {added.length > 0 && (
                              <div className="border-b border-zinc-800 px-3 py-2">
                                <p className="mb-1 text-emerald-500 font-semibold">+ {added.length} added</p>
                                <div className="flex flex-wrap gap-1">
                                  {added.map((t) => (
                                    <span key={t} className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-400">{t}</span>
                                  ))}
                                </div>
                              </div>
                            )}
                            {removed.length > 0 && (
                              <div className="px-3 py-2">
                                <p className="mb-1 text-red-400 font-semibold">− {removed.length} removed</p>
                                <div className="flex flex-wrap gap-1">
                                  {removed.map((t) => (
                                    <span key={t} className="rounded bg-red-500/10 px-1.5 py-0.5 text-red-400">{t}</span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })()}

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 mt-1">
                        <span>
                          Rule:{" "}
                          <a
                            href={`https://github.com/AgentSafe-AI/tooltrust-directory/blob/main/docs/methodology.md#${first.id.toLowerCase()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Learn what ${first.id} detects`}
                            className="rounded bg-zinc-800 px-1 py-0.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors"
                          >
                            {first.id}
                          </a>
                        </span>
                        {first.recommendation && (
                          <span className="text-zinc-500">
                            <span className="text-zinc-600">Fix: </span>{first.recommendation}
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        })()}
      </section>

      {/* Scan this tool */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-zinc-100">
          <ScanSearch className="h-5 w-5 text-sky-400" />
          Scan this tool yourself
        </h2>
        <p className="mb-4 text-sm text-zinc-500">
          Reproduce this audit locally or block risky tools in CI.
        </p>
        <ScanSnippets toolId={report.tool_id} sourceUrl={report.source_url} />
      </section>

      {/* Badge */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-zinc-100">
          <Shield className="h-5 w-5 text-emerald-500" />
          Add badge to your README
        </h2>
        <p className="mb-3 text-sm text-zinc-500">
          Copy this Markdown to show your ToolTrust grade on GitHub.
        </p>
        <div className="relative">
          <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 pr-20 text-sm text-zinc-300">
            {`[![ToolTrust Grade ${grade}](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-${grade.toLowerCase()}.svg)](${directoryUrl})`}
          </pre>
          <CopyBadgeButton
            snippet={`[![ToolTrust Grade ${grade}](https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-directory/main/docs/badges/grade-${grade.toLowerCase()}.svg)](${directoryUrl})`}
          />
        </div>
      </section>
    </div>
  );
}
