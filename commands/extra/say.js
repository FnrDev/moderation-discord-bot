const Discord = require('discord.js')

module.exports = {
    name: "say",
    run: async(client, message, args) => {
        message.channel.send(args.join(" "))
    }
}