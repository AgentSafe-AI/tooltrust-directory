import fs from "fs";
import path from "path";
import type { RegistryReport, Report } from "./report-utils";
import {
  displayGrade as displayGradeUtil,
  keyFindingsSummary as keyFindingsSummaryUtil,
  findingEmoji as findingEmojiUtil,
  getBlockSnippet as getBlockSnippetUtil,
  getFindingNarrative as getFindingNarrativeUtil,
  getToolImpactLine as getToolImpactLineUtil,
  getToolNarrative as getToolNarrativeUtil,
} from "./report-utils";

export type { Report };
export type { RegistryReport };
export type { Finding, Summary } from "./report-utils";
export const displayGrade = displayGradeUtil;
export const keyFindingsSummary = keyFindingsSummaryUtil;
export const findingEmoji = findingEmojiUtil;
export const getBlockSnippet = getBlockSnippetUtil;
export const getFindingNarrative = getFindingNarrativeUtil;
export const getToolImpactLine = getToolImpactLineUtil;
export const getToolNarrative = getToolNarrativeUtil;

const REPORTS_DIR = "data/reports";
const MIN_PUBLIC_GITHUB_STARS = 50;

function getReportsDir(): string {
  const cwd = process.cwd();
  if (cwd.endsWith("web")) {
    return path.join(cwd, "..", REPORTS_DIR);
  }
  return path.join(cwd, REPORTS_DIR);
}

/**
 * Read and parse all JSON reports from data/reports/.
 * Incomplete scans (no tool definitions found) are excluded from the public
 * listing — they would show a misleading Grade A with zero findings.
 * They remain accessible via direct URL (/tool/[name]) where a warning banner
 * explains the scan was incomplete.
 */
export function getAllReports(): Report[] {
  const dir = getReportsDir();
  if (!fs.existsSync(dir)) {
    return [];
  }
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const reports: Report[] = [];
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const report = JSON.parse(raw) as Report;
      if (isPublicReport(report)) {
        reports.push(report);
      }
    } catch {
      // skip invalid files
    }
  }
  return reports;
}

function toRegistryReport(report: Report): RegistryReport {
  return {
    tool_id: report.tool_id,
    version: report.version,
    grade: report.grade,
    risk_score: report.risk_score,
    scan_date: report.scan_date,
    scanner: report.scanner,
    source_url: report.source_url,
    category: report.category,
    vendor: report.vendor,
    stars: report.stars,
    npm_package: report.npm_package,
    npm_downloads_monthly: report.npm_downloads_monthly,
    license: report.license,
    language: report.language,
    description: report.description,
    findings: (report.findings ?? []).map((finding) => ({ id: finding.id })),
    summary: report.summary,
    methodology: report.methodology,
    scan_incomplete: report.scan_incomplete,
  };
}

export function getAllRegistryReports(): RegistryReport[] {
  return getAllReports().map(toRegistryReport);
}

/**
 * Fetch a single report by tool_id (filename without .json).
 */
export function getReportByToolName(name: string): Report | null {
  const dir = getReportsDir();
  const file = path.join(dir, `${name}.json`);
  if (!fs.existsSync(file)) {
    return null;
  }
  try {
    const raw = fs.readFileSync(file, "utf-8");
    const report = JSON.parse(raw) as Report;
    return isPublicReport(report) ? report : null;
  } catch {
    return null;
  }
}

function isGithubBackedReport(report: Report): boolean {
  return typeof report.source_url === "string" && report.source_url.includes("github.com");
}

export function isPublicReport(report: Report): boolean {
  if (report.scan_incomplete) {
    return false;
  }
  if (isGithubBackedReport(report) && (report.stars ?? 0) < MIN_PUBLIC_GITHUB_STARS) {
    return false;
  }
  return true;
}
