const Discord = require('discord.js')

module.exports = {
    name: "ban",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have permission to do this command!')
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!mentionMember) return message.channel.send('You need to mention a user!')
        if (mentionMember == message.author.id) return message.channel.send('You cant ban yourself!')
        if (mentionMember.id == client.user.id) return message.channel.send('You cant ban me!')
        try {
            let reason = args.slice(1).join(" ") || 'There are no reason'
            await mentionMember.ban({ reason: reason})
            message.channel.send(`Successfully ban ${mentionMember} with reason ${reason}`)
        } catch(e) {
            return message.channel.send('There was an error')
        }
    }
}