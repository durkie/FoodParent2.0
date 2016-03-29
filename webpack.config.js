module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "foodparent.js",
    path: __dirname + "/dist",
  },
  resolve: {
    // Absolute path that contains modules
    root: __dirname,
    // Directory names to be searched for modules
    modulesDirectories: ['lib', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
      //{ test: /\.png$/, loader: "url-loader?limit=100000" },
      //{ test: /\.jpg$/, loader: "file-loader" }
    ],
  },
}
