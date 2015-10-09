var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task('lint', function() {
  return gulp.src(['./*.js','model/*.js','view/*.js','controller/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
