const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EsiWebpackPlugin = require("esi-webpack-plugin");
const { cteHTML, ppeHTML, prodHTML } = require("./webpack-utils/htmlValues");

// environments: cte || ppe || prod
const environment = "prod";

function HTMLconfig() {
  if (environment === "cte") return cteHTML;
  else if (environment === "ppe") return ppeHTML;
  else if (environment === "prod") return prodHTML;
}

module.exports = {
  name:"australia",
  cache:false,
  target: "web",
  mode: "production",
  entry: "./src/index.js",
  stats: {},
  devServer: {
    headers: { "X-IKEA-M2": "global-devs-pastime-brooklyn-earnings" },
    // headers: { 'Cache-Control': 'no-cache,max-age=0,must-revalidate' },
    hot: true,
    port: 3009,
    open: false,
    // writeToDisk: true,
    // historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin(HTMLconfig()),
    new EsiWebpackPlugin({
      baseUrl: environment === "cte"? "https://cte.ikeadt.com": "https://www.ikea.com", 
      onError(src, err) {
        console.error(`Error when resolving ${src}: ${err}`);
      },
      processOptions: {
        headers: {
          "X-IKEA-M2": "global-devs-pastime-brooklyn-earnings",
        },
      },
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
};
