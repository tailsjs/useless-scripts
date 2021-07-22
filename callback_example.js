/*
** Callback Example
** For noob-coders
*/

function helloworld(name, callback){
    if (!name) return callback({ ok: false, response: "Where's your name?" });
    const hello = `Hello world! From ${name}!`;

    return callback({ ok: true, response: hello });
};

helloworld("tails", function(res){
    if (!res.ok) return console.log(res.response);
    return console.log(res.response);
});
