/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const path = require("path");

const fsExtra = require("fs-extra");

const contentDir = path.join(__dirname, "../content");
fsExtra.emptyDirSync(contentDir);
console.log("Content directory cleared");

const publicDir = path.join(__dirname, "../public");

const PUBLIC_FILES_TO_REMOVE = [
  "appRoutes.json",
  "site.json",
  "sitemap.xml",
  "siteMeta.json",
  "routesPages.json",
  "pages.json",
];

PUBLIC_FILES_TO_REMOVE.forEach((fileName) => {
  fs.rmSync(`${publicDir}/${fileName}`, { force: true });
});

console.log("Files removed: ", PUBLIC_FILES_TO_REMOVE);
