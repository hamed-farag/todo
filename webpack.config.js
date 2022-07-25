const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

function getCurrentEnv() {
  if (process.env.NODE_ENV === "development") {
    return "./.env";
  }

  return "./.env.production";
}

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: { path: path.join(__dirname, "dist"), filename: "index.bundle.js", publicPath: "/" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@helpers": path.join(__dirname, "src/helpers"),
      "@configs": path.join(__dirname, "src/configs"),
      "@interfaces": path.join(__dirname, "src/interfaces"),
      "@services": path.join(__dirname, "src/services"),
      "@components": path.join(__dirname, "src/components"),
      "@utils": path.join(__dirname, "src/utils"),
      "@styles": path.join(__dirname, "src/styles"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv({
      path: getCurrentEnv(),
    }),
  ],
};
