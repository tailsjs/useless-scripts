/*
** PASSWORD GENERATOR
**
** Kinda useless, because in internet you can find other scripts with same use, but it's my repo, it's my rules.
*/

const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789!@#$%^&*_"; // Your letters
const passLength = 10; // Your password length
let result = ""; // The variable where our generated password will be stored.
for(let i = 0; i < passLength; i++)result += letters[random(0, letters.length)];

return console.log(result);

function random(min, max) {return Math.round(Math.random() * (max - min)) + min}; // Random function.
