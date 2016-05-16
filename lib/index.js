var RSVP = require('rsvp');
var wintersmith = require('wintersmith');
var Writer = require('broccoli-writer');
var path = require('path');
var fs = require('fs');

module.exports = BroccoliWintersmith;
BroccoliWintersmith.prototype = Object.create(Writer.prototype);
BroccoliWintersmith.prototype.constructor = BroccoliWintersmith;
// configure
function BroccoliWintersmith (inputTree) {
    if (!(this instanceof BroccoliWintersmith)) return new BroccoliWintersmith(inputTree);
    this.inputTree = inputTree;
}

BroccoliWintersmith.prototype.write = function (readTree, destDir) {
    return readTree(this.inputTree).then(function(srcDir) {
        var config = path.resolve(srcDir + '/config.json')
        var env = wintersmith(config);
        return new RSVP.Promise(function (resolve, reject) {
            env.build(destDir, function(error) {
                if (error) reject(error);
                console.log('Static HTML generated!');
                resolve(destDir);
            });
        });
    });
};
