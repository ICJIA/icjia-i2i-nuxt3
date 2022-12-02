// const crypto = require("crypto-js");

import * as lib from "crypto-js";
import * as dotenv from "dotenv";
const crypto = lib.default; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const env = dotenv.config();
const key = env.parsed.NUXT_THUMBOR_KEY;

ThumborUrlBuilder.prototype = {
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom",

  RIGHT: "right",
  CENTER: "center",
  LEFT: "left",

  /**
   * Set path of image
   * @param {String} imagePath [description]
   */
  setImagePath: function (imagePath) {
    this.imagePath =
      imagePath.charAt(0) === "/"
        ? imagePath.substring(1, imagePath.length)
        : imagePath;
    return this;
  },
  /**
   * Converts operation array to string
   * @return {String}
   */
  getOperationPath: function () {
    const parts = this.urlParts();

    if (parts.length === 0) {
      return "";
    }

    return parts.join("/") + "/";
  },
  /**
   * Build operation array
   *
   * @TODO Should be refactored so that strings are generated in the
   * commands as opposed to in 1 massive function
   *
   * @return {Array}
   */
  urlParts: function () {
    if (!this.imagePath) {
      throw new Error("The image url can't be null or empty.");
    }

    const parts = [];

    if (this.meta) {
      parts.push("meta");
    }

    if (this.cropValues) {
      parts.push(
        this.cropValues.left +
          "x" +
          this.cropValues.top +
          ":" +
          this.cropValues.right +
          "x" +
          this.cropValues.bottom
      );
    }

    if (this.fitInFlag) {
      parts.push("fit-in");
    }

    if (
      this.width ||
      this.height ||
      this.withFlipHorizontally ||
      this.withFlipVertically
    ) {
      let sizeString = "";

      if (this.withFlipHorizontally) {
        sizeString += "-";
      }
      sizeString += this.width;

      sizeString += "x";

      if (this.withFlipVertically) {
        sizeString += "-";
      }
      sizeString += this.height;

      parts.push(sizeString);
    }

    if (this.halignValue) {
      parts.push(this.halignValue);
    }

    if (this.valignValue) {
      parts.push(this.valignValue);
    }

    if (this.smart) {
      parts.push("smart");
    }

    if (this.filtersCalls.length) {
      parts.push("filters:" + this.filtersCalls.join(":"));
    }

    return parts;
  },
  /**
   * Resize the image to the specified dimensions. Overrides any previous call
   * to `fitIn` or `resize`.
   *
   * Use a value of 0 for proportional resizing. E.g. for a 640 x 480 image,
   * `.resize(320, 0)` yields a 320 x 240 thumbnail.
   *
   * Use a value of 'orig' to use an original image dimension. E.g. for a 640
   * x 480 image, `.resize(320, 'orig')` yields a 320 x 480 thumbnail.
   * @param  {String} width
   * @param  {String} height
   */
  resize: function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  },

  smartCrop: function (smartCrop) {
    this.smart = smartCrop;
    return this;
  },
  /**
   * Resize the image to fit in a box of the specified dimensions. Overrides
   * any previous call to `fitIn` or `resize`.
   *
   * @param  {String} width
   * @param  {String} height
   */
  fitIn: function (width, height) {
    this.width = width;
    this.height = height;
    this.fitInFlag = true;
    return this;
  },
  /**
   * Flip image horizontally
   */
  flipHorizontally: function () {
    this.withFlipHorizontally = true;
    return this;
  },
  /**
   * Flip image vertically
   */
  flipVertically: function () {
    this.withFlipVertically = true;
    return this;
  },
  /**
   * Specify horizontal alignment used if width is altered due to cropping
   * @param  {String} halign 'left', 'center', 'right'
   */
  halign: function (halign) {
    console.log("halign: ", halign);
    if (
      halign === this.LEFT ||
      halign === this.RIGHT ||
      halign === this.CENTER
    ) {
      this.halignValue = halign;
    } else {
      throw new Error("Horizontal align must be left, right or center.");
    }
    return this;
  },
  /**
   * Specify vertical alignment used if height is altered due to cropping
   * @param  {String} valign 'top', 'middle', 'bottom'
   */
  valign: function (valign) {
    if (
      valign === this.TOP ||
      valign === this.BOTTOM ||
      valign === this.MIDDLE
    ) {
      this.valignValue = valign;
    } else {
      throw new Error("Vertical align must be top, bottom or middle.");
    }
    return this;
  },
  /**
   * Specify that JSON metadata should be returned instead of the thumbnailed
   * image.
   * @param  {Boolean} metaDataOnly [description]
   */
  metaDataOnly: function (metaDataOnly) {
    this.meta = metaDataOnly;
    return this;
  },
  /**
   * Append a filter, e.g. quality(80)
   * @param  {String} filterCall
   */
  filter: function (filterCall) {
    this.filtersCalls.push(filterCall);
    return this;
  },
  /**
   * Manually specify crop window.
   * @param  {Integer} left
   * @param  {Integer} top
   * @param  {Integer} right
   * @param  {Integer} bottom
   * @return {[type]}
   */
  crop: function (left, top, right, bottom) {
    if (left > 0 && top > 0 && right > 0 && bottom > 0) {
      this.cropValues = {
        left,
        top,
        right,
        bottom,
      };
    }
    return this;
  },
  /**
   * Combine image url and operations with secure and unsecure (unsafe) paths
   * @return {String}
   */
  buildUrl: function () {
    const operation = this.getOperationPath();

    if (this.THUMBOR_SECURITY_KEY) {
      let key = crypto.HmacSHA1(
        operation + this.imagePath,
        this.THUMBOR_SECURITY_KEY
      );
      key = crypto.enc.Base64.stringify(key);

      key = key.replace(/\+/g, "-").replace(/\//g, "_");

      return (
        this.THUMBOR_URL_SERVER + "/" + key + "/" + operation + this.imagePath
      );
    } else {
      return this.THUMBOR_URL_SERVER + "/unsafe/" + operation + this.imagePath;
    }
  },
};

export default ThumborUrlBuilder;

// const thumborURL = new ThumborUrlBuilder(key, "http://image.icjia.cloud");

// const url = thumborURL
//   .setImagePath(
//     "https://agency.icjia-api.cloud/uploads/i2i_small_transparent_a6cfd95a04.png"
//   )
//   .resize(50, 50)
//   .smartCrop(true)
//   .buildUrl();

// console.log(url);