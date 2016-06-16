var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function() {
	return gulp.src(['./src/react/**/*.jsx'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
};