var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('css', function () {
    gulp.src([
    	'newCss/lib/*.css',
    	'newCss/core-style.css',
    	'newCss/slidea.css',
    	'newCss/default.css',
    	'newCss/poiret-one.css',
    	'newCss/style.css'
	])
    .pipe(cssmin())
    .pipe(concat('styless.min.css'))
    .pipe(gulp.dest('newCss'));
});
