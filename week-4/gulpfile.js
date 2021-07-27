const gulp = require('gulp');
const $ = require('gulp-load-plugins')({lazy: false});
const autoprefixer = require('autoprefixer');
const minimist = require('minimist');
const browserSync = require('browser-sync').create();
const {envOptions} = require('./envOptions');
const ghpages = require('./ghpages');

let options = minimist(process.argv.slice(2), envOptions);

//現在開發狀態
console.log(`Current mode：${options.env}`);

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
    // add tailwind using : https://gist.github.com/BaronVonPerko/27cd6d5b8c25f4ceb3b04313f56ca75e
    const tailwindcss = require('tailwindcss');
    const purgecss = require("@fullhuman/postcss-purgecss");

    const plugins = [
        autoprefixer(),                                //  設定 autoprefixer
        tailwindcss('./tailwind.config.js'),    //  設定 tailwind

        // add purge-css using : https://gist.github.com/taylorbryant/91fc05b12472a88a8b6494f610647cd4
        ...(options.env === "prod"
            ? [
                purgecss({
                    content: ["./app/**/*.ejs", "./app/**/*.html"],
                    defaultExtractor: content =>
                        content.match(/[\w-/:]+(?<!:)/g) || []
                })
            ]
            : [])
    ];
    return gulp.src(envOptions.style.src)
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.postcss(plugins))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(envOptions.style.path))
        .pipe(
            browserSync.reload({
                stream: true,
            }),
        );
}

function babel() {
    return gulp.src(envOptions.javascript.src)
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['@babel/env'],
        }))
        .pipe($.concat(envOptions.javascript.concat))
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
        .pipe($.concat(envOptions.vendors.concat))
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

    // use custom gh-page deploy path
    return ghpages.publish(envOptions.deployDir);
    // return gulp.src(envOptions.deploySrc).pipe($.ghPages());
}

function watch() {
    gulp.watch(envOptions.html.src, gulp.series(layoutHTML));
    gulp.watch(envOptions.html.ejsSrc, gulp.series(layoutHTML));
    gulp.watch(envOptions.javascript.src, gulp.series(babel));
    gulp.watch(envOptions.img.src, gulp.series(copyFile));
    gulp.watch(envOptions.style.src, gulp.series(sass));
}

gulp.task('deploy', deploy);
gulp.task('clean', clean);
gulp.task('build', gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorsJs));
gulp.task('default', gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorsJs, gulp.parallel(browser, watch)));
