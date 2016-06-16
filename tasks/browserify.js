var gulp = require('gulp');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var babelify = require("babelify");


module.exports = function() {
	var bundleStream = browserify('./src/scripts/app.jsx')
		.transform(babelify)
		.bundle();

	bundleStream
		.pipe(source('app.js'))
		.pipe(gulp.dest('./public/js'))
};