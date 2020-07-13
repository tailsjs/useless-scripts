// бот основанный на vk-io гайд: vk.com/@tailsjsundefined-kak-napisat-svoego-brand-new-elite-bota-gaid-ot-teiclzzhsa
let VK = require('vk-io')
let vk = new VK({
token: 'токен пизды',
group_id: айдигруппы
})

vk.updates.startPolling()

vk.updates.on(['new_message', 'edit_message'], async(ctx) => {

if (ctx.senderId < 1 || ctx.isOutbox) { 
return
}
ctx.setActivity()

//мне лень писать эту систему команд поэтому на ифах

if(ctx.text == 'привет'){

ctx.send('ЕБАААТЬ!!!! ЭТО ЖЕ Я!')

}

})
