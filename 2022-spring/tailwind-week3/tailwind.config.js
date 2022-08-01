// 官方文件 : https://tailwindcss.com/docs/configuration

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  // related html files
  content: ["./src/**/*.{html,ejs}"],
  theme: {
    theme: {
      container: {
        center: true, // 水平置中
        padding: '2rem', // 水平間距
      },
    },
    extend: {},
  },
  plugins: [],
}
