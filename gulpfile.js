global.$ = {
  gulp: require('gulp'),
  package: require('./package.json'),
  config: require('./gulp/config.js'),
  path: {
    task: require('./gulp/path/task.js'),
    libs: require('./gulp/path/libs.js'),
  },
  del: require('del'),
  jpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'del',
  'sprite:svg',
  $.gulp.parallel(
    'cache',
    'sass',
    'css:libs',
    'js:libs',
    'copy:js',
    'copy:img',
    'copy:fonts',
    'pug'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));