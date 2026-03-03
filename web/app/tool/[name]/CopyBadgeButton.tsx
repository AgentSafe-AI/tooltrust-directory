"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export function CopyBadgeButton({ snippet }: { snippet: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(snippet).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }}
      className="absolute right-2 top-2 flex items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs text-zinc-400 hover:border-zinc-600 hover:bg-zinc-700 hover:text-zinc-300"
    >
      <Copy className="h-3 w-3" /> {copied ? "Copied" : "Copy"}
    </button>
  );
}
