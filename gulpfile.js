'use strict';

let gulp = require('gulp');
let gulpsync = require('gulp-sync')(gulp);

var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");

// using vinyl-source-stream:
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('eslint', require('./tasks/eslint.js'));

//scss lint task
gulp.task('scsslint', require('./tasks/scss-lint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//watch js/scss/teplate files
gulp.task('watch', require('./tasks/watch.js'));

//css min
gulp.task('minify-css', require('./tasks/minify-css.js'));

//post css
gulp.task('post-css', require('./tasks/post-css.js'));

//local server
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

//webpack bundle
gulp.task('bundle', require('./tasks/bundle.js'));

//webpack server
//gulp.task('server', require('./tasks/server.js'));

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if (err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/public/index.html");
	});
});

// Default Task
gulp.task('default', gulpsync.sync(['scsslint', 'sass', 'bundle', 'webpack-dev-server', 'watch']));

gulp.task('deploy', gulpsync.sync(['scsslint', 'sass', 'browserify', 'minify-css', 'post-css']));