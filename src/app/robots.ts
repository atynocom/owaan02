import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
        ],
        allow: ["/", "/llms.txt", "/#products", "/#architecture", "/#faq"],
      },
    ],
    sitemap: "https://owaan.com/sitemap.xml",
    host: "https://owaan.com",
  };
}
