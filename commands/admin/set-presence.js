const Discord = require('discord.js')

module.exports = {
    name: "status",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have permission to do this command!')
        let status = args.join(" ")
        if (!status) return message.channel.send('You need to input status')
        client.user.setPresence({
            activity: {
                name: status,
                type: 0,
            }
        })
        .then(message.channel.send(`Successfully changed bot status to **${status}**`))
        .catch(err => {
            return message.channel.send('There was an error')
        })
    }
}