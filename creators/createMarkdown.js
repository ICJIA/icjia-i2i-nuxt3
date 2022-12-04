/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const jsonfile = require("jsonfile");
const _ = require("lodash");
const API = "https://r3.icjia-api.cloud";
const yaml = require("yaml");
const fsExtra = require("fs-extra");

const contentDir = path.join(__dirname, "../content");
fsExtra.emptyDirSync(contentDir);
console.log("Content directory cleared");

const SITE_URL = "https://i2i.icjia.dev";

const siteContent = [];

const query = `query {
    pages {
      data {
        id
        attributes {
          title
          slug
          summary
          body
          section
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }`;

function formatMarkdown(content) {
  const { body } = content;
  delete content.body;
  return `---\n${yaml.stringify(content)}---\n\n${body}\n`;
}

axios
  .create({ baseURL: API })
  .post("/graphql", {
    query,
    validateStatus: (status) => status === 200,
    headers: {
      "Accept-Encoding": "application/json",
    },
  })
  .then((res) => {
    const pages = res.data.data.pages.data;

    let section;
    const site = pages.map((page) => {
      const obj = { ...page };
      obj.attributes.draft = false;
      obj.attributes.description = page.attributes.summary;
      obj.attributes.navigation = true;
      if (page.attributes.section !== "root") {
        section = page.attributes.section.toLowerCase();
        obj.attributes.path = `/${section}/${page.attributes.slug}`;
        obj.attributes.url = `${SITE_URL}${obj.attributes.path}`;
      } else {
        obj.attributes.path = `/${page.attributes.slug}`;
        obj.attributes.url = `${SITE_URL}${obj.attributes.path}`;
      }

      if (page.attributes.slug === "index") {
        obj.attributes.path = `/`;
        obj.attributes.url = `${SITE_URL}`;
      }

      console.log("Markdown content created: ", obj.attributes.path);
      return obj;
    });

    jsonfile.writeFileSync(`./public/site.json`, site, function (err) {
      if (err) {
        console.error(err);
      }
      console.log("site.json created in /public/");
    });

    const searchIndex = site.map((page) => {
      const obj = { ...page.attributes };
      obj.id = page.id;
      return obj;
    });

    jsonfile.writeFileSync(
      `./public/searchIndex.json`,
      searchIndex,
      function (err) {
        if (err) {
          console.error(err);
        }
        console.log("site.json created in /public/");
      }
    );

    site.forEach((page) => {
      if (page.attributes.section === "root") {
        section = "";
      } else {
        section = page.attributes.section.toLowerCase();
      }

      const basename = page.attributes.slug;
      const filePath = path.join(contentDir, `${section}/${basename}.md`);
      const directoryPath = path.join(contentDir, `${section}`);
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
      }

      const content = formatMarkdown(page.attributes);
      // console.log(content);
      fs.writeFileSync(filePath, content);
    });
  });
