var fs = require("fs"),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    assign = require('lodash.assign'),
    notify = require('gulp-notify'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    eslint = require('gulp-eslint'),
    concat = require("gulp-concat"),
    order = require("gulp-order"),
    uglify = require("gulp-uglify");

var demo_config_list = ['demo', 'mui-demo', 'mui-demo-small'],
    project = 'mui-demo-small';

function browserSyncTask(callback) {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./src/" + project
        }
    });
    callback();
}

function jsTask(callback) {
    // Serve files from the root of this project
    browserSync.stream();
}

// js 合并
function jsConcatTask(callback) {
    var config = fs.readFileSync('src/' + project + '/concat/_concatConfig.json').toString();
    gulp
        .src('src/' + project + '/concat/*.js')
        .pipe(order(JSON.parse(config)))
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest('src/' + project + '/js'))
        .on('finish', callback);
}

// js 合并压缩
function jsUglifyTask(callback) {
    var f_path = ['src/' + project + '/js/bundle.js', 'src/' + project + '/js/app.js'];
    gulp
        .src(f_path)
        .pipe(order(f_path))
        .pipe(concat("app.bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest('src/' + project + '/js'))
        .on('finish', callback);
}

// 代码检测
function jsEslintTask(callback) {
    gulp.src(['src' + project + '/js/*.js'])
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError())
        .on('finish', callback);
}

function sassTask(callback) {
    // Serve files from the root of this project
    gulp.src(['src/' + project + '/sass/main.scss'])
        .pipe(sass())
        .on('error', gutil.log)
        .pipe(rename('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('src/' + project + '/css/'))
        .pipe(browserSync.stream({
            stream: true
        }))
        .pipe(notify('app.css to build complete'))
        .on('finish', callback);
}

function watchTask() {
    gulp.watch(['src/' + project + '/concat/*.js'], gulp.series(jsConcatTask));
    gulp.watch(['src' + project + '/js/*.js'], gulp.series(jsEslintTask), browserSync.reload);
    gulp.watch(['src/' + project + '/sass/*.scss'], gulp.series(sassTask));
}

gulp.task('watch', gulp.series(
    browserSyncTask,
    gulp.parallel(sassTask, jsConcatTask, watchTask)
));

gulp.task('test', gulp.series(
    jsConcatTask
));