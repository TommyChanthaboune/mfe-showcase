const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3001,
  },
  entry: { mfeshell: __dirname + "/src/index.tsx" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "public"),
        ],
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfeShell",
      filename: "mfeShellEntry.js",
      remotes: {
        mfeCart: "mfeCart@[mfeCartUrl]/mfeCartEntry.js",
        mfeListing: "mfeListing@[mfeListingUrl]/mfeListingEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.9" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.5" },
        "framer-motion": { singleton: true, requiredVersion: "^6" },
        "@emotion/styled": { singleton: true, requiredVersion: "^11.0.0" },
        "@emotion/styled": { singleton: true, requiredVersion: "^11.0.0" },
        "@chakra-ui/react": { singleton: true, requiredVersion: "^2.1.2" },
      },
    }),

    new ExternalTemplateRemotesPlugin(),

    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
