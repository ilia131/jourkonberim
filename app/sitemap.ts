import type { MetadataRoute } from "next";

// Until tour inventory is verified, avoid publishing demonstration offer URLs.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://joorkonberim.ir/",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
