var path = require('path');
module.exports = {
	module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
			}]
	},

  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
	},
	
};