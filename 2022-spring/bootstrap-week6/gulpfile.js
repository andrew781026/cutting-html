// doc : https://gulpjs.com/
const gulp = require('gulp');
const del = require('del');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const frontMatter = require('front-matter')

// doc : https://www.npmjs.com/package/gulp-plumber
const plumber = require('gulp-plumber');

const sass = require('gulp-sass')(require('sass'));

// doc : https://www.npmjs.com/package/gulp-squoosh
const gulpSquoosh = require("gulp-squoosh");
const strFillTemplate = require("./gulpUtils/strFillTemplate.js");

const browserSync = require('browser-sync').create();

const envs = {
    browserDir: './dist',
    input: {
        html: './src/**/*.{html,ejs}',
        image: './src/imgs/**/*',
        scss: './src/scss/custom.scss',
    },
    output: {
        css: './dist/css',
        html: './dist',
        image: './dist/imgs',
    },
    watch: {
        scss: './src/scss/**/*.scss',
        html: "./src/**/*.{html,ejs}",
        image: './src/imgs/**/*',
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

const watch = () => {

    console.log('watch');
    gulp.watch(envs.watch.scss,(path, stat) => minifySCSS(null, {path,stat}));

}

function minifySCSS() {

    console.log('minifySCSS');
    return gulp.src(envs.input.scss)
        .pipe(plumber({
            errorHandler : err => console.error(err)
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(envs.output.css));
}

function browser() {
    browserSync.init({
        server: {
            baseDir: envs.browserDir,
        },
        port: 3018,
        open: true,  // open the browser automatically
        watch: true, // watch the dist folder & refresh web page
    });
}

const mergeHTML = (cb, file) => {

    console.log('mergeHTML');
    const outputFolder = envs.output.html;

    // if dist folder not exist , create it
    if (!fs.existsSync(outputFolder)){
        fs.mkdirSync(outputFolder, { recursive: true });
    }

    /*
     * content.layout= [
     *     { header: 'layout/index.ejs' },
     *     { footer: 'layout/footer.ejs' },
     *   ]
     */
    const parseLayoutInfo = layoutArr => {

        if (!Array.isArray(layoutArr)) return {};
        else return layoutArr.reduce( (pre,curr) => {

           const key = Object.keys(curr)[0];
           const filePath = path.resolve(curr[key]);
           const value = fs.existsSync(filePath)? fs.readFileSync(filePath,'utf-8').toString():'';

           return {
               ...pre,
               [key]:value
           }

        } , {})
    }

     /*
      * content = {
      *   attributes: { title: "Just hack'n", description: 'Nothing to see here' },
      *   body: 'This is some text about some stuff that happened sometime ago\n',
      *   bodyBegin: 6,
      *   frontmatter: "title: Just hack'n\ndescription: Nothing to see here"
      * }
      */
    const mergeSingleHtml = filePath => {

        const fileData = fs.readFileSync(filePath,'utf-8').toString();
        const frontMatterResult = frontMatter(fileData);

        const newAttributes = {
            ...frontMatterResult.attributes,
            ...parseLayoutInfo(frontMatterResult.attributes.layout),
        }

        return strFillTemplate(frontMatterResult.body,newAttributes);
    }

    const compileSingleHtml = filePath => {

        const fileName   = path.basename(filePath);

        // 底線開頭的檔案，就跳過不編譯
        if ( fileName.startsWith('_') ) return ;
        const singleHtml = mergeSingleHtml(filePath);
        const outputPath = path.resolve(outputFolder,fileName);
        fs.writeFileSync(outputPath,singleHtml,'utf-8');
    }

    if (file){

        const filePath = path.resolve(file.path);
        compileSingleHtml(filePath);

    } else {

        const files = glob.sync(envs.input.html);
        files.forEach( filePath => compileSingleHtml(filePath) );

        if(cb) cb();
    }
}

function minifyImages() {

    console.log('minifyImages');
    return gulp
        .src(envs.input.image)
        .pipe(gulpSquoosh({
            encodeOptions: {
                oxipng: {},
            },
        }))
        .pipe(gulp.dest(envs.output.image));
}

function copyImages() {

    console.log('copyImages');
    return gulp
        .src(envs.input.image)
        .pipe(gulp.dest(envs.output.image));
}

// how to write gulp plugin
// link - https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md

gulp.task(makeFn("cleanDest", "clean the dist folder", {}, cleanDest));

const compileFn = gulp.series(mergeHTML, minifySCSS,copyImages);
const devFn = gulp.series(cleanDest, compileFn, gulp.parallel(watch, browser));
gulp.task(makeFn("dev", "open the dev-server", {}, devFn));
gulp.task(makeFn("compile-html", "compile-html", {}, mergeHTML));
