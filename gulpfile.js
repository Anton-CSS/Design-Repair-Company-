const gulp = require('gulp');

gulp.task ('helo', function(done) {
console.log('Привет мир');
done(); 
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});