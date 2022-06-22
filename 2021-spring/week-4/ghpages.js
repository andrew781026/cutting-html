// you can see more info at https://github.com/tschaub/gh-pages
const ghpages = require('gh-pages');
const configs = require('./configs');

const options = {
    branch: 'gh-pages',
    repo: 'https://' + configs.GH_TOKEN + '@github.com/andrew781026/cutting-html.git', // project github repo
};

const callback = err => {

    if (err) console.error(err);
    else console.log('publish success');
};

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
exports.publish = folder => ghpages.publish(folder, options, callback);
