const Discord = require('discord.js')

module.exports = {
    name: "new",
    run: async(client, message, args) => {
        const ticketChannel = await message.guild.channels.create(`ticket-${message.author.username}`, {
            permissionOverwrites: [
                {
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    id: message.author.id
                },
                {
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
                    id: '750645386128916482'
                },
                {
                    deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    id: message.guild.id
                }
            ]
        })
        const msg = await ticketChannel.send(`Hey ${message.author} please expling your issue\n thanks`)
        .then(message.channel.send(`Successfully created new ticket ${ticketChannel}!`))
    }
}