var path = require('path');
var webpack = require('webpack');

module.exports = {
	cache: true,
	debug: true,
	devtool: 'eval',
	entry: './src/scripts/app.jsx',
	output: {
		path: path.join(__dirname, "/js"),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};