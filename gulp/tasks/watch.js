module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./app/sprite/**/*.svg', $.gulp.series('sprite:svg'));
    $.gulp.watch('./app/style/**/*.+(sass|scss)', $.gulp.series('sass'));
    $.gulp.watch('./app/js/**/*.js', $.gulp.series('copy:js'));
    $.gulp.watch('./app/img/**/*.*', $.gulp.series('copy:img'));
    $.gulp.watch('./app/fonts/**/*.*', $.gulp.series('copy:fonts'));
    $.gulp.watch('./app/temp/**/*.pug', $.gulp.series('pug'));
  });
}