const Discord = require('discord.js');

module.exports = {
    name: 'setnick',
    category: 'mods',
    description: 'Change nickname for user',
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_NICKNAMES')) {
            return message.channel.send('**⛔ You dont have permission to do this command!**')
        }
        const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mention) return message.channel.send('**⛔ You need to mention a user!**')
        try {
        const nickname = args.slice(1).join(" ")
        if (!nickname) {
            mention.setNickname('')
            return message.channel.send(`✅ ${mention} nickname has been reset`)
        }
        if (nickname) {
            await mention.setNickname(nickname)
            message.channel.send(`✅ ${mention} nickname has been set to **${nickname}**`)
        }
        } catch (e) {
            return message.channel.send(':x: i cant change nickname for this member')
        }
    }
}