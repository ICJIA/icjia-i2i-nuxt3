/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const axios = require("axios");
const jsonfile = require("jsonfile");
const _ = require("lodash");
const API = "https://r3.icjia-api.cloud";

const query = `query {
 posts {
    id
    title
    created_at
    updated_at
    slug
    summary
    category
    searchMeta
    published_at
    dateOverride
    tags {
      title
      slug
    }
    
    splash {
      name
      caption
      alternativeText
      url
      formats
    }
  }
}`;
