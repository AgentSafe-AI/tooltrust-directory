import type { MetadataRoute } from "next";
import { getAllReports } from "@/lib/data";

const siteUrl = "https://www.tooltrust.dev";

// Prerender the sitemap once at build time. Without this the route can be
// regenerated on every crawler request, re-reading all ~2k report files and
// counting against Vercel ISR reads. The sitemap only changes when a new build
// ships, so static generation is correct.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/methodology`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Reports change only when a tool is re-scanned (≈monthly), not daily.
  // Advertising "daily" invites crawlers (Google/Bing/AI bots) to recrawl all
  // ~2k tool pages every day, which dominated Vercel ISR read usage.
  // lastModified (from scan_date) still lets crawlers detect genuine changes.
  const toolPages: MetadataRoute.Sitemap = getAllReports().map((report) => ({
    url: `${siteUrl}/tool/${report.tool_id}`,
    lastModified: report.scan_date ? new Date(report.scan_date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages];
}
