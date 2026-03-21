import fs from "fs";
import path from "path";
import type { Report } from "./report-utils";
import {
  displayGrade as displayGradeUtil,
  keyFindingsSummary as keyFindingsSummaryUtil,
  findingEmoji as findingEmojiUtil,
} from "./report-utils";

export type { Report };
export type { Finding, Summary } from "./report-utils";
export const displayGrade = displayGradeUtil;
export const keyFindingsSummary = keyFindingsSummaryUtil;
export const findingEmoji = findingEmojiUtil;

const REPORTS_DIR = "data/reports";

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
      if (!report.scan_incomplete) {
        reports.push(report);
      }
    } catch {
      // skip invalid files
    }
  }
  return reports;
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
    return JSON.parse(raw) as Report;
  } catch {
    return null;
  }
}

