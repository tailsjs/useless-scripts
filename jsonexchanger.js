/*
** JSON Value Exchanger
** idk why this thing will be useful to you, but it was useful to me.
** transforms from {beer: "baltika"} into {baltika: "beer"}
*/

let someJSONObject = {
    "name": "Alex",
    "age": 18,
    "likesBeer": false
};
let secondJSONObject = {};
for(let i = 0; i < Object.keys(someJSONObject).length; i++)secondJSONObject[someJSONObject[Object.keys(someJSONObject)[i]]] = Object.keys(someJSONObject)[i];

console.log(secondJSONObject);