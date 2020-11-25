const Discord = require('discord.js')

module.exports = {
    name: "close",
    run: async(client, message, args) => {
        if (!message.guild.roles.cache.get('you mod role id')) {
            return message.channel.send('You dont have permission to do this command!')
        }
        message.channel.delete()
    }
}