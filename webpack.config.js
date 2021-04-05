const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("./node_modules/webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    }),
  ],
};
