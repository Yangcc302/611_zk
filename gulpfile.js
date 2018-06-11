var gulp = require('gulp'); //gulp 

var minCss = require('gulp-clean-css'); //  css

var sass = require('gulp-sass'); //压缩css

var web = require('gulp-webserver'); //起服务

var babel = require('gulp-babel');

var uglify = require('gulp-uglify'); //压缩js

gulp.task('css', function() { //压缩css
    gulp.src('bulid/css/*.css')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('dev/css'))
})
gulp.task('js', function() { //压缩js
    gulp.src('bulid/js/*.js')
        .pipe(uglify())
        .pipr(gulp.dest('dev/js'))
})
gulp.task('server', function() {
    gulp.src('bulid')
        .pipe(web({
            port: 8080,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/fcivon.ico') {
                    return false;
                }
                next();
            }
        }))
})