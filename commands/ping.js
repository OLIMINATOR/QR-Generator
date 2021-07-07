module.exports = {
    name: "ping",
    description: "ping",
    aliases: ["pong","latency","botping"],
    cooldown: "3s",
    run: async({client, respond, edit}, args) => {
        respond(` \`${Math.round(client.ws.ping)}\` ms`)
    }
}