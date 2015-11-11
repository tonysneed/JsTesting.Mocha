var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    bable = require('gulp-babel'),
    mocha = require('gulp-mocha'),
    sourcemaps = require('gulp-sourcemaps'),
    es6Path = 'es6/*.js',
    compilePath = 'es5';

var es6Path = 'src/*.js';
var compilePath = 'dist';
var sourceMapsPath = '../source_maps';

gulp.task('run-tests', function () {
  return gulp.src('test/**/*.js', { read: false })
    .pipe(mocha({ reporter: 'spec' }));
});

// gulp.task('babel', function () {
//     gulp.src([es6Path])
//         .pipe(babel())
//         .pipe(gulp.dest(compilePath));
// });

// gulp.task('babel', function () {
//     return gulp.src(['**/*.es6'])
//         .pipe(sourcemaps.init())
//         .pipe(babel())
//         .pipe(sourcemaps.write(sourceMapsPath))
//         .pipe(gulp.dest(compilePath));
// });

gulp.task('babel', function () {
    return gulp.src([es6Path])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(bable())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(compilePath));
});
