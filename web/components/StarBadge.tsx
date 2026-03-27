import Image from "next/image";

const scannerRepoUrl = "https://github.com/AgentSafe-AI/tooltrust-scanner";
const starBadgeUrl =
  "https://img.shields.io/github/stars/AgentSafe-AI/tooltrust-scanner?style=flat-square&label=Star%20ToolTrust&color=f59e0b&labelColor=18181b";

export function StarBadge({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={`${scannerRepoUrl}/stargazers`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1.5 text-amber-100 transition hover:border-amber-300/50 hover:bg-amber-300/15 ${className}`}
    >
      {!compact && (
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-amber-300/80">
          GitHub
        </span>
      )}
      <Image
        src={starBadgeUrl}
        alt="Star ToolTrust on GitHub"
        width={compact ? 132 : 154}
        height={20}
        unoptimized
        className="h-5 w-auto"
      />
    </a>
  );
}
