module.exports = {
    name: "help",
    description: "list of commands",
    aliases: ["hub","sos","how"],
    cooldown: "5s",
    run: async({client, respond, edit}, args) => {
        respond(`  \`q!create <link>\` - Create a qr code. \n\`q!ping\` - Show bot ping.`)
    }
};