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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react']
            }
          }
        ],
      }
    ]
  }
};
