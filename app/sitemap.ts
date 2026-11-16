import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/social";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/cardapio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: new Date("2026-11-16"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
