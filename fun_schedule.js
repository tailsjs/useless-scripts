/*
** Randomly generates a fun schedule.
** Script by: tailsjs
*/

function random(min, max) {return Math.round(Math.random() * (max - min)) + min} // from https://github.com/nitreojs/israelcods/blob/master/random.js

let array = "wake up,go to school,teach js,play cs:go with onetap,become boomer".split(',') // comma separated actions
let string = ``
for(let i = 0; i < random(3,13); i++)string += `${i + 1}. ${array[random(0,array.length - 1)]}\n`
return console.log(string)
