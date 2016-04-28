module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.jade$/, loader: "raw!jade-html" },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.sass$/, loader: 'style!css!postcss!sass' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.(png|jpg|jpeg)$/, loader: 'file' },
      { test: /\.js$/, loader: 'babel?stage=1', exclude: [/client\/lib/, /node_modules/, /\.spec\.js/] }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};