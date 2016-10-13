'use strict';

let gulp = require('gulp');
let gulpsync = require('gulp-sync')(gulp);

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

// Default Task
gulp.task('default', gulpsync.sync(['scsslint', 'sass', 'bundle', 'browser-sync', 'watch']));

gulp.task('deploy', gulpsync.sync(['scsslint', 'sass', 'browserify', 'minify-css', 'post-css']));