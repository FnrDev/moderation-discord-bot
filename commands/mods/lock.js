const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'lock',
	run: async(client, message, args) => {
		if (!message.member.hasPermission('MANAGE_CHANNELS')) {
			const embed = new MessageEmbed()
			.setTitle('You dont have permission to do this command!')
			.setColor('#ff0000')
			return message.channel.send(embed)
		}
		const role = message.guild.roles.cache.find(role => role.name == '@everyone')
		const mentionChannel = message.mentions.channels.first() || message.channel
		const reason = args.slice(1).join(" ") || 'With no reason'

		mentionChannel.updateOverwrite(role, {
			'SEND_MESSAGES': false,
		})
		.then(message.channel.send(`Successfully locked ${mentionChannel}\nwith reason **${reason}**`))
		.catch(err => {
			return message.channel.send('There was an error!')
		})
	}
}