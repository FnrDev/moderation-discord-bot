const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "binfo",
    category: "bot",
    description: "Get info about bot",
    timeout: 3000,
    run: async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Bot info')
        .setColor('RANDOM')
        .setFooter('By Fnr#0017 | Github: FnrDev')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            {
                name: "Total Guilds: ",
                value: `${client.guilds.cache.size} Guilds`,
                inline: true
            },
            {
                name: "Total Users: ",
                value: `${client.users.cache.size} Users`,
                inline: true
            },
            {
                name: "Total Channels: ",
                value: `${client.channels.cache.size} Channels`,
                inline: true
            },
            {
                name: "You can get me for free at: ",
                value: `[Link](https://github.com/FnrDev/moderation-discord-bot)`,
                inline: true
            }
        )
        await message.channel.send(embed)
    }
}