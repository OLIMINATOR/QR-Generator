const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "create",
    description: "generate a qr code!",
    aliases: ["qr","generate","make"],
    cooldown: "10s",
    run: async({client, respond, edit}, args) => {
        if(!args[0]) {
   return respond(':x: Please specify the **text/link** you want the **QR code** to go to!')
}

    if(args[1]) {
return respond(':x: No spaces allowed!')
}

        var qrembed = new MessageEmbed()
        .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${args[0]}`)
        respond(qrembed)
    }
}