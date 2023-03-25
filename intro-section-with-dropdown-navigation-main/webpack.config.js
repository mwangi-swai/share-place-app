const path = require("path");


module.exports = {
  mode: "development",
  entry: "./assets/src/index.js",
  // output:"bundle.js",
  devServer: {
    static: "./assets/src/",
    port: 3000,
    open: true,
  },
};