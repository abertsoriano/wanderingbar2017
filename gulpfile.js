var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('css'));
});
