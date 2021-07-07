require("dotenv").config();

const { Client } = require("discord.js"),
    {GCommands} = require("gcommands")
    const express = require('express');
    var app = express()
    app.get('/', async (req, res) => { 
        res.header("Access-Control-Allow-Origin", "*");
        res.json({
            guilds: `${client.guilds.cache.size}`,
            users: `${client.users.cache.size}`,
            channels: `${client.channels.cache.size}`
        })
    })
    app.listen(80);
const client = new Client();

// KED SA ZAPNE
client.on("ready", () => {
      console.log(`|----------------------------------------|`);
      console.log(`|               POWER ON                 |`);
      console.log(`|----------------------------------------|`);
      console.log(`| Users: ${client.users.cache.size}`);
      console.log(`| Guilds: ${client.guilds.cache.size}`);
      console.log(`| Channels: ${client.channels.cache.size}`);
      console.log(`| Logged in as: ${client.user.tag}`);
      console.log(`|----------------------------------------|`);
   client.user.setActivity("q!help", {type:"PLAYING"}) // Status //
    const gc = new GCommands(client, {
        cmdDir: "commands/",
        language: "english", 
        slash: {
            slash: false, // SLASH COMMANDY // 
            prefix: "q!" //      PREFIX    //
        }
    })

    gc.on("log", console.log) 
})

client.login(process.env['token']); // TOKEN //
