const fs = require('fs');
const StrFillTemplate = require('./StrFillTemplate');

const mergeIndexHtml = () => {

    console.log('mergeIndexHtml');
    const indexEJS = fs.readFileSync('./src/layout/index.ejs').toString();
    const headerEJS = fs.readFileSync('./src/layout/header.ejs').toString();
    const footerEJS = fs.readFileSync('./src/layout/footer.ejs').toString();

    return StrFillTemplate(indexEJS, {
        header: headerEJS,
        footer: footerEJS
    });
}

console.log(mergeIndexHtml())