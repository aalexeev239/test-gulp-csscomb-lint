var gulp = require('gulp');
var csscomb = require('gulp-csscomb');
var lint = require('gulp-csscomb-lint');

gulp.task('comb', function() {
  return gulp.src('test.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./build'));
});

gulp.task('lint', function() {
  return gulp.src(['wrong.css', './build/*.css'])
    .pipe(lint());
});

gulp.task('default', ['comb', 'lint']);

