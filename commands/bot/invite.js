const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "invite",
    run: (client, message) => {
        const botID = '' // Your bot id
        const embed = new MessageEmbed()
        .setTitle(`${client.user.username} invite`)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${botID}&permissions=8&scope=bot`)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}