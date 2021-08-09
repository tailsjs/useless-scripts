/*
** Simple logger.
** I lazy to write something.
** Used in https://github.com/tailsjs/discordbot-core
*/

function logger(text, value = 0){
    const sub = ["LOG", "ERROR", "WARNING"];
    if(value < 0 || value > sub.length || isNaN(value))return console.log(`[ LOGGER ERROR ] >> Value must be in range from 0 to ${sub.length - 1}!`);
    console.log(`[ ${sub[value]} ] >> ${text}`);
};

logger("Hello!", 0)
logger("Whoops! Error!", 1)
logger("LoL", 2)
logger("There must be error.", -1)