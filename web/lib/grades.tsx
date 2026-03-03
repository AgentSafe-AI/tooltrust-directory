import { Shield, Star } from "lucide-react";

const GRADE_META: Record<
  string,
  { label: string; emoji: string; color: string; bg: string; darkBg: string; darkText: string; stroke: string; ringText: string }
> = {
  S: {
    label: "S",
    emoji: "🌟",
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    darkBg: "bg-amber-500",
    darkText: "text-white",
    stroke: "stroke-amber-500",
    ringText: "text-amber-400",
  },
  A: {
    label: "A",
    emoji: "🟢",
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-200",
    darkBg: "bg-emerald-500",
    darkText: "text-white",
    stroke: "stroke-emerald-500",
    ringText: "text-emerald-400",
  },
  B: {
    label: "B",
    emoji: "🟡",
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    darkBg: "bg-blue-500",
    darkText: "text-white",
    stroke: "stroke-blue-500",
    ringText: "text-blue-400",
  },
  C: {
    label: "C",
    emoji: "🟠",
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-200",
    darkBg: "bg-yellow-500",
    darkText: "text-zinc-900",
    stroke: "stroke-yellow-500",
    ringText: "text-yellow-400",
  },
  D: {
    label: "D",
    emoji: "🔴",
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
    darkBg: "bg-orange-500",
    darkText: "text-white",
    stroke: "stroke-orange-500",
    ringText: "text-orange-400",
  },
  F: {
    label: "F",
    emoji: "⛔",
    color: "text-red-800",
    bg: "bg-red-100 border-red-300",
    darkBg: "bg-red-500",
    darkText: "text-white",
    stroke: "stroke-red-500",
    ringText: "text-red-400",
  },
};

export function GradeBadge({
  grade,
  size = "md",
  showEmoji = true,
  dark = false,
}: {
  grade: string;
  size?: "sm" | "md" | "lg";
  showEmoji?: boolean;
  dark?: boolean;
}) {
  const meta = GRADE_META[grade] ?? GRADE_META.A;
  const sizeClass =
    size === "sm"
      ? "text-sm px-2 py-0.5"
      : size === "lg"
        ? "text-xl px-4 py-2"
        : "text-base px-3 py-1";
  if (dark) {
    return (
      <span
        className={`inline-flex items-center gap-1 font-bold rounded-lg ${meta.darkBg} ${meta.darkText} ${sizeClass}`}
      >
        {showEmoji && grade === "S" && <Star className="h-3.5 w-3.5 fill-current" />}
        <span>{meta.label}</span>
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1 font-bold rounded border ${meta.bg} ${meta.color} ${sizeClass}`}
    >
      {showEmoji && <span>{meta.emoji}</span>}
      <span>{meta.label}</span>
    </span>
  );
}

export function GradeShield({
  grade,
  className = "",
}: {
  grade: string;
  className?: string;
}) {
  const meta = GRADE_META[grade] ?? GRADE_META.A;
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-2 ${meta.bg} ${meta.color} ${className}`}
    >
      <Shield className="w-12 h-12 mb-1 opacity-80" strokeWidth={1.5} />
      <span className="text-4xl font-bold">{meta.label}</span>
      {grade === "S" && (
        <span className="flex items-center gap-0.5 text-lg mt-0.5">
          <Star className="w-4 h-4 fill-current" /> Perfect
        </span>
      )}
    </div>
  );
}

/** Dark-mode circular progress ring: grade letter + score (e.g. B 23/100). */
export function GradeProgressRing({
  grade,
  score,
  maxScore = 100,
  className = "",
}: {
  grade: string;
  score: number;
  maxScore?: number;
  className?: string;
}) {
  const meta = GRADE_META[grade] ?? GRADE_META.A;
  const pct = Math.min(100, Math.round((score / maxScore) * 100));
  const circumference = 2 * Math.PI * 45;
  const strokeDash = (pct / 100) * circumference;
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg className="h-32 w-32 -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="stroke-zinc-800"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - strokeDash}
          strokeLinecap="round"
          className={meta.stroke}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-bold ${meta.ringText}`}>
          {grade}
        </span>
        <span className="mt-1 text-sm text-zinc-400 font-mono">
          {score}/{maxScore}
        </span>
      </div>
    </div>
  );
}

export { GRADE_META };
