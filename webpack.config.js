module.exports = {
  entry: "./tsDist/app.js",
  output: {
    filename: "out.js",
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
    ],
  },
}
