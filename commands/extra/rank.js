const { MessageAttachment } = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
    name: "rank",
    run: async(client, message, args) => {
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
        const img = mentionMember.user.displayAvatarURL({ format: 'png'})
        if (mentionMember.user.bot) {
            return message.channel.send('You cant do that in bots')
        }
        const rank = new canvacord.Rank()
        .setAvatar(img)
        .setUsername(mentionMember.user.username)
        .setDiscriminator(mentionMember.user.discriminator)
        .setProgressBar("#FFFFFF", "COLOR")
        .setCurrentXP(5)
        .setRequiredXP(10)
        .setStatus(mentionMember.user.presence.status)
        rank.build()
        .then(buffer => {
            const image = new MessageAttachment(buffer, 'RankCard.png')
            message.channel.send(image)
        })
    }
}