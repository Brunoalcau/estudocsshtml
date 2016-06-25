var browserSync = require('browser-sync');
var gulp = require('gulp');
var watch = require('gulp-watch');

watch('./src/**/*.css', function(){
    browserSync.stream();
});

gulp.task('watch',function(){
    browserSync.get('app').init({
      server: {
        baseDir: './src'
      }
    });
});
