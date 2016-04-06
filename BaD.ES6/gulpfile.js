var gulp = require('gulp')
var jspm = require('gulp-jspm-build')

gulp.task('jspm', function() {
  jspm({
    bundleOptions: {
      minify: true,
      mangle: true
    },
    bundles: [
      { src: 'app/main.js', dst: 'app.js'}
    ]
  })
  .pipe(gulp.dest('.dist'))
})
