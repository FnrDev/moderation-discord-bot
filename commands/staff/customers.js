const Discord = require('discord.js')

module.exports = {
    name: 'c1',
    run: async(client, message, args) => {
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!mentionMember) return message.channel.send('You need to mention a user!')
        const roleName = message.guild.roles.cache.find(role => role.name == 'Customer') || (role.id == 'Customer')
        const haveRole = mentionMember._roles.includes(roleName.id)
        if (haveRole) return message.channel.send('User already has that role')
        try {
            mentionMember.roles.add(roleName).then(message.channel.send(`Successfully added Customer role to ${mentionMember}`))
        } catch(error) {
            return message.channel.send('There was an error')
        }
    }
}