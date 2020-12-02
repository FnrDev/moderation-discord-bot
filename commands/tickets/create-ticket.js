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
        const msg = await ticketChannel.send(`You have created a ticket ${message.author}`)
        .then(message.channel.send(`Successfully created a new ticket ${ticketChannel}!`))
        .catch(err => {
            return message.channel.send('There was an error please contact the developer')
        })
    }
}