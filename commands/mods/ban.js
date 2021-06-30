const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "ban",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have permission to do this command!')
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!mentionMember) return message.channel.send('You need to mention a user!')
        if (mentionMember == message.author.id) return message.channel.send('You cant ban yourself!')
        if (mentionMember.id == client.user.id) return message.channel.send('You cant ban me!')
        const botRole = message.guild.member(message.guild.me).roles.highest.position;
        const role = mentionMember.roles.highest.position;
        const authorRole = message.member.roles.highest.position;
        if (authorRole <= role) {
            return message.channel.send("I can't ban this member because that member has role position is higher than my role or same as you!")
        }
        if (botRole <= role) {
            return message.channel.send("I can't ban this member because that member has role position is higher than my role or same as you!")
        }
        try {
            let reason = args.slice(1).join(" ") || 'There are no reason'
            const embed = new MessageEmbed()
            .setTitle('You have been banned')
            .setDescription(`You have been banned in **${message.guild.name}** for **${reason}** by ${message.author.tag}`)
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
            mentionMember.send(embed)
            await mentionMember.ban({ reason: reason, days: 7 })
            message.channel.send(`Successfully ban ${mentionMember} with reason ${reason}`)
        } catch(e) {
            return message.channel.send('There was an error')
        }
    }
}