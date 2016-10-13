var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
	gulp.watch('./src/scripts/**/*.jsx', ['eslint', 'bundle']),
		gulp.watch('./src/scss/**/*.scss', ['sass', 'scsslint']);
};