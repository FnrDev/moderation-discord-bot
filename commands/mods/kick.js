const Discord = require('discord.js')

module.exports = {
    name: "kick",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You dont have permission to do this command!')
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!mentionMember) return message.channel.send('You need to mention a member!')
        if (mentionMember.id == message.author.id) return message.channel.send('You cant kick yourself!')
        if (mentionMember.id == client.user.id) return message.channel.send('You cant kick me')
        const botRole = message.guild.member(message.guild.me).roles.highest.position;
        const role = mentionMember.roles.highest.position;
        const authorRole = message.member.roles.highest.position;
        if (authorRole <= role) {
            return message.channel.send("I can't kick this member because that member has role position is higher than my role or same as you!")
        }
        if (botRole <= role) {
            return message.channel.send("I can't kick this member because that member has role position is higher than my role or same as you!")
        }
        try {
            await mentionMember.kick()
            message.channel.send(`Successfully kick ${mentionMember}`)
        } catch(e) {
            return message.channel.send('There was an error')
        }
    }
}