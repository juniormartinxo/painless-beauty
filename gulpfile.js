'use strict';

var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var htmlmin     = require('gulp-htmlmin');
var sass        = require('gulp-sass');
var cleanCSS    = require('gulp-clean-css');
var livereload  = require('gulp-livereload');
var runSequence = require('run-sequence');
var rename      = require('gulp-rename');

gulp.task('clean', function ()
{
    return gulp.src(['public/css', 'public/js'])
        .pipe(clean());
});

gulp.task('jshint', function ()
{
    return gulp.src('assets/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function ()
{
    return gulp.src(['assets/js/**/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(livereload());
});

gulp.task('uglify-jquery', function ()
{
    return gulp.src(['assets/vendor/js/jquery/*.js'])
        .pipe(concat('jquery.js'))
        .pipe(uglify())
        .pipe(concat('jquery.min.js'))
        .pipe(gulp.dest('public/js/vendor'))
        .pipe(livereload());
});

gulp.task('uglify-bootstrap', function ()
{
    return gulp.src([
        'assets/sass/vendor/bootstrap/js/dist/util.js',
        'assets/sass/vendor/bootstrap/js/dist/dropdown.js'
    ])
        .pipe(concat('bootstrap.js'))
        .pipe(uglify())
        .pipe(concat('bootstrap.min.js'))
        .pipe(gulp.dest('public/js/vendor'))
        .pipe(livereload());
});

gulp.task('uglify-canvasjs', function ()
{
    return gulp.src(['assets/vendor/js/canvasjs/*.js'])
        .pipe(concat('canvasjs.js'))
        .pipe(uglify())
        .pipe(concat('canvasjs.min.js'))
        .pipe(gulp.dest('public/js/vendor'))
        .pipe(livereload());
});

gulp.task('htmlmin', function ()
{
    return gulp.src('assets/views/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

gulp.task('sass', function ()
{
    return gulp.src('assets/sass/beauty.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('cssmin', function ()
{
    return gulp.src(['assets/sass/vendor/**/*.css', 'assets/css/**/*.css'])
        .pipe(cleanCSS())
        .pipe(concat('beauty.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(livereload());
});

gulp.task('watch', function ()
{
    livereload.listen();
    gulp.watch('assets/views/**/*.html', ['htmlmin']);
    gulp.watch('assets/js/**/*.js', ['uglify']);
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    gulp.watch('assets/sass/**/*.sass', ['sass']);
    gulp.watch('assets/css/**/*.css', ['cssmin']);
});

gulp.task('default', function (cb)
{
    return runSequence('clean', ['jshint', 'uglify', 'uglify-jquery', 'uglify-bootstrap', 'uglify-canvasjs', 'htmlmin', 'sass', 'cssmin', 'watch'], cb)
});