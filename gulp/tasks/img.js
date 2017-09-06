module.exports = function () {
  $.gulp.task('copy:img', function () {
    return $.gulp.src('app/img/**/*.*')
      .pipe($.gp.cache($.gp.imagemin([
        $.gp.imagemin.gifsicle({
          interlaced: true
        }),
        $.gp.imagemin.jpegtran({
          progressive: true
        }),
        $.jpegRecompress({
          loops: 5,
          min: 65,
          max: 70,
          quality: 'medium'
        }),
        $.gp.imagemin.svgo(),
        $.gp.imagemin.optipng({
          optimizationLevel: 9
        }),
        $.pngquant({
          quality: '65-70',
          speed: 5
        })
      ], {
        verbose: true
      })))
      .pipe($.gulp.dest($.config.root + '/img'));
  });
};