var mergeTrees = require('broccoli-merge-trees');

var wintersmith = require('broccoli-wintersmith');
var wintersmithPublicOutput = 'basic-wintersmith-site';

wintersmithPublicOutput = wintersmith(wintersmithPublicOutput);

module.exports = mergeTrees([wintersmithPublicOutput]);
