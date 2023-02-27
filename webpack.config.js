module.exports = {
  mode: 'development',
  entry: {
    dashboard: ['./src/app.js', './src/app.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
