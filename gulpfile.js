var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    del           = require('del'),
    concat        = require('gulp-concat'),
    browserSync   = require('browser-sync').create(),
    paths         = require('./gulp/dependencies.js');


// STATIC

gulp.task('clean', function(){
  del("./dist")
});

gulp.task('images', function(){
  gulp.src(paths.images, { base: './app/assets/images' })
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('hosts', function(){
  gulp.src(paths.hosts)
    .pipe(gulp.dest('./dist/'));
});

gulp.task('fonts', function(){
  gulp.src(paths.fonts)
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('html', function(){
  gulp.src(paths.filesToMove, { base: './app' })
    .pipe(gulp.dest('./dist'));
});

// STYLES

gulp.task('sass', function(){
  gulp.src(paths.sass.toCompile)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('vendor-css', function(){
  gulp.src(paths.vendorCSS)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/css'));
});

// SERVER

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: './dist',
      proxy: '192.168.1.103'
    }
  });

  gulp.watch(paths.sass.toWatch, ['sass']).on('change', browserSync.reload);
  gulp.watch(paths.filesToMove, ['html']).on('change', browserSync.reload);
});

gulp.task('default', [
  'clean',
  'vendor-css',
  'sass',
  'html',
  'fonts',
  'images',
  'hosts'
]);

gulp.task('build', ['default']);
gulp.task('serve', ['default', 'server']);
