var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../webpack.config.js");
var stream = require('webpack-stream');

module.exports = function() {

	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		stats: {
			colors: true
		},
		devServer: {
			noInfo: false,
			inline: true
		}
	}).listen(8080, "localhost", function(err) {
		if (err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/public/index.html");
	});
};