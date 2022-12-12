import { createRequire } from "module";
import { createWriteStream } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const require = createRequire(import.meta.url);
const siteIndex = require("../public/siteMeta.json");

const sitemap = new SitemapStream({ hostname: `https://i2i.icjia.dev` });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

siteIndex.forEach((site) => {
  const url = `https://i2i.icjia.dev${site.path}`;
  sitemap.write({ url, changefreq: "weekly", priority: 0.3 });
});

sitemap.end();

console.log("Created: ./public/sitemap.xml");
