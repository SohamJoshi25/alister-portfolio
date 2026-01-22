import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alisteraugustine.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://alisteraugustine.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://alisteraugustine.vercel.app/articles",
      lastModified: new Date(),
    },
    {
      url: "https://alisteraugustine.vercel.app/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://alisteraugustine.vercel.app/assignments",
      lastModified: new Date(),
    },
  ];
}
