'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static server
gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});
