module.exports = function () {
  $.gulp.task('css:libs', function () {
    return $.gulp.src($.path.libs.cssLibs)
      .pipe($.gp.concatCss('cssLibs.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/css'))
  });
  $.gulp.task('js:libs', function () {
    return $.gulp.src($.path.libs.jsLibs)
      .pipe($.gp.concat('jsLibs.js'))
      .pipe($.gulp.dest($.config.root + '/js'))
  });
};