const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './dist/alertui.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'index.html'
    }),
  ],
  output: {
    library: 'ui',
    filename: 'alertui.min.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
};