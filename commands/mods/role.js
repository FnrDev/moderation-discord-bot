const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "role",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.channel.send('You dont have permission to do this command!')
        }
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionMember) {
            return message.channel.send('You need to mention a member')
        }
        const roleName = args.slice(1).join(" ");
        if (!roleName) {
            return message.channel.send('Missing Role Name')
        }
        const botRole = message.guild.member(message.guild.me).roles.highest.position;
        const role = mentionMember.roles.highest.position;
        const authorRole = message.member.roles.highest.position;
        if (authorRole <= role) {
            return message.channel.send("I can't role this member because that member has role position is higher than my role or same as you!")
        }
        if (botRole <= role) {
            return message.channel.send("I can't role this member because that member has role position is higher than my role or same as you!")
        }
        try {
            let msg;
            const role = message.guild.roles.cache.get(message.guild.roles.cache.filter(r => r.name.toLowerCase().startsWith(roleName)).map(r => r.id)[0]) || message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
            if (!role) {
                return message.channel.send('i can\'t find role with this name!')
            }
            if (mentionMember._roles.includes(role.id)) {
                msg = '-'
                mentionMember.roles.remove(role, `By ${message.author.tag}`)
                message.channel.send(`✅ | Changed role for ${mentionMember} **${msg}${role.name}**`)
            } else {
                msg = '+'
                mentionMember.roles.add(role, `By ${message.author.tag}`)
                message.channel.send(`✅ | Changed role for ${mentionMember} **${msg}${role.name}**`)
            }
        } catch (e) {
            return message.channel.send(`There was an error **${e}**`)
        }
    }
}