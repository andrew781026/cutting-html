// use gulp-xxx ( dislike the $.xxx format , so refactor it )
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));

module.exports = {
    concat,
    postcss,
    sass,
}
