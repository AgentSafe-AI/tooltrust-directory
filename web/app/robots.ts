import type { MetadataRoute } from "next";

// Static — robots rules never change at runtime.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.tooltrust.dev/sitemap.xml",
    host: "https://www.tooltrust.dev",
  };
}
