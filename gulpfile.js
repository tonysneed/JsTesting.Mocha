'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

var WEB_PORT = 9000;

// Execute tests.
gulp.task('run-tests', function () {
  return gulp.src('test/**/*.js', { read: false })
    .pipe(mocha({ reporter: 'spec' }));
});

