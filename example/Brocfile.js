var mergeTrees = require('broccoli-merge-trees');

var wintersmith = require('broccoli-wintersmith');
var wintersmithPublicOutput = 'basic-wintersmith-site';

wintersmithPublicOutput = wintersmith(wintersmithPublicOutput, {
    config: require('path').resolve('./basic-wintersmith-site/config.json')
});

module.exports = mergeTrees([wintersmithPublicOutput]);
