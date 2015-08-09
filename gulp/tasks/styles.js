var browserSync  = require('browser-sync').create();
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src("app/styles/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("static"))
    .pipe(browserSync.stream());
});
