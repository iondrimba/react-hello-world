'use strict';
require('es6-promise').Promise;
let gulp = require('gulp');
let gulpsync = require('gulp-sync')(gulp);
let babel = require('gulp-babel');
let concat = require('gulp-concat');

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

gulp.task('scripts', function() {
	return gulp.src('./src/react/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('./src/scripts/'));
});

gulp.task('concat', function() {
	return gulp.src('./src/scripts/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./public/js/'));
});

// Default Task
gulp.task('default', gulpsync.sync(['scsslint', 'sass', 'scripts', 'concat', 'browserify', 'watch', 'browser-sync']));