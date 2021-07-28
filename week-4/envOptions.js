const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
    string: 'env',
    default: {
        env: 'dev',
    },
    copyFile: {
        src: [
            `${srcPath}/**/*`,
            `!${srcPath}/assets/js/**/*.js`,
            `!${srcPath}/assets/images/**/*`,
            `!${srcPath}/assets/style/**/*.scss`,
            `!${srcPath}/assets/style/**/*.sass`,
            `!${srcPath}/assets/style/**/*.css`,
            `!${srcPath}/**/*.ejs`,
            `!${srcPath}/**/*.html`,
        ],
        path: distPath,
    },
    copyImgs: {
        src: [
            `${srcPath}/assets/images/**/*`,
        ],
        path: `${distPath}/img`,
    },
    html: {
        src: [
            `${srcPath}/**/*.html`,
        ],
        ejsSrc: [
            `${srcPath}/**/*.ejs`,
        ],
        path: distPath,
    },
    style: {
        src: [
            `${srcPath}/assets/style/**/*.scss`,
            `${srcPath}/assets/style/**/*.sass`,
            `${srcPath}/assets/style/**/*.css`,
        ],
        path: `${distPath}/css`,
        final: `${distPath}/style`,
    },
    javascript: {
        src: [
            `${srcPath}/assets/js/**/*.js`
        ],
        concat: 'all.js',
        path: `${distPath}/js`,
    },
    vendors: {
        src: [
            `${nodePath}/vue/dist/vue.global.js`,
        ],
        concat: 'vendors.js',
        path: `${distPath}/js`,
    },
    img: {
        src: [
            `${srcPath}/assets/images/**/*`,
        ]
    },
    clean: {
        src: distPath,
    },
    browserDir: distPath,
    deployDir: distPath,
    deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;