const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3003,
  },
  entry: { mfelisting: __dirname + "/src/index.tsx" },
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
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: "mfeListing",
      filename: "mfeListingEntry.js",
      exposes: {
        "./App": "./src/App",
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
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
