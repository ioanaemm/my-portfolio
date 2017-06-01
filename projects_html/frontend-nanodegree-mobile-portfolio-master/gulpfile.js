const gulp = require('gulp');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const image = require('gulp-image');
const imageResize = require('gulp-image-resize');

gulp.task('compress_view_templates', function() {
  gulp
    .src('src/views/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('./views'))
});

gulp.task('compress_main_template', function() {
  gulp
    .src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('.'))
});

gulp.task('compress_css', function() {
  gulp
    .src('src/views/css/*.css')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('views/css'))
});

gulp.task('compress_scripts', function() {
  gulp
    .src('src/js/**/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    //.pipe(uglify())
    .pipe(gulp.dest('./views/js'))
});

gulp.task('build', function(callback) {
  runSequence(
    ['compress_view_templates', 'compress_main_template', 'compress_scripts', 'images_big', 'images_small', 'compress_css'],
    callback
  );
});

gulp.task('images_big', function () {
  gulp
    .src('img_src/**.*')
    .pipe(imageResize({
      width : 400,
      height : 400,
      crop : true,
      quality: 0,
      upscale : false,
    }))
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: false,
      jpegRecompress: true,
      jpegoptim: false,
      mozjpeg: true,
      gifsicle: false,
      svgo: false,
      concurrent: 10
    }))
    .pipe(gulp.dest('./views/images'));
});

gulp.task('images_small', function () {
  gulp
    .src('img_src/**.*')
    .pipe(imageResize({
      width : 50,
      height : 50,
      crop : true,
      quality: 0,
      upscale : false,
    }))
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: false,
      jpegRecompress: true,
      jpegoptim: false,
      mozjpeg: true,
      gifsicle: false,
      svgo: false,
      concurrent: 10
    }))
    .pipe(gulp.dest('./views/images_small'));
});
