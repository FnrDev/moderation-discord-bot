const Discord = require('discord.js')

module.exports = {
    name: "close",
    run: async(client, message, args) => {
        // You need to replace "Your mod role id" to mod role id
        if (!message.guild.roles.cache.get('Your mod role id')) {
            // if someone try to use this command will return this message
            return message.channel.send('You dont have permission to do this command!')
        }
        // You need to do this command in ticket only - dont try this is public chat
        message.channel.delete()
    }
}