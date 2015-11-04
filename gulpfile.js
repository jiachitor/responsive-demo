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
    uglify = require("gulp-uglify")，
    browserify = require('browserify')，
    babelify = require('babelify');

var demo_config_list = ['demo', 'mui-demo', 'mui-demo-small'],
    project = 'demo';


// browserify
var b = watchify(browserify(assign({}, watchify.args, {
    cache: {}, // required for watchify
    packageCache: {}, // required for watchify
    entries: ['./src/islider.js'],
    debug: true
})));

// 在这里加入变换操作
b.transform(babelify.configure({stage: 1}));

gulp.task('browserifyTask', bundle); // 这样你就可以运行 `gulp browserifyTask` 来编译文件了
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return b.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('islider.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
}

function browserifyJsFn(conf){
    browserify("./demo/"+ conf +"/main.js", { debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(fs.createWriteStream("./demo/"+ conf +"/bundle.js"));
}

function browserifyTask(){
    for (var conf of demo_config) {
        browserifyJsFn(conf);
    }
}



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
    var config = fs.readFileSync('src/' + project + '/statics/concat/_concatConfig.json').toString();
    gulp
        .src('src/' + project + '/statics/concat/*.js')
        .pipe(order(JSON.parse(config)))
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest('src/' + project + '/statics/js'))
        .on('finish', callback);
}

// js 合并压缩
function jsUglifyTask(callback) {
    var f_path = ['src/' + project + '/statics/js/bundle.js', 'src/' + project + '/statics/js/app.js'];
    gulp
        .src(f_path)
        .pipe(order(f_path))
        .pipe(concat("app.bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest('src/' + project + '/statics/js'))
        .on('finish', callback);
}

// 代码检测
function jsEslintTask(callback) {
    gulp.src(['src' + project + '/statics/js/*.js'])
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
    gulp.src(['src/' + project + '/statics/sass/main.scss'])
        .pipe(sass())
        .on('error', gutil.log)
        .pipe(rename('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('src/' + project + '/statics/css/'))
        .pipe(browserSync.stream({
            stream: true
        }))
        .pipe(notify('app.css to build complete'))
        .on('finish', callback);
}

function watchTask() {
    gulp.watch(['src/' + project + '/statics/concat/*.js'], gulp.series(jsConcatTask));
    gulp.watch(['src' + project + '/statics/js/*.js'], gulp.series(jsEslintTask), browserSync.reload);
    gulp.watch(['src/' + project + '/statics/sass/*.scss'], gulp.series(sassTask));
}

gulp.task('watch', gulp.series(
    browserSyncTask,
    gulp.parallel(sassTask, jsConcatTask, watchTask)
));

gulp.task('test', gulp.series(
    jsConcatTask
));