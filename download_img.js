/*
** Download picture by URL.
** Used in: screenshot-site 2.0.0, 2.1.0.
** Need to install: fs, request
** Useless fact: Foxes live an average of four years in an urban setting and usually breed from January to March
*/

const fs = require("fs");
const request = require("request");
const uri = "https://i.pinimg.com/originals/e6/03/ec/e603ec55a0a100750c65c10b396f1206.png";
const fileName = "./cute_fox.png";

request(uri).pipe(fs.createWriteStream(fileName)).on('close', function(){
    return console.log('Done!')
});
