const fs = require('fs');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require("autoprefixer");
const tailwindcss = require('tailwindcss');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const gulpSquoosh = require("gulp-squoosh");
const frontMatter = require('gulp-front-matter');
const layout = require('gulp-layout');
const {publish} = require('./ghpages');

// rollup , 參考資料 : https://www.kancloud.cn/yunye/rollup/327473
//          參考資料 : https://rollupjs.org/guide/en/#creating-your-first-bundle
const rollup = require('rollup');
const StrFillTemplate = require("./StrFillTemplate");

// compose 參考 : https://betterprogramming.pub/compose-and-pipe-in-javascript-medium-d1e1b2b21f83
const compose = (...functions) => x => functions.reduceRight((acc, fn) => fn(acc), x);

const envs = {
    browserDir: './dist',
    input: {
        html: './src/html/**/*.{html,ejs}',
        image: './src/images/**/*',
        vendorJs: './src/vendor/**/*',
        js: './src/js/app.js',
        scss: './src/scss/styles.scss',
        tailwind: './src/tailwind/tailwind.css',
    },
    output: {
        css: './dist/css',
        html: './dist',
        vendorJs: './dist/vendor',
        js: './dist/js',
        image: './dist/images',
    },
    watch: {
        scss: './src/scss/**/*.scss',
        tailwind: './src/tailwind/**/*.css',
        html: "./src/**/*.{html,ejs}",
        image: './src/images/**/*',
        vendorJs: './src/vendor/**/*',
        js: './src/js/**/*.js',
    },
}

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

const cleanDest = () => del([envs.browserDir]);

const mergeIndexHtml = (cb) => {

    console.log('mergeIndexHtml');
    const indexEJS = fs.readFileSync('./src/layout/index.ejs').toString();
    const headerEJS = fs.readFileSync('./src/layout/header.ejs').toString();
    const footerEJS = fs.readFileSync('./src/layout/footer.ejs').toString();

    const indexHtml = StrFillTemplate(indexEJS, {
        header: headerEJS,
        footer: footerEJS
    });

    fs.mkdirSync('./layout');
    fs.writeFileSync('./layout/index.ejs',indexHtml,{flag:'w+',encoding:'utf8'});
    cb();
}

const copyVendor = (cb, file) => {

    console.log('copyVendor');
    return gulp.src(envs.input.vendorJs)
        .pipe(gulp.dest(envs.output.vendorJs))
        .on('end', () => cb())
}

const rollupJS = (cb, file) => {

    console.log('rollupJS');

    // rollup 設定請參考官方文件 : https://rollupjs.org/guide/en/#creating-your-first-bundle
    return rollup.rollup({
        input: envs.input.js,
    })
        .then(bundle =>
            bundle.write({
                format: 'umd',
                moduleName: 'form_common',
                file: envs.output.js,
                sourceMap: true,
            }),
        )
        .then(() => cb())
}

// use gulp-front-matter + gulp-layout to make multiple files with layout
const minifyHTML = (cb, file) => {

    console.log('minifyHTML');
    return gulp.src(envs.input.html)
        .pipe(frontMatter()) // list of frontMatter params : https://ithelp.ithome.com.tw/articles/10223783
        .pipe(layout(file => file.frontMatter))
        .pipe(gulp.dest(envs.output.html))
        .on('end', () => cb())
}

function minifySCSS() {

    console.log('minifySCSS');
    return gulp.src(envs.input.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(envs.output.css));
}

function minifyTailwind() {
    // add tailwind using : https://gist.github.com/BaronVonPerko/27cd6d5b8c25f4ceb3b04313f56ca75e

    console.log('minifyTailwind');
    const plugins = [
        autoprefixer(),                                //  設定 autoprefixer
        tailwindcss('./tailwind.config.js'),    //  設定 tailwind
        // add purge-css using : https://gist.github.com/taylorbryant/91fc05b12472a88a8b6494f610647cd4
    ];

    return gulp.src(envs.input.tailwind)
        .pipe(postcss(plugins))
        .pipe(gulp.dest(envs.output.css));
}

function minifyImages() {

    console.log('minifyImages');
    return gulp
        .src(envs.input.image)
        .pipe(gulpSquoosh())
        .pipe(gulp.dest(envs.output.image));
}

const compileFn = gulp.series(mergeIndexHtml,minifyHTML, minifySCSS, minifyImages, minifyTailwind, rollupJS, copyVendor);

const watch = () => {

    console.log('watch');
    gulp.watch(envs.watch.tailwind, gulp.series(minifyTailwind));
    gulp.watch(envs.watch.scss, gulp.series(minifySCSS));
    gulp.watch(envs.watch.js, gulp.series(rollupJS));
    gulp.watch(envs.watch.image, gulp.series(minifyImages));
    gulp.watch(envs.watch.vendorJs, gulp.series(copyVendor));
    gulp.watch(envs.watch.html, gulp.series(compileFn));
}

const livereload = () => {

    console.log('livereload');
    browserSync.reload({
        stream: true,
    });
}

function browser() {
    browserSync.init({
        server: {
            baseDir: envs.browserDir,
        },
        port: 3008,
        open: true,  // open the browser automatically
        watch: true, // watch the dist folder & refresh web page
    });
}

gulp.task(makeFn("watch", "watch file change", {}, watch));

const cssFn = gulp.series(minifySCSS, minifyTailwind);
gulp.task(makeFn("build-scss", "build scss & tailwind", {}, cssFn));


const devFn = gulp.series(cleanDest, compileFn, gulp.parallel(watch, browser));
gulp.task(makeFn("dev", "open the dev-server", {}, devFn));

gulp.task(makeFn("build", "build html , css , js", {}, compileFn));

gulp.task(makeFn("publish", "publish to github-pages", {}, publish));
