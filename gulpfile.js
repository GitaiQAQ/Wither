var gulp = require("gulp");
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var watch = require('gulp-watch')
var connect = require('gulp-connect');
 
gulp.task('webserver', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('stylus', function() {
  gulp.src('stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('pug', function() {
    gulp.src('pug/index.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task("watch", function () {
    gulp.watch("stylus/**", ["stylus"]);
    gulp.watch("pug/**", ["pug"]);
})

gulp.task('default', ['webserver', 'watch']);