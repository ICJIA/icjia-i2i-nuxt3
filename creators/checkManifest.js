/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const jsonfile = require("jsonfile");
const fsExtra = require("fs-extra");

const directoryPath = path.join(`../public/manifests/content.json`);
if (fs.existsSync(directoryPath)) {
  console.log("content.json exists.");
} else {
  fs.writeFileSync(directoryPath, "{}");
  console.log("created content.json.");
}
