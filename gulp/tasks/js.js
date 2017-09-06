module.exports = function () {
  $.gulp.task('copy:js', function () {
    return $.gulp.src('./app/js/*.js')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('main.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};