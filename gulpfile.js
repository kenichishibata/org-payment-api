var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task('lint', function() {
  return gulp.src(['./*.js','routes/*.js','config/*.js','controller/*.js','libs/*.js','services/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
