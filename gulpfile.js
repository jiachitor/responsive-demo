var fs = require("fs");
var gulp = require('gulp');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var assign = require('lodash.assign');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var less = require('gulp-less');

var demo_config_list = ['demo','video'];
var project = 'video';

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

function sassTask(callback) {
    // Serve files from the root of this project
    gulp.src(['src/' + project + '/sass/main.scss'])
        .pipe(sass())
        .on('error', gutil.log) 
        .pipe(rename('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('src/' + project + '/css/'))
        .pipe(browserSync.stream({stream: true}))
        .pipe(notify('app.css to build complete'))  
        .on('finish', callback);
}

function lessTask(callback) {
    // Serve files from the root of this project
    gulp.src(['src/' + project + '/less/main.less'])
        .pipe(less())
        .on('error', gutil.log) 
        .pipe(rename('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('src/' + project + '/css/'))
        .pipe(browserSync.stream({stream: true}))
        .pipe(notify('app.css to build complete'))        
        .on('finish', callback);
}

function watchTask() {
    gulp.watch(['src' + project + '/js/*.js'], browserSync.reload);
    gulp.watch(['src/' + project + '/less/*.less'], gulp.series(lessTask));
}

gulp.task('watch', gulp.series(
    browserSyncTask,
    gulp.parallel(lessTask,watchTask)
));


