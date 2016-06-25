var gulp = require('gulp');
var requerDir = require('require-dir');
var browserSync = require('browser-sync');


browserSync.create('app');

requerDir('gulp');


gulp.task('default', ['watch']);
