'use strict';

var browserSync  = require('browser-sync').create();
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src('app/styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('static'))
    .pipe(browserSync.stream());
});
