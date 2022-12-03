import CryptoES from "crypto-es";

function Thumbor(securityKey, thumborServerUrl) {
  "use strict";
  this.THUMBOR_SECURITY_KEY = securityKey;
  this.THUMBOR_URL_SERVER = thumborServerUrl;
  this.imagePath = "";
  this.width = 0;
  this.height = 0;
  this.smart = false;
  this.fitInFlag = false;
  this.withFlipHorizontally = false;
  this.withFlipVertically = false;
  this.halignValue = null;
  this.valignValue = null;
  this.cropValues = null;
  this.meta = false;
  this.filtersCalls = "";
}

Thumbor.prototype = {
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom",
  RIGHT: "right",
  CENTER: "center",
  LEFT: "left",
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
   * Set path of image
   * @param {String} imagePath [description]
   */
  setImagePath: function (imagePath = "https://test.test") {
    this.imagePath =
      imagePath.charAt(0) === "/"
        ? imagePath.substring(1, imagePath.length)
        : imagePath;
    return this;
  },
  buildUrl: function () {
    return "test";
  },
};

export { Thumbor };
