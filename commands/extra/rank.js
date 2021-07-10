const { MessageAttachment } = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
    name: "rank",
    run: async(client, message, args) => {
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; // Get user mention or message author
        const img = mentionMember.user.displayAvatarURL({ format: 'png'}) // format user image to "png" format
        if (mentionMember.user.bot) {
            return message.channel.send('You cant do that in bots') // You cant get rank about bots
        }
        message.channel.startTyping(4) // start typing for 4 secounds
        const rank = new canvacord.Rank()
        .setAvatar(img) // user avatar
        .setUsername(mentionMember.user.username) // username for mention member or message author
        .setDiscriminator(mentionMember.user.discriminator) // discriminator for mention member or message author
        .setProgressBar("#FFFFFF", "COLOR") // progress bar for image
        .setCurrentXP(5) // current xp for user
        .setRequiredXP(10) // require xp for user
        .setStatus(mentionMember.user.presence.status) // user status for user. note you need to enable "PRESENCE INTENT" read https://support.discord.com/hc/en-us/articles/360040720412 for more info
        rank.build() // build the image
        .then(buffer => {
            const image = new MessageAttachment(buffer, 'RankCard.png')
            message.channel.send(image) // sending image to channel
            message.channel.stopTyping(true) // force stop typing after sending image
        })
    }
}