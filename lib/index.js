var RSVP = require('rsvp');
var wintersmith = require('wintersmith');
var Writer = require('broccoli-writer');

module.exports = BroccoliWintersmith;
BroccoliWintersmith.prototype = Object.create(Writer.prototype);
BroccoliWintersmith.prototype.constructor = BroccoliWintersmith;
// configure
function BroccoliWintersmith (inputTree, options) {
    if (!(this instanceof BroccoliWintersmith)) return new BroccoliWintersmith(inputTree, options);

    this.environment = wintersmith(options.config);
    this.inputTree = inputTree;
}

BroccoliWintersmith.prototype.write = function (readTree, destDir) {
    var buildFunc = this.environment.build;
    var env = this.environment;
    return readTree(this.inputTree).then(function(srcDir) {
        return new RSVP.Promise(function (resolve, reject) {

            env.build(destDir, function(error) {
                if (error) reject(error);
                console.log('Static HTML generated!');
                resolve(destDir);
            });
        });
    });
};
