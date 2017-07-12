var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('resources/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('resources/css/'));
});

gulp.task('watch', function(){
    gulp.watch('resources/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);