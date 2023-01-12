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

// check to see if .env file exists

// const envPath = path.join(__dirname, "../.env1");
// try {
//   if (fs.existsSync(envPath)) {
//     console.log("SUCCESS: .env found.");
//   }
// } catch (err) {
//   console.log(
//     "ERROR: .env file not detected. Please create a .env file in the root directory of the project. See .env.example for an example of the .env file."
//   );
//   console.error(err);
// }
