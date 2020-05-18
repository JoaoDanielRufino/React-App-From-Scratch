const path = require('path');

module.exports = {
  // Application entry point
  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  // This is used for browser debugging
  devtool: 'source-map',

  // Options related to how webpack emits results
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename :'bundle.js', // Output file name
    publicPath: '/'
  },

  // historyAPIFallback will redirect 404s to /index.html.
  devServer: {
    historyApiFallback: true,
    // Path to the public files in the application
    contentBase: path.resolve(__dirname, 'public')
  },

  resolve: {
    // Extensions used
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    // Adding the TypeScript loader
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader' 
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        exclude: /node_modules/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: 'react-svg-loader'
      }
    ]
  }
}