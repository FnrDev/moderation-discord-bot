const Discord = require('discord.js')

module.exports = {
    name: "removerole",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.channel.send('You dont have permission to do this command!')
        }
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]).username
        if (!mentionMember) {
            return message.channel.send('Please mention a user!')
        }
        if (!args[1]) {
            return message.channel.send('Missing role name!')
        }
        try {
            const RoleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));
            mentionMember.roles.remove(RoleName)
            return message.channel.send(`Successfully removed **${RoleName.name}** role from ${mentionMember}`)
        } catch (e) {
            return message.channel.send(`There was an error\n${e}`)
        }
    }
}