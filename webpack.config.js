const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLconfig = require("./webpack-utils/templateHTML.config.js");

const output = {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "dist"),
  clean: true,
};

module.exports = {
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin(HTMLconfig())],
  output,
};
