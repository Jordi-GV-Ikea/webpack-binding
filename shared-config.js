const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EsiWebpackPlugin = require("esi-webpack-plugin");
const { cteHTML, ppeHTML, prodHTML } = require("./webpack-utils/htmlValues");

// environments: cte || ppe || prod
const environment = "cte";

function HTMLconfig() {
  if (environment === "cte") return cteHTML;
  return prodHTML;
}

module.exports = function configureConfig(marketValues) {
  return {
    name: marketValues.REACT_APP_MARKET_NAME,
    cache: false,
    target: "web",
    mode: "production",
    entry:marketValues.entry,
    stats: {},
    devServer: {
      headers: { "X-IKEA-M2": "global-devs-pastime-brooklyn-earnings" },
      hot: true,
      port: marketValues.REACT_APP_PORT,
      open: false,
      // writeToDisk: true,
      // historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin(HTMLconfig()),
      new EsiWebpackPlugin({
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
      filename: marketValues.filename,
      path: path.resolve(__dirname, marketValues.build),
      clean: true,
    },
  };
};

// baseUrl: environment === "cte"? "https://cte.ikeadt.com": "https://www.ikea.com",
