var path = require("path");

module.exports = {
  entry: "./javascripts/main.js",
  output: {
    path: path.resolve(__dirname, "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env"]
          }
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", "*"]
  }
};
