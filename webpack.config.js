//config info for webpack

module.exports = {
  entry: "./app-client.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    mode: none,
    rules: [
      {
        exclude:/(node_modules|app-server.js)/,
        loader: 'babel'
      }
    ]
  }
};
