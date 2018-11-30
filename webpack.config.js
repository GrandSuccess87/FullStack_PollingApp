//config info for webpack
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, "src/dist/public");
const APP_DIR = path.resolve(__dirname, "./app-client.js");

module.exports = {
  mode: "none",
  //root js file for client, webpack will start here
  //APP module will get pulled into bundle.js as well
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    //file to create after preprocessing and packaging has ocurred
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|app-server.js)/,
        include: APP_DIR
        use: [
          {
            //babel-loader will convert JSX to JS readable by browser and ES6 to older JS readable by the broswer
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ],
      }
    ]
  }
};
