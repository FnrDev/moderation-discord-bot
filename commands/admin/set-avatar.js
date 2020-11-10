const Discord = require('discord.js')

module.exports = {
    name: "setav",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have permission to do this command!')
        let avatar = args[0]
        if (!avatar) return message.channel.send('You need to input avatar url!')
        client.user.setAvatar(avatar)
        .then(message.channel.send('Successfully changed avatar'))
        .catch(err => {
            return message.channel.send('There was an error')
        })
    }
}