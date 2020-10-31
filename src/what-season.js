const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(args) {
  var count = 0
for (var key in args){
count++
}
console.log(count)
if(count === 9){
throw 'THROWN'
}
if (args == null)
{
return 'Unable to determine the time of year!'
}
else if (typeof (args) === "number" && args.getMonth() === 'Invalid Date'){
throw 'Error'
}
else if (args === 'winter'){
return 'winter'
}
else if (args === 'spring'){
return 'spring'
}
else if (args === 'summer'){
return 'summer'
}
else if (args === 'autumn'){
return 'autumn'
}
else if (args.getMonth()<2 || args.getMonth() === 11){
return 'winter'
}
else if(args.getMonth()<5){
return 'spring'
}
else if (args.getMonth()<8){
return 'summer'
}
else if(args.getMonth()<11){
return 'autumn'
}
}

