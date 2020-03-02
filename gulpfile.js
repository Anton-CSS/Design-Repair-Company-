const gulp = require('gulp');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css')

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('copy', function() {
  gulp.src ('./style.css')
  .pipe(rename( {suffix:'.min'} ))
  .pipe(cleanCSS({level: 2}))
  .pipe(gulp.dest('./'));
});