const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(date) {
 if (typeof(date)!=='string' || isNaN(parseFloat(date)) || parseFloat(date) <= 0 || parseFloat(date) > 15) {
  return false
}

return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(date))/(0.693/HALF_LIFE_PERIOD))

};
