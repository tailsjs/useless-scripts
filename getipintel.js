/*
** GetIpIntel script.
** a.k.a antiproxy, noproxy, etc.
** Easy-To-Use lol
** Need to install: node-fetch
*/

const fetch = require("node-fetch"),
      ip = "1.1.1.1", // Here IP
      email = "test_email@mail.ru", // Here email.
      danger_probability = 0.9, // Here danger probability
      errors = ["0", "Unknown.", "Strange IP!", "Unknown.", "Unknown.", "You entered your own IP.", "You forgot contact mail!"] // If you have an error that is not captured by me, please write to Issues with mark "GetIPIntel"

fetch(`https://check.getipintel.net/check.php?ip=${ip}&contact=${email}`).then(async function(data){
    let info = Number(await data.text()) // 0 - good, 1 - bad.

    if(info < 0)return console.log(`An error has been occured. ERROR CODE: ${info}\n${errors[Math.abs(info)]}`)

    if(info > danger_probability){
        return console.log(`VPN found!\nPROBABILITY: ${info}`)
    }else if(info < danger_probability){
        return console.log(`Good IP!\nPROBABILITY: ${info}`)
    }
})
