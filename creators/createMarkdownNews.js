/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const jsonfile = require("jsonfile");
const _ = require("lodash");

const yaml = require("yaml");

const contentDir = path.join(__dirname, "../content");
// fsExtra.emptyDirSync(contentDir);
// console.log("Content directory cleared");

const SITE_URL = process.env.NUXT_PUBLIC_BASE_URL;
const API = process.env.NUXT_PUBLIC_API_BASE_URL;

const query = `query {
    posts {
      data {
        id
        attributes {
          title
          slug
          hideFromSearch
          hideFromSitemap
          summary
          body
          showTableOfContents
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
    const posts = res.data.data.posts.data;

    let section;
    const site = posts.map((post) => {
      const obj = { ...post };
      let rawText;

      rawText = obj.attributes?.body
        ?.replace(/<[^>]*>?/gm, "")
        .replace(/[^a-z0-9]/gi, " ");
      rawText = rawText.replace(/\s\s+/g, " ");
      obj.attributes.rawText = rawText.toLowerCase();
      obj.attributes.draft = false;
      // obj.attributes.description = post.attributes.summary;
      obj.attributes.navigation = true;
      if (post.attributes.section !== "root") {
        section = post.attributes.section.toLowerCase();
        obj.attributes.path = `/${section}/${post.attributes.slug}`;
        obj.attributes.url = `${SITE_URL}${obj.attributes.path}`;
      } else {
        obj.attributes.path = `/${post.attributes.slug}`;
        obj.attributes.url = `${SITE_URL}${obj.attributes.path}`;
      }

      if (post.attributes.slug === "index") {
        obj.attributes.path = `/`;
        obj.attributes.url = `${SITE_URL}`;
      }

      console.log("Markdown posts content created: ", obj.attributes.path);
      return obj;
    });

    jsonfile.writeFileSync(`./public/posts.json`, site, function (err) {
      if (err) {
        console.error(err);
      }
      console.log("posts.json created in /public/");
    });

    const newsRoutes = site.map((post) => {
      return `/news/${post.attributes.slug}`;
    });

    jsonfile.writeFileSync(
      `./public/routesNews.json`,
      newsRoutes,
      function (err) {
        if (err) {
          console.error(err);
        }
      }
    );

    site.forEach((post) => {
      if (post.attributes.section === "root") {
        section = "";
      } else {
        section = post.attributes.section.toLowerCase();
      }

      const basename = post.attributes.slug;
      const filePath = path.join(contentDir, `${section}/${basename}.md`);
      const directoryPath = path.join(contentDir, `${section}`);
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
      }

      const content = formatMarkdown(post.attributes);
      // console.log(content);
      fs.writeFileSync(filePath, content);
    });
  });
