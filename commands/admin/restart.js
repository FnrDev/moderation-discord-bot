const Discord = require('discord.js')

module.exports = {
    name: "restart",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTARTOR')) {
            return message.channel.send('You dont have permission to do this command!')
        }
        const setting = require('../../config.json')
        message.channel.send('Restarting...')
        client.destroy()
        client.login(setting.token)
        return message.channel.send(`**Successfully restarting ${client.user.username}**`)
    }
}