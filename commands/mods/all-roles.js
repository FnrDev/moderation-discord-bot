const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "roles",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES')) {
            const embed = new MessageEmbed()
            .setTitle('You dont have permission to do this command!')
            .setColor('#ff0000')
            return message.channel.send(embed)
        }
        let rolemap = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(r => r).join(" ,")
        if (rolemap.length > 1024) return message.channel.send('To many roles to display')
        if (!rolemap) return message.channel.send('No roles in this server')
        const embed = new MessageEmbed()
        .setTitle(`All roles in guild ${message.guild.name}`)
        .addField("Role List: ", rolemap)
        message.channel.send(embed)
    }
}