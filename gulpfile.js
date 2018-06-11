var gulp = require('gulp');

var uglify = require('gulp-uglify');

var minCss = require('gulp-clean-css');

var sass = require('gulp-sass');

var server = require('gulp-webserver')

gulp.task('taskJs', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('bulid/js'))
})

gulp.task('css', function() {
    gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('bulid/css'))
})

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true,
            middlware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                pathname = pathname === '/' ? '/index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
            }
        }))
})