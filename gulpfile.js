'use strict';

var rimraf = require('rimraf');
var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

var processors = [
  autoprefixer({
    browsers: 'last 2 version'
  }),
  pxtorem({
    rootValue: 100,
    propWhiteList: []
  })
];
const outPath = "./build/css/lib";
const commLessPath = "./components/**/*.less";

gulp.task('compile', function() {
  rimraf.sync(outPath);
  return gulp.src(commLessPath)
    .pipe(postcss(processors))
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest(outPath));
});

gulp.task('dev', function() {
  return gulp.watch(commLessPath, function() {
    gulp.src(commLessPath)
      .pipe(less())
      .pipe(postcss(processors))
      .pipe(gulp.dest(outPath));
  });
    
});

gulp.task('build', ['compile']);