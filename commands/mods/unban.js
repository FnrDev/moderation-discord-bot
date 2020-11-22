const Discord = require('discord.js')

module.exports = {
    name: "unban",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_BANS')) {
            return message.channel.send('You dont have permission to do this command!')
        }
        const mentionMember = args[0]
        if (!mentionMember) {
            return message.channel.send('Please mention a member to unban!')
        }
        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(mentionMember)
            })
            message.channel.send(`Successfully <@${mentionMember}> has been unbanned`)
        } catch(e) {
            return message.channel.send(`There was an error \n\n ${e}`)
        }
    }
}