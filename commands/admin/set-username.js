const Discord = require('discord.js')

module.exports = {
    name: "setusername",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have permission to do this command!')
        let username = args.join(" ")
        if (!username) return message.channel.send('You need to input username!')
        client.user.setUsername(username)
        .then(message.channel.send(`Successfully changed username to **${username}**`))
        .catch(err => {
            return message.channel.send('There was an error')
        })
    }
}