module.exports = {
  mode: 'development',
  entry: ['./src/app.js', './src/app.css'],
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
