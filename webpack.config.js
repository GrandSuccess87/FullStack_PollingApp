//config info for webpack
const path = require('path');

module.exports = {
  mode: "none",
  entry: path.resolve(__dirname, "./app-client.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "public/bundle.js"
  },
  module: {
    rules: [
      {
        exclude:/(node_modules|app-server.js)/,
        use: [
          {loader: "babel-loader"},
          // {
          //   loader: "eslint-loader",
            // options: {
            //   formatter: require("eslint/lib/formatters/stylish")
            // }
          // }
        ]
      }
    ]
  }
};
