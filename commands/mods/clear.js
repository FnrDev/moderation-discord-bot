const Discord = require('discord.js')

module.exports = {
    name: "clear",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have permission to do this command!')

        if (!args[0]) return message.channel.send('Please enter a amont from 1 to 100')
        message.delete()
        let deleteAmont
        if (parseInt(args[0]) > 100) {
            deleteAmont = 100;
        } else {
            deleteAmont = parseInt(args[0])
        }
        await message.channel.bulkDelete(deleteAmont, true)
        await message.channel.send(`Successfully deleted ${deleteAmont} messages`)
        .then(m => m.delete({ timeout: 2000}))
        .catch(err => {
            return message.channel.send('There was an error!')
        })
    }
}