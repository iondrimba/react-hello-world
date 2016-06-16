var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
	gulp.watch('./src/react/**/*.jsx', ['eslint', 'scripts', 'concat', 'browserify']),
	gulp.watch('./src/scss/**/*.scss', ['sass', 'scsslint']);
};