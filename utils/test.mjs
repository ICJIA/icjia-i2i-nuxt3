import ThumborUrlBuilder from "./thumbor-url-builder.mjs";
const key = "test";
const thumborURL = new ThumborUrlBuilder(key, "http://image.icjia.cloud");

const url = thumborURL
  .setImagePath(
    "https://agency.icjia-api.cloud/uploads/i2i_small_transparent_a6cfd95a04.png"
  )
  .resize(50, 50)
  .smartCrop(true)
  .buildUrl();

console.log(url);
