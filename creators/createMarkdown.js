/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const jsonfile = require("jsonfile");
const _ = require("lodash");
const API = "https://r3.icjia-api.cloud";
const yaml = require("yaml");
const fsExtra = require("fs-extra");
// const contentManifest = [];
// const previousContent = require("../public/manifests/content.json");

// console.log("previousContent", previousContent);

const contentDir = path.join(__dirname, "../content");

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
    pages.forEach((page) => {
      if (page.attributes.section !== "root") {
        section = page.attributes.section.toLowerCase();
        const directoryPath = path.join(contentDir, `${section}`);
        if (fs.existsSync(directoryPath)) {
          fsExtra.emptyDirSync(directoryPath);
          // console.log("section deleted: ", directoryPath);
        }
      } else {
        const filePath = path.join(contentDir, `${page.attributes.slug}.md`);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          // console.log("Root file deleted:", filePath);
        }
      }
    });
    jsonfile.writeFileSync(`../server/api/site.json`, pages, function (err) {
      if (err) {
        console.error(err);
      }
    });
    pages.forEach((page) => {
      if (page.attributes.section === "root") {
        section = "";
      } else {
        section = page.attributes.section.toLowerCase();
      }

      const basename = page.attributes.slug;
      // const section = page.attributes.section;
      const filePath = path.join(contentDir, `${section}/${basename}.md`);
      const directoryPath = path.join(contentDir, `${section}`);
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
      }
      // console.log("directoryPath", directoryPath);

      const content = formatMarkdown(page.attributes);
      fs.writeFileSync(filePath, content);
    });
  });
