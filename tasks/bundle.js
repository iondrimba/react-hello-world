var gulp = require('gulp');
var webpack = require('gulp-webpack');
var stream = require('webpack-stream');
var webpackConfig = require("../webpack.config.js");

module.exports = function() {
	return gulp.src('src/scripts/app.jsx')
		.pipe(webpack(require('../webpack.config.js')))
		.pipe(gulp.dest('public/js/'));
};