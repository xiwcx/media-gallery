var babel  = require('gulp-babel');
var gulp   = require('gulp');
var rename = require('gulp-rename');

gulp.task('scripts', function () {
  return gulp.src('app/scripts/*.js')
    .pipe(babel())
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('static'))
    .pipe(gulp.dest('dist'));
});
