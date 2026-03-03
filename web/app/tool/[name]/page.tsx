import { getReportByToolName, displayGrade } from "@/lib/data";
import { GradeProgressRing } from "@/lib/grades";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shield, ExternalLink, CheckCircle2 } from "lucide-react";
import { CopyBadgeButton } from "./CopyBadgeButton";

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
          <div className="flex flex-wrap items-center gap-2">
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
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
        <h2 className="border-b border-zinc-800 px-5 py-4 text-lg font-semibold text-zinc-100">
          Security Findings ({report.findings?.length ?? 0})
        </h2>
        {!hasFindings ? (
          <div className="flex flex-col items-center justify-center border-t border-zinc-800/50 bg-zinc-900/30 py-16 text-center">
            <CheckCircle2 className="mb-3 h-12 w-12 text-emerald-500" />
            <p className="text-lg font-medium text-zinc-100">
              Zero Security Risks Detected
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              No findings in this scan. Safe for production use.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-zinc-800">
            {report.findings!.map((f, i) => (
              <li
                key={i}
                className="border-b border-zinc-800 bg-zinc-900/50 p-5 last:border-0"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded px-2 py-1 text-xs font-bold uppercase ${severityBadgeClass(f.severity)}`}
                    >
                      {f.severity}
                    </span>
                    <span className="font-semibold text-zinc-100">
                      {f.title}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500">{f.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500">
                    <span>
                      Rule: <code className="rounded bg-zinc-800 px-1 py-0.5 text-zinc-400">{f.id}</code>
                    </span>
                    {f.recommendation && (
                      <span>
                        Recommendation: {f.recommendation}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Badge */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
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
