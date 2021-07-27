// 參考資料 : https://dev.to/salttechno/how-to-setup-tailwind-css-with-postcss-browsersync-1j41
// tailwind.config.js
// config 參考 : https://tailwindcss.com/docs/configuration
module.exports = {
    prefix: 'tw-',
    purge: [
        "./app/**/*.ejs",
        "./app/**/*.html"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}