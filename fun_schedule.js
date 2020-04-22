/*
Randomly generates a fun schedule.
Script: tailsjs
*/

function random(min, max) {return Math.round(Math.random() * (max - min)) + min}
var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));
function spaces(string) {
  if (typeof string !== "string") string = string.toString();
  return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {
  return this[Math.floor(this.length * Math.random())];
} // from https://github.com/nitreojs/israelcods/blob/master/random.js

let array = "wake up,go to school,teach js,play cs:go with onetap,become boomer".split(',') // comma separated actions
let string = ``
for(let i = 0; i < random(3,13); i++){
string += `${i + 1}. ${array[random(0,array.length - 1)]}\n`
}
return console.log(string)
