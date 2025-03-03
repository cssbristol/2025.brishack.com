import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const BASE_URL = "https://brishack.com/";

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/privacy", changefreq: "daily", priority: 1 },
  { url: "/terms&conditions", changefreq: "daily", priority: 1 },
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });

  const writeStream = createWriteStream(resolve("public", "sitemap.xml"));
  sitemapStream.pipe(writeStream);

  for (const page of pages) {
    sitemapStream.write(page);
  }

  sitemapStream.end();
  await streamToPromise(sitemapStream);

  console.log("Sitemap generated successfully!");
};

generateSitemap().catch(console.error);
