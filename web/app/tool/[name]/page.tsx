import { getReportByToolName, displayGrade, getToolNarrative } from "@/lib/data";
import { GradeProgressRing } from "@/lib/grades";
import { formatSeverityLabel, getMethodologyHref, getRuleInfo, getSeverityBadgeClass, getSeverityCardClass } from "@/lib/rules";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shield, ExternalLink, CheckCircle2, ScanSearch, Star } from "lucide-react";
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

function getDecisionLabel(grade: string): string {
  if (grade === "D" || grade === "F") return "Block in Production";
  if (grade === "C") return "Needs Approval";
  return "Safe With Normal Controls";
}

function getActionCardStyle(grade: string): { border: string; bg: string; badge: string; title: string; body: string } {
  if (grade === "D" || grade === "F") {
    return {
      border: "border-red-500/25",
      bg: "bg-red-500/[0.05]",
      badge: "border-red-400/30 bg-red-400/10 text-red-200",
      title: "Block In Production",
      body: "This tool should stay disabled in production agents until the flagged risks are fixed and the scan is clean.",
    };
  }
  if (grade === "C") {
    return {
      border: "border-yellow-500/20",
      bg: "bg-yellow-500/[0.05]",
      badge: "border-yellow-300/25 bg-yellow-300/10 text-yellow-100",
      title: "Review Before Use",
      body: "Keep this tool behind manual approval and avoid unattended runs until the risky capabilities are narrowed or removed.",
    };
  }
  return {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/[0.05]",
    badge: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
    title: "Safe With Normal Controls",
    body: "No high-risk findings were detected in this scan, but you should still apply least-privilege defaults and rescan after changes.",
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params;
  const report = getReportByToolName(name);
  if (!report) return { title: "Tool Not Found | ToolTrust" };
  const grade = displayGrade(report);
  const canonicalUrl = `https://www.tooltrust.dev/tool/${report.tool_id}`;
  return {
    title: `${report.tool_id} — Grade ${grade} | ToolTrust`,
    description: report.description ?? `Security report for ${report.tool_id}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${report.tool_id} — Grade ${grade} | ToolTrust`,
      description: report.description ?? `Security report for ${report.tool_id}`,
      url: canonicalUrl,
      siteName: "ToolTrust",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${report.tool_id} — Grade ${grade} | ToolTrust`,
      description: report.description ?? `Security report for ${report.tool_id}`,
    },
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
  const narrative = getToolNarrative(report);
  const blockSnippet = `{
  "mcpServers": {
    "${report.tool_id}": {
      "disabled": true
    }
  }
}`;
  const decisionLabel = getDecisionLabel(grade);
  const actionStyle = getActionCardStyle(grade);
  const toolContexts =
    report.tool_contexts?.filter((ctx) => {
      const hasBehavior = Boolean(ctx.behavior && ctx.behavior.length > 0);
      const hasDestinations = Boolean(ctx.destinations && ctx.destinations.length > 0);
      const hasDependencyContext = Boolean(ctx.dependency_visibility);
      const isNonAllow = ctx.action !== "ALLOW";
      return hasBehavior || hasDestinations || (hasDependencyContext && isNonAllow);
    }) ?? [];

  const severityChips = [
    { label: "Critical", n: summary.critical },
    { label: "High", n: summary.high },
    { label: "Medium", n: summary.medium },
    { label: "Low", n: summary.low },
    { label: "Info", n: summary.info },
  ].filter((s) => s.n > 0);
  const pageUrl = `https://www.tooltrust.dev/tool/${report.tool_id}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Directory",
        item: "https://www.tooltrust.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: report.tool_id,
        item: pageUrl,
      },
    ],
  };
  const reportJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${report.tool_id} security report`,
    description: report.description ?? `Security report for ${report.tool_id}`,
    url: pageUrl,
    author: {
      "@type": "Organization",
      name: "AgentSafe-AI",
    },
    publisher: {
      "@type": "Organization",
      name: "AgentSafe-AI",
      url: "https://www.tooltrust.dev",
    },
    dateModified: report.scan_date,
    about: [
      "MCP server security",
      "AI agent security",
      "Prompt injection",
      "Supply-chain risk",
    ],
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportJsonLd) }}
      />
      <nav className="text-sm text-zinc-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-zinc-400">
          Directory
        </Link>
        <span className="mx-1">/</span>
        <span className="text-zinc-400">{report.tool_id}</span>
      </nav>

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
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://github.com/${report.vendor}.png?size=80`}
                alt={report.vendor}
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl bg-zinc-800"
                loading="eager"
                decoding="async"
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
            {report.scanner && (
              <> | <span className="font-mono">{report.scanner}</span></>
            )}
            {report.stars != null && report.stars > 0 && (
              <> | <Star className="inline h-3 w-3 fill-zinc-500 text-zinc-500 mb-0.5" /> {report.stars >= 1000 ? `${(report.stars / 1000).toFixed(1)}k` : report.stars}</>
            )}
          </p>
        </div>
      </div>

      {hasFindings && severityChips.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {severityChips.map((s) => (
            <span
              key={s.label}
              className={getSeverityBadgeClass(s.label)}
            >
              {s.n} {s.label}
            </span>
          ))}
        </div>
      )}

      {hasFindings && (() => {
        const riskStyle: Record<string, { border: string; bg: string; heading: string; badge: string }> = {
          F: {
            border: "border-red-500/25",
            bg: "bg-red-500/8",
            heading: "text-red-300",
            badge: "bg-red-500/12 text-red-300 border-red-500/30",
          },
          D: {
            border: "border-orange-500/25",
            bg: "bg-orange-500/8",
            heading: "text-orange-300",
            badge: "bg-orange-500/12 text-orange-300 border-orange-500/30",
          },
          C: {
            border: "border-yellow-500/20",
            bg: "bg-yellow-500/6",
            heading: "text-yellow-200",
            badge: "bg-yellow-500/10 text-yellow-200 border-yellow-500/25",
          },
          B: {
            border: "border-sky-500/20",
            bg: "bg-sky-500/6",
            heading: "text-sky-300",
            badge: "bg-sky-500/10 text-sky-300 border-sky-500/25",
          },
          A: {
            border: "border-emerald-500/20",
            bg: "bg-emerald-500/6",
            heading: "text-emerald-300",
            badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
          },
          S: {
            border: "border-amber-500/20",
            bg: "bg-amber-500/6",
            heading: "text-amber-200",
            badge: "bg-amber-500/10 text-amber-200 border-amber-500/25",
          },
        };
        const s = riskStyle[grade] ?? riskStyle["C"];
        return (
          <section className={`rounded-xl border ${s.border} ${s.bg} p-6`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className={`text-sm font-semibold uppercase tracking-wider ${s.heading}`}>
                    Risk Summary
                  </h2>
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${s.badge}`}>
                    {decisionLabel}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {narrative.impactLine}
                </p>
              </div>
              {(grade === "D" || grade === "F") && (
                <CopyBadgeButton
                  snippet={blockSnippet}
                  label="Copy Block Config"
                  copiedLabel="Copied Block Config"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100"
                />
              )}
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-sm leading-6 text-zinc-400">
                <span className="font-medium text-zinc-100">Potential impact:</span>{" "}
                {narrative.consequence}
              </p>
              <p className="text-sm leading-6 text-zinc-400">
                <span className="font-medium text-zinc-100">Recommended action:</span>{" "}
                {actionStyle.body}
              </p>
              {grade === "D" || grade === "F" ? (
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                  <pre className="overflow-x-auto text-sm text-zinc-300">{blockSnippet}</pre>
                </div>
              ) : (
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm leading-6 text-zinc-400">
                  <p>
                    <span className="font-medium text-zinc-100">Suggested policy:</span>{" "}
                    keep this tool behind manual approval, do not allow unattended runs, and re-scan after narrowing risky permissions.
                  </p>
                </div>
              )}
            </div>
          </section>
        );
      })()}

      {report.scan_incomplete && (
        <div className="flex items-start gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-4">
          <span className="mt-0.5 text-yellow-400 text-lg leading-none">⚠</span>
          <div>
            <p className="font-semibold text-yellow-300">Scan Incomplete</p>
            <p className="mt-1 text-sm text-yellow-400/80">
              No tool definitions were found in this repository. The grade shown does not reflect
              actual security analysis — the scanner could not enumerate this server&apos;s tools.
              Verify the repo contains a valid MCP manifest and re-scan.
            </p>
          </div>
        </div>
      )}

      {toolContexts.length > 0 && (
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
          <h2 className="border-b border-zinc-800 px-5 py-4 text-lg font-semibold text-zinc-100">
            Behavior &amp; Destinations
          </h2>
          <div className="divide-y divide-zinc-800">
            {toolContexts.map((ctx) => (
              <div key={ctx.tool_name} className="p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-mono text-sm text-zinc-100">{ctx.tool_name}</h3>
                  <span className="rounded border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-[11px] uppercase tracking-wide text-zinc-400">
                    {ctx.action === "REQUIRE_APPROVAL" ? "Needs approval" : ctx.action.toLowerCase()}
                  </span>
                  <span className="rounded border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-[11px] uppercase tracking-wide text-zinc-400">
                    Grade {ctx.grade}
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-sm text-zinc-400">
                  {ctx.behavior && ctx.behavior.length > 0 && (
                    <p>
                      <span className="font-medium text-zinc-200">Behavior:</span>{" "}
                      {ctx.behavior.join(", ")}
                    </p>
                  )}
                  {ctx.destinations && ctx.destinations.length > 0 && (
                    <p>
                      <span className="font-medium text-zinc-200">Destination:</span>{" "}
                      {ctx.destinations.join("; ")}
                    </p>
                  )}
                  {ctx.dependency_visibility && (
                    <p>
                      <span className="font-medium text-zinc-200">Dependency visibility:</span>{" "}
                      {ctx.dependency_visibility}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
        <h2 className="border-b border-zinc-800 px-5 py-4 text-lg font-semibold text-zinc-100">
          Security Findings ({report.findings?.length ?? 0})
        </h2>
        {!hasFindings ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2 className="mb-3 h-12 w-12 text-emerald-500" />
            <p className="text-lg font-medium text-zinc-100">
              Zero Security Risks Detected
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              No findings in this scan. Safe for production use.
            </p>
          </div>
        ) : (
          (() => {
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
                  const ruleInfo = getRuleInfo(first.id);
                  const isHeuristicAS006 =
                    first.id === "AS-006" &&
                    first.description ===
                      "tool name or description implies arbitrary script/code execution (evaluate_script, execute javascript, etc.)";
                  return (
                    <li
                      key={i}
                      className={`border-b border-l-2 border-zinc-800 bg-zinc-900 p-5 last:border-b-0 ${getSeverityCardClass(first.severity)}`}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={getSeverityBadgeClass(first.severity)}>
                            {formatSeverityLabel(first.severity)}
                          </span>
                          <a
                            href={getMethodologyHref(first.id)}
                            title={`Learn what ${first.id} detects`}
                            className="rounded bg-zinc-800 px-2 py-1 font-mono text-sm text-zinc-300 transition hover:bg-zinc-700 hover:text-zinc-100"
                          >
                            {first.id}
                          </a>
                          <h3 className="text-lg font-semibold text-zinc-100">
                            <span className="mr-2">{ruleInfo?.emoji ?? ""}</span>
                            {ruleInfo?.title ?? first.title} {group.length > 1 && <span className="ml-1 text-zinc-400">×{group.length}</span>}
                          </h3>
                          {isHeuristicAS006 && (
                            <span className="rounded border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                              heuristic signal
                            </span>
                          )}
                        </div>

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

                        {first.recommendation && (
                          <p className="mt-1 text-xs text-zinc-500">
                            <span className="text-zinc-600">Fix: </span>{first.recommendation}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          })()
        )}
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-zinc-100">
          <ScanSearch className="h-5 w-5 text-sky-400" />
          Scan this tool yourself
        </h2>
        <p className="mb-4 text-sm text-zinc-500">
          Reproduce this audit locally, integrate into CI, or let your agent audit its own tools.
        </p>
        <ScanSnippets toolId={report.tool_id} sourceUrl={report.source_url} />
      </section>

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
