const {MessageEmbed, Role} = require('discord.js')

module.exports = {
    name: 'user',
    run: async(client, message, args) => {
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const embed = new MessageEmbed()
        .setAuthor(mentionMember.user.tag, mentionMember.user.displayAvatarURL({ dynamic: true }))
        .setColor('RANDOM')
        .setThumbnail(mentionMember.user.displayAvatarURL({dynamic: true}))
        .addFields(
            {
                name: "Account Created At: ",
                value: mentionMember.user.createdAt.toLocaleString(),
                inline: true
            },
            {
                name: "Joined At: ",
                value: mentionMember.guild.joinedAt.toLocaleString(),
                inline: true
            },
            {
                name: "User ID: ",
                value: mentionMember.id,
                inline: true
            },
            {
                name: "Is it a bot?",
                value: mentionMember.user.bot,
                inline: true
            },
            {
                name: "Avatar URL: ",
                value: `[Avatar Link](${mentionMember.user.displayAvatarURL({dynamic: true})})`,
                inline: true
            },
            {
                name: "Boosted Since:",
                value: mentionMember.premiumSince || 'User dont have boost in this server',
                inline: true
            },
            {
                name: "User Roles: ",
                value: mentionMember.roles.cache.map(role => role.toString()).join(" ,"),
                inline: true
            }
        )
        await message.channel.send(embed)
    }
}