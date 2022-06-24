const gulp = require('gulp');
const $ = require('gulp-load-plugins')({lazy: false});
const autoprefixer = require('autoprefixer');
const minimist = require('minimist');
const browserSync = require('browser-sync').create();
const {envOptions} = require('./envOptions');

// use gulp-xxx ( dislike the $.xxx format , so refactor it )
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sassUtils = require('gulp-sass')(require('sass'));

const $$ = {
    concat,
    postcss,
    sass: sassUtils,
}

let options = minimist(process.argv.slice(2), envOptions);
// 現在開發狀態
console.log(`Current mode：${options.env}`);

/**
 * 產生 --tasks 的內文 [參考資料](https://gulpjs.com/docs/en/api/task/)
 * @param displayName 任務名稱
 * @param description 任務描述
 * @param flags 任務的環境變數
 * @param fn 任務的執行函式
 * @returns {*}
 */
const makeFn = (displayName, description, flags, fn) => {

    // name	- string - A special property of named functions. Used to register the task. Note: name is not writable; it cannot be set or changed.
    // displayName - string - When attached to a taskFunction creates an alias for the task. If using characters that aren't allowed in function names, use this property.
    // description - string - When attached to a taskFunction provides a description to be printed by the command line when listing tasks.
    // flags - object - When attached to a taskFunction provides flags to be printed by the command line when listing tasks. The keys of the object represent the flags and the values are their descriptions.

    fn.displayName = displayName;
    fn.description = description;
    fn.flags = flags;
    return fn;
};

function copyFile() {
    return gulp.src(envOptions.copyFile.src)
        .pipe(gulp.dest(envOptions.copyFile.path))
        .pipe(
            browserSync.reload({
                stream: true,
            }),
        );
}

function layoutHTML() {
    return gulp.src(envOptions.html.src)
        .pipe($.plumber())
        .pipe($.frontMatter())
        .pipe(
            $.layout((file) => {
                return file.frontMatter;
            })
        )
        .pipe(gulp.dest(envOptions.html.path))
        .pipe(
            browserSync.reload({
                stream: true,
            }),
        );
}

function sass() {
    const plugins = [autoprefixer()];

    return postcss.src(envOptions.style.src)
        .pipe($.sourcemaps.init())
        .pipe($$.sass().on('error', $$.sass.logError))
        .pipe($$.postcss(plugins))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(envOptions.style.path))
        .pipe(
            browserSync.reload({
                stream: true,
            }),
        );
}

// gen js except the vendorJs
function babel() {
    return gulp.src(envOptions.javascript.src)
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['@babel/env'],
        }))
        .pipe($$.concat(envOptions.javascript.concat))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(envOptions.javascript.path))
        .pipe(
            browserSync.reload({
                stream: true,
            }),
        );
}

function vendorsJs() {
    return gulp.src(envOptions.vendors.src)
        .pipe($$.concat(envOptions.vendors.concat)) // concat merge multi Js to single
        .pipe(gulp.dest(envOptions.vendors.path));
}


function browser() {
    browserSync.init({
        server: {
            baseDir: envOptions.browserDir,
        },
        port: 8080,
    });
}

function clean() {
    return gulp.src(envOptions.clean.src, {
        read: false,
        allowEmpty: true,
    })
        .pipe($.clean());
}

function deploy() {
    return gulp.src(envOptions.deploySrc)
        .pipe($.ghPages());
}

function watch() {
    gulp.watch(envOptions.html.src, gulp.series(layoutHTML));
    gulp.watch(envOptions.html.ejsSrc, gulp.series(layoutHTML));
    gulp.watch(envOptions.javascript.src, gulp.series(babel));
    gulp.watch(envOptions.img.src, gulp.series(copyFile));
    gulp.watch(envOptions.style.src, gulp.series(sass));
}

gulp.task(makeFn("deploy", "deploy to gh-pages", {}, deploy));

gulp.task(makeFn("clean", "clean the dist folder", {}, clean));

const buildFn = gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorsJs);
gulp.task(makeFn("build", "generate html . css", {}, buildFn));

const defaultFn = gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorsJs, gulp.parallel(browser, watch));
gulp.task(makeFn("default", "generate html . css", {}, defaultFn));
