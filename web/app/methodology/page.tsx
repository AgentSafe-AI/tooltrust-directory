import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

type Block =
  | { type: "heading"; level: 1 | 2; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "rule"; id: string; title: string; sections: { label: string; text: string }[] };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function readMethodology() {
  const filePath = path.join(process.cwd(), "docs", "methodology.md");
  return fs.readFileSync(filePath, "utf8");
}

function parseTable(lines: string[], startIndex: number) {
  const headers = lines[startIndex]
    .split("|")
    .map((cell) => cell.trim())
    .filter(Boolean);
  const rows: string[][] = [];
  let index = startIndex + 2;

  while (index < lines.length && lines[index].includes("|")) {
    const row = lines[index]
      .split("|")
      .map((cell) => cell.trim())
      .filter(Boolean);
    if (row.length > 0) rows.push(row);
    index++;
  }

  return { block: { type: "table", headers, rows } as Block, nextIndex: index };
}

function parseRule(lines: string[], startIndex: number) {
  const heading = lines[startIndex].replace(/^###\s*/, "").trim();
  const [idPart, titlePart = ""] = heading.split("—").map((part) => part.trim());
  const sections: { label: string; text: string }[] = [];
  let index = startIndex + 1;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index++;
      continue;
    }
    if (lines[index].startsWith("### ") || lines[index].startsWith("## ")) break;
    const sectionMatch = line.match(/^\*\*(.+?):\*\*\s*(.+)$/);
    if (sectionMatch) {
      sections.push({ label: sectionMatch[1], text: sectionMatch[2] });
      index++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().replace(/^- /, ""));
        index++;
      }
      sections.push({ label: "Severity", text: items.join(" || ") });
      continue;
    }
    index++;
  }

  return {
    block: {
      type: "rule",
      id: slugify(idPart),
      title: titlePart,
      sections,
    } as Block,
    nextIndex: index,
  };
}

function parseMethodology(markdown: string) {
  const lines = markdown.split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const raw = lines[index];
    const line = raw.trim();

    if (!line || line === "---" || line.startsWith("*Scan methodology")) {
      index++;
      continue;
    }

    if (raw.startsWith("### AS-")) {
      const { block, nextIndex } = parseRule(lines, index);
      blocks.push(block);
      index = nextIndex;
      continue;
    }

    if (raw.startsWith("# ")) {
      const text = raw.replace(/^#\s*/, "").trim();
      blocks.push({ type: "heading", level: 1, text, id: slugify(text) });
      index++;
      continue;
    }

    if (raw.startsWith("## ")) {
      const text = raw.replace(/^##\s*/, "").trim();
      blocks.push({ type: "heading", level: 2, text, id: slugify(text) });
      index++;
      continue;
    }

    if (raw.includes("|") && lines[index + 1]?.includes("|")) {
      const { block, nextIndex } = parseTable(lines, index);
      blocks.push(block);
      index = nextIndex;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().replace(/^- /, ""));
        index++;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines = [line];
    index++;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (
        !next ||
        lines[index].startsWith("#") ||
        lines[index].startsWith("### AS-") ||
        next === "---" ||
        next.startsWith("- ") ||
        (lines[index].includes("|") && lines[index + 1]?.includes("|"))
      ) {
        break;
      }
      paragraphLines.push(next);
      index++;
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

function inlineMarkup(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-zinc-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={idx} className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-[0.95em] text-zinc-200">
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={idx}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 hover:underline"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export const metadata = {
  title: "Methodology | ToolTrust",
  description: "How ToolTrust grades MCP servers and what each AS rule detects.",
};

export default function MethodologyPage() {
  const blocks = parseMethodology(readMethodology());

  return (
    <div className="space-y-8">
      <nav className="text-sm text-zinc-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-zinc-400">
          Directory
        </Link>
        <span className="mx-1">/</span>
        <span className="text-zinc-400">Methodology</span>
      </nav>

      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50">
          ToolTrust Security Methodology
        </h1>
        <p className="max-w-3xl text-zinc-400">
          How ToolTrust grades MCP servers, what each AS rule detects, and why those findings matter.
        </p>
      </section>

      <article className="space-y-6">
        {blocks.map((block, index) => {
          if (block.type === "heading") {
            if (block.level === 1) return null;
            return (
              <section key={index} className="space-y-4">
                <h2 id={block.id} className="text-2xl font-semibold text-zinc-100">
                  {block.text}
                </h2>
              </section>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p key={index} className="max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base">
                {inlineMarkup(block.text)}
              </p>
            );
          }

          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-400">
                {block.items.map((item) => (
                  <li key={item}>{inlineMarkup(item)}</li>
                ))}
              </ul>
            );
          }

          if (block.type === "table") {
            return (
              <div key={index} className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      {block.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-medium text-zinc-400">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-zinc-800/80 last:border-0">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-zinc-300">
                            {inlineMarkup(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          if (block.type === "rule") {
            return (
              <section
                key={index}
                id={block.id}
                className="scroll-mt-24 rounded-xl border border-zinc-800 bg-zinc-900/80 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded bg-zinc-800 px-2 py-1 font-mono text-sm text-zinc-300">
                    {block.id.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-100">{block.title}</h3>
                </div>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-400">
                  {block.sections.map((section) => (
                    <div key={section.label}>
                      <p className="font-medium text-zinc-200">{section.label}</p>
                      {section.label === "Severity" ? (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {section.text.split(" || ").map((item) => (
                            <span
                              key={item}
                              className="rounded border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
                            >
                              {inlineMarkup(item)}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-1">{inlineMarkup(section.text)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          return null;
        })}
      </article>
    </div>
  );
}
