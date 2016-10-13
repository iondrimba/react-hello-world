var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	// cache: true,
	debug: true,
	devtool: 'eval',
	entry: './src/scripts/app.jsx',
	output: {
		path: path.join(__dirname, '/public/js'),
		publicPath: './public/js', // instead of publicPath: '/build/' 
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
	devServer: {
		contentBase: './public/',
		inline: true
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true
			},
			comments: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
};