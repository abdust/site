'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const csso         = require('gulp-csso');
const uglify       = require('gulp-uglify');
const gzip         = require('gulp-gzip');
const plumber      = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync').create();

const path         = {
      html         : 'index.html',
      plugins      : 'assets/plugins/**/*.*',
      js           : 'assets/js/*.*',
      scss         : 'assets/scss/**/*.scss',
      img          : 'assets/img/**/*.+(png|jpg|gif|svg)'
};


/* =====================================================
    SCSS
    ===================================================== */

const scss = function() {
  return gulp.src( path.scss )
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso({
        restructure: false,
        sourceMap: true,
        debug: true
    }))
    .pipe(gulp.dest('assets/css/'))
    .pipe(gzip())
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
};


/* =====================================================
    JS
    ===================================================== */

const js = function() {
  return gulp.src( path.js )
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('assets/jsmin/'))
    .pipe(gzip())
    .pipe(gulp.dest('assets/jsmin/'))
    .pipe(browserSync.stream())
};


/* =====================================================
    BUILD
    ===================================================== */

// gulp.task('build', ['scss','js']);
const build = gulp.series(scss, js);
exports.build = build;



/* =====================================================
    WATCH
    ===================================================== */

// gulp.task('watch', ['build'], function() {
//   gulp.watch( path.html ).on('change', browserSync.reload)
//   gulp.watch( path.scss, ['scss'] ).on('change', browserSync.reload)
//   gulp.watch( path.js, ['js'] ).on('change', browserSync.reload)
//   gulp.watch( path.img ).on('change', browserSync.reload)
//   gulp.watch( path.plugins ).on('change', browserSync.reload)
//   browserSync.init({
//     server: {
//       baseDir: 'src/'
//     },
//     port: 8080
//   });
// });
const watcher = function() {
  gulp.watch(path.html);
  gulp.watch(path.scss, scss);
  gulp.watch(path.js, js);
  gulp.watch(path.img);
  gulp.watch(path.plugins);
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: 8080
  });
};


/* =====================================================
    TASKS
    ===================================================== */

exports.default = gulp.series(build, watcher);


/* =====================================================
    COMMANDS
    ===================================================== */

// gulp         : Development with watch
// gulp build  : Build
