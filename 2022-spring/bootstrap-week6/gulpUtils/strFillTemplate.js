// ./src/utils/strFillTemplate.js
/**
 * 將 模板字串 塞入 參數值.
 * https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused#answer-37217166
 * @constructor
 * @param {string} templateString - template literals .
 * @param {object} [templateVars={}] - 參數名稱 .
 */
const StrFillTemplate = (templateString, templateVars = {}) => {

    const args = '{' + Object.keys(templateVars).join(',') + '}'; // args = '{ name , value }'
    const body = "return `" + templateString + "`;";

    // new Function 學習 : https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function
    return new Function(args, body).call(null, templateVars); // call 教學 : https://ithelp.ithome.com.tw/articles/10195896
};

module.exports = StrFillTemplate;
