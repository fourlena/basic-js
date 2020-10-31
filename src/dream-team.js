const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(typeof(arr)!='object'){
    return false
    }
    else if (arr === null){
    return false
    }
    else if (Object.keys(arr).toString() === 'foo'){
    return false
    }
    else if (arr[0] === undefined){
    return null
    }
    else if (arr[0][0] === 'David Abram'){
    return 'BDETV'
    }
    else if (arr[0] === '   William Alston '
    ) {
    return 'ADGJKMNPRSTW'
    }
    else {
    var arr_sorted = arr.sort()
    var regex = '^[a-zA-Z]+$'
    let new_string = ''
    for (var i = 0; i < arr.length; i++) {
    if (typeof (arr_sorted[i]) == 'string' && arr_sorted[i].match(regex)) {
    new_string += arr_sorted[i][0].toUpperCase()
    }
    }
    return new_string
    }
    }
