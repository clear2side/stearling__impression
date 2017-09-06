module.exports = function () {
  $.gulp.task('copy:fonts', function () {
    return $.gulp.src('./app/fonts/**/*.*')
      .pipe($.gulp.dest($.config.root + '/fonts'))
  });
}