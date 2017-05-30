var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var path = require('path');

gulp.task('build-css', function() {
    gulp.src([
        // dependencies
        // 'bower_components/reset-css/_reset.scss',
        'app/sass/main.scss',
    ])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('default', function() {
    // gulp.watch('app/**/*.js', ['build-js-app']);
    gulp.watch(['app/**/*.scss'], ['build-css']);
});