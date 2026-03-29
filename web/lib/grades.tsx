import { Shield, Star } from "lucide-react";

const GRADE_META: Record<
  string,
  { label: string; emoji: string; color: string; bg: string; darkBg: string; darkText: string; stroke: string; ringText: string; glow: string }
> = {
  S: {
    label: "S",
    emoji: "🌟",
    color: "text-amber-300",
    bg: "bg-amber-400/10 border-amber-400/20",
    darkBg: "border border-amber-400/20 bg-amber-400/10",
    darkText: "text-amber-300",
    stroke: "stroke-[#d7b46a]",
    ringText: "text-[#d7b46a]",
    glow: "drop-shadow-[0_0_6px_rgba(215,180,106,0.16)]",
  },
  A: {
    label: "A",
    emoji: "🟢",
    color: "text-emerald-300",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    darkBg: "border border-emerald-400/20 bg-emerald-400/10",
    darkText: "text-emerald-300",
    stroke: "stroke-[#74b79a]",
    ringText: "text-[#74b79a]",
    glow: "drop-shadow-[0_0_6px_rgba(116,183,154,0.14)]",
  },
  B: {
    label: "B",
    emoji: "🟡",
    color: "text-sky-300",
    bg: "bg-sky-400/10 border-sky-400/20",
    darkBg: "border border-sky-400/20 bg-sky-400/10",
    darkText: "text-sky-300",
    stroke: "stroke-[#6ea6bb]",
    ringText: "text-[#6ea6bb]",
    glow: "drop-shadow-[0_0_6px_rgba(110,166,187,0.14)]",
  },
  C: {
    label: "C",
    emoji: "🟠",
    color: "text-amber-300",
    bg: "bg-amber-300/10 border-amber-300/20",
    darkBg: "border border-amber-300/20 bg-amber-300/10",
    darkText: "text-amber-300",
    stroke: "stroke-[#d9b65d]",
    ringText: "text-[#d9b65d]",
    glow: "drop-shadow-[0_0_6px_rgba(217,182,93,0.18)]",
  },
  D: {
    label: "D",
    emoji: "🔴",
    color: "text-orange-300",
    bg: "bg-orange-400/10 border-orange-400/20",
    darkBg: "border border-orange-400/20 bg-orange-400/10",
    darkText: "text-orange-300",
    stroke: "stroke-[#d18d5b]",
    ringText: "text-[#d18d5b]",
    glow: "drop-shadow-[0_0_6px_rgba(209,141,91,0.16)]",
  },
  F: {
    label: "F",
    emoji: "⛔",
    color: "text-rose-300",
    bg: "bg-rose-400/10 border-rose-400/20",
    darkBg: "border border-rose-400/20 bg-rose-400/10",
    darkText: "text-rose-300",
    stroke: "stroke-[#c97886]",
    ringText: "text-[#c97886]",
    glow: "drop-shadow-[0_0_6px_rgba(201,120,134,0.18)]",
  },
  "?": {
    label: "?",
    emoji: "⚠️",
    color: "text-zinc-400",
    bg: "bg-zinc-500/10 border-zinc-500/20",
    darkBg: "border border-zinc-500/20 bg-zinc-500/10",
    darkText: "text-zinc-300",
    stroke: "stroke-zinc-500",
    ringText: "text-zinc-400",
    glow: "",
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
      ? "text-xs px-2.5 py-1"
      : size === "lg"
        ? "text-xl px-4 py-2"
        : "text-sm px-3 py-1.5";
  if (dark) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-semibold rounded-md ${meta.darkBg} ${meta.darkText} ${sizeClass}`}
      >
        {showEmoji && grade === "S" && <Star className="h-3.5 w-3.5 fill-current" />}
        <span>{meta.label}</span>
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-md border ${meta.bg} ${meta.color} ${sizeClass}`}
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
          className="stroke-white/5"
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
          className={`${meta.stroke} ${meta.glow}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-semibold ${meta.ringText}`}>
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
