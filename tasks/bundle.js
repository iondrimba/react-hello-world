var gulp = require('gulp');
var webpack = require('gulp-webpack');

module.exports = function() {
	return gulp.src('src/scripts/app.jsx')
		.pipe(webpack(require('../webpack.config.js')))
		.pipe(gulp.dest('public/js/'));
};