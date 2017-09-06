module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('./app/style/*.+(sass|scss)')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({
        title: 'Style'
      }))
      .pipe($.gp.autoprefixer({
        browsers: $.config.autoprefixer
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.browserSync.stream());
  })
};