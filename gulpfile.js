'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass:build', function() {
    return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/*.scss', ['sass:build']);
});

gulp.task('default', ['sass:build']);
