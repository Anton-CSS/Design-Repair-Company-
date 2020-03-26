const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const rename =  require ("gulp-rename");
const tinypng = require('gulp-tinypng-compress');


// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

// Minify and rename CSS files
function buildCSS(done) {
  src("./src/css/**/**.css")
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest("./dist/css/")); 
  done();
};

function buildJS(done) {
  src(["./src/js/**.js", "!./src/js/**.min.js"])
    .pipe(minify({ext:{
        min:'.js'
      },
      noSource: true
  }))
    .pipe(dest("./dist/js/"));
  src("./src/js/**.min.js")
    .pipe(dest("./dist/js/"));
  done();
};


function html(done){
src('**.html').pipe(htmlmin({ collapseWhitespace: true }))
              .pipe(dest('dist/'));
done();
}

function php(done){
  src(['**.php',])
 .pipe(dest('dist/'));
  src('phpmailer/**/**' )
  .pipe(dest('dist/phpmailer/'));
  done();
}

function fonts(done){
  src('/src/fonts/**/**')
  .pipe(dest('dist/'));
  done();
}

function imagemin(done) {
  src("./src/img/**/*.{png,jpg,jpeg}")
    .pipe(tinypng({ key: 'tbmfHRF8gkcZwTdLPZKgkwYxYG94xNLd ', }))
    .pipe(dest("./dist/img/"));
  src("./img/**/*.svg")
    .pipe(dest("./dist/img/"));
  done();
}

exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);