import type { MetadataRoute } from "next";
import { getAllReports } from "@/lib/data";

const siteUrl = "https://www.tooltrust.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/methodology`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const toolPages: MetadataRoute.Sitemap = getAllReports().map((report) => ({
    url: `${siteUrl}/tool/${report.tool_id}`,
    lastModified: report.scan_date ? new Date(report.scan_date) : new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages];
}
