// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.zeynepdundar.me/",
      lastModified: new Date(),
    },
  ];
}
