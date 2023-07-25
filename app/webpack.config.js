// webpack.config.js (for separate config file)
const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main entry file for React
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};