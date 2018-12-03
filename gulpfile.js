var gulp = require('gulp');
var sass = require('gulp-sass');
var bUglify = require('gulp-uglify');
var server = require('gulp-webserver');
var bCss = require('gulp-clean-css');
// console.log(server())
//编译scss
gulp.task('begin', function() {
    return gulp.src(['./src/**/*.scss', '!./src/scss/_mixin.scss', '!./src/scss/common.scss'])
        .pipe(sass())
        .pipe(bCss())
        .pipe(gulp.dest('./src/css'));
});
//监听事件
gulp.task('watch', gulp.series('./src/css', gulp.watch('begin')));
//压缩js
gulp.task('ligy', function() {
    return gulp.src('./src/js/index.js')
        .pipe(bUglify())
        .pipe(gulp.dest('./src/js'));
});
//起服务
gulp.task('Wserver', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 8989,
            midderware: function(req, res, next) {

            }
        }))
});