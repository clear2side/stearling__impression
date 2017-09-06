module.exports = function () {
  $.gulp.task('cache', function (done) {
    return $.gp.cache.clearAll(done);
  });
}