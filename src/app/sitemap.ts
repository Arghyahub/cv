import type { MetadataRoute } from "next";
import allBlogs from "@/(articles)/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  // A verified public origin is needed for canonical sitemap URLs. Keep this
  // empty locally; the sitemap is populated automatically in production once
  // NEXT_PUBLIC_SITE_URL is configured.
  if (!siteUrl) return [];

  const blogEntries = allBlogs.flatMap((topic) =>
    topic.blogs.map((blog) => ({
      url: `${siteUrl}/blog/${encodeURIComponent(topic.topic)}/${encodeURIComponent(blog.title)}`,
      lastModified: toIsoDate(blog.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}

function toIsoDate(date: string) {
  const [day, month, year] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}
