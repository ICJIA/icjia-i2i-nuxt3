import { createRequire } from "module";
import * as dotenv from "dotenv";
const require = createRequire(import.meta.url);
const { v4: uuidv4 } = require("uuid");
const jsonfile = require("jsonfile");
const pageRoutes = require("../public/routesPages.json");

dotenv.config();
// const posts = require("../public/posts.json");

// const siteRoutes = [...pages, ...posts];

const manualRoutes = ["/search", "/translate", "/contact"];

const appRoutes = Array.from(new Set([...pageRoutes, ...manualRoutes]));

// const  = [...pageRoutes, ...manualRoutes];

jsonfile.writeFileSync(`public/appRoutes.json`, appRoutes, function (err) {
  if (err) {
    console.error(err);
  }
});

jsonfile.writeFileSync(`assets/json/appRoutes.json`, appRoutes, function (err) {
  if (err) {
    console.error(err);
  }
});

console.log("public/appRoutes.json created:\n", appRoutes);
