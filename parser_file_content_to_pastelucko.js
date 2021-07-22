/*
** Parser the content of the file with subsequent upload to paste.lucko.me
**
** We needed to get the files of a bot that had protection.
** Fun fact: The code is written on the knee.
** Need modules: node-fetch, fs
*/

const folder = './HERE_YOUR_WAY'; 
const fetch = require("node-fetch"); 
const fs = require("fs"); 
const files = fs.readdirSync(folder); 
let links = []; 
for(let i = 0; i < files.length - 1; i++){ 
  const resp = (await (await fetch("https://paste.lucko.me/documents", { 
    method: "POST", 
    body: fs.readFileSync(folder + "/" + files[i], "utf8") 
  })).json()); 
  links.push({name: files[i], url: "https://paste.lucko.me/" + resp.key }); 
} 
return links;

/*
** Single file version.
*/

const file = "./HERE_YOUR_WAY";
const fetch = require("node-fetch"); 
const fs = require("fs"); 
const resp = (await (await fetch("https://paste.lucko.me/documents", { 
  method: "POST", 
  body: fs.readFileSync(file, "utf8") 
})).json()); 
return "https://paste.lucko.me/" + resp.key;
