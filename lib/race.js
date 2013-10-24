var promise = require('lie');
var each = require('lie-quickeach');
function race(array) {
    return promise(function(fulfill, reject) {
        each(array,function(v){
            v.then(fulfill, reject);
        });
    });
}
module.exports = race;
