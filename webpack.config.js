const path = require('path');

module.exports = {
  entry: './src/alertui.ts',
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: 'ui',
    filename: 'alertui.js',
    path: path.resolve(__dirname, 'dist'),
  },
};