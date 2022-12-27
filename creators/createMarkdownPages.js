/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const jsonfile = require("jsonfile");
const _ = require("lodash");

const yaml = require("yaml");

const contentDir = path.join(__dirname, "../content");

const SITE_URL = process.env.NUXT_PUBLIC_BASE_URL;
const API = process.env.NUXT_PUBLIC_API_BASE_URL;

const query = `query {
    pages {
      data {
        id
        attributes {
          title
          slug
          hideFromSearch
          hideFromSitemap
          showTableOfContents
          summary
          body
          section
          createdAt
          updatedAt
          publishedAt
          searchMeta
          
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
      let rawText;

      rawText = obj.attributes?.body
        ?.replace(/<[^>]*>?/gm, "")
        .replace(/[^a-z0-9]/gi, " ");
      rawText = rawText.replace(/\s\s+/g, " ");
      obj.attributes.rawText = rawText.toLowerCase();
      obj.attributes.draft = false;

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

    const pageRoutes = site.map((item) => {
      return `/${item.attributes.slug}`;
    });

    jsonfile.writeFileSync(
      `./public/routesPages.json`,
      pageRoutes,
      function (err) {
        if (err) {
          console.error(err);
        }
      }
    );

    jsonfile.writeFileSync(`./public/pages.json`, site, function (err) {
      if (err) {
        console.error(err);
      }
      console.log("pages.json created in /public/");
    });

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
      fs.writeFileSync(filePath, content);
    });
  });
