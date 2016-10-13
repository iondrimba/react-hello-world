var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {
	browserSync.init({
		server: "./public"
	});

	gulp.watch("./public/css/app.css").on('change', browserSync.reload);
	gulp.watch("./public/js/bundle.js").on('change', browserSync.reload);
};