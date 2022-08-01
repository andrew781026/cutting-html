// place at : deploy/ghpages.js
// you can see more info at https://github.com/tschaub/gh-pages
const path = require('path');
const ghpages = require('gh-pages');

const localFolder = path.join(__dirname, 'dist');
const options = {
    dest: 'week-3', // the target folder on gh-pages branch
    branch: 'gh-pages',
    repo: 'https://github.com/andrew781026/F2E_Card.git' // project github repo
    // repo: 'https://' + process.env.GH_TOKEN + '@github.com/user/private-repo.git', => use GH_TOKEN to publish
};

const callback = err => {

    if (err) console.error(err);
    else console.log('publish success');
};

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
module.exports.publish = () => ghpages.publish(localFolder, options, callback);
