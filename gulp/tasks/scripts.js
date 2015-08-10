var gulp        = require('gulp');
var gutil       = require('gulp-util');
var rename      = require('gulp-rename');
var source      = require('vinyl-source-stream');
var babelify    = require('babelify');
var watchify    = require('watchify');
var browserify  = require('browserify');
var browserSync = require('browser-sync').create();

watchify.args.debug = true;
var bundler = watchify(browserify('./app/scripts/main.js', watchify.args));

// Babel transform
bundler.transform(babelify.configure());

// On updates recompile
bundler.on('update', bundle);

function bundle() {

    gutil.log('Compiling JS...');

    return bundler.bundle()
        .on('error', function (err) {
            gutil.log(err.message);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(source('app/scripts/main.js'))
        .pipe(rename('scripts.js'))
        .pipe(gulp.dest('static'))
        .pipe(browserSync.stream({once: true}));
}

gulp.task('scripts', function () {
    return bundle();
});
