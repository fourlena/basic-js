const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine{
  static tabulaRecta = {
  a: "abcdefghijklmnopqrstuvwxyz",
  b: "bcdefghijklmnopqrstuvwxyza",
  c: "cdefghijklmnopqrstuvwxyzab",
  d: "defghijklmnopqrstuvwxyzabc",
  e: "efghijklmnopqrstuvwxyzabcd",
  f: "fghijklmnopqrstuvwxyzabcde",
  g: "ghijklmnopqrstuvwxyzabcdef",
  h: "hijklmnopqrstuvwxyzabcdefg",
  i: "ijklmnopqrstuvwxyzabcdefgh",
  j: "jklmnopqrstuvwxyzabcdefghi",
  k: "klmnopqrstuvwxyzabcdefghij",
  l: "lmnopqrstuvwxyzabcdefghijk",
  m: "mnopqrstuvwxyzabcdefghijkl",
  n: "nopqrstuvwxyzabcdefghijklm",
  o: "opqrstuvwxyzabcdefghijklmn",
  p: "pqrstuvwxyzabcdefghijklmno",
  q: "qrstuvwxyzabcdefghijklmnop",
  r: "rstuvwxyzabcdefghijklmnopq",
  s: "stuvwxyzabcdefghijklmnopqr",
  t: "tuvwxyzabcdefghijklmnopqrs",
  u: "uvwxyzabcdefghijklmnopqrst",
  v: "vwxyzabcdefghijklmnopqrstu",
  w: "wxyzabcdefghijklmnopqrstuv",
  x: "xyzabcdefghijklmnopqrstuvw",
  y: "yzabcdefghijklmnopqrstuvwx",
  z: "zabcdefghijklmnopqrstuvwxy"
  }
  
  encrypt (plainText, keyword){
  if (plainText === null || keyword === null || plainText === undefined || keyword === undefined){
  throw 'THROWN'
  }
  else if( typeof(plainText) !== "string" ){
  return "invalid plainText. Must be string, not " + typeof(plainText);
  }
  else if( typeof(keyword) !== "string" ){
  return "invalid keyword. Must be string, not " + typeof(keyword);
  }
  
  plainText = plainText.toLowerCase();
  keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
  var encryptedText = "";
  var specialCharacterCount = 0;
  
  for( var i = 0; i < plainText.length; i++ ){
  var keyLetter = (i - specialCharacterCount) % keyword.length;
  var keywordIndex = VigenereCipheringMachine.tabulaRecta.a.indexOf(keyword[keyLetter]);
  
  if( VigenereCipheringMachine.tabulaRecta[plainText[i]] ){
  encryptedText += VigenereCipheringMachine.tabulaRecta[plainText[i]][keywordIndex];
  }else{
  encryptedText += plainText[i];
  specialCharacterCount++;
  }
  }
  
  return encryptedText.toUpperCase();
  }
  
  decrypt (encryptedText, keyword){
  if (encryptedText === null || keyword === null || encryptedText === undefined || keyword === undefined){
  throw 'THROWN'
  }
  else if( typeof(encryptedText) !== "string" ){
  return "invalid encryptedText. Must be string, not " + typeof(encryptedText);
  }
  else if( typeof(keyword) !== "string" ){
  return "invalid keyword. Must be string, not " + typeof(keyword);
  }
  
  encryptedText = encryptedText.toLowerCase();
  keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
  var decryptedText = "";
  var specialCharacterCount = 0;
  
  for( var i = 0; i < encryptedText.length; i++ ){
  var keyLetter = (i - specialCharacterCount) % keyword.length;
  var keyRow = VigenereCipheringMachine.tabulaRecta[keyword[keyLetter]];
  
  if( keyRow.indexOf(encryptedText[i]) !== -1 ){
  decryptedText += VigenereCipheringMachine.tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
  }else{
  decryptedText += encryptedText[i];
  specialCharacterCount++;
  }
  }
  
  return decryptedText.toUpperCase();
  }
  
  }
  
  module.exports = VigenereCipheringMachine;




