const Discord = require('discord.js')
const Fnr = '596227913209217024'

module.exports = {
    name: "restart",
    run: async(client, message, args) => {
        if (!Fnr.includes(message.author.id)) return
        const setting = require('../../config.json')
        message.channel.send('Restarting...')
        client.destroy()
        client.login(setting.token)
        return message.channel.send(`**Successfully restarting ${client.user.username}**`)
    }
}