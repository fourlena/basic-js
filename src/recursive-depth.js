const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(obj) {
     var self = this
    var level = 1;
    for(var key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        if(typeof obj[key] == 'object'){
            var depth = this.calculateDepth(obj[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}
};