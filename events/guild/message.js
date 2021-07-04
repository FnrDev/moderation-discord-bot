const Timeout = new Set();
const { MessageEmbed, WebhookClient } = require('discord.js')
const { prefix } = require('../../config.json')
const ms = require('ms')

module.exports = async (bot , message) => {
    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    if(!message.guild) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return; 
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));
    if (command) {
        if (command.timeout) {
            if (Timeout.has(`${message.author.id}${command.name}`)) {
                const embed = new MessageEmbed()
                .setTitle('You are in timeout!')
                .setDescription(`:x: You need to wait ${ms(command.timeout)} to use command again`)
                .setColor('#ff0000')
                return message.channel.send(embed)
            } else {       
                command.run(bot, message, args);
                Timeout.add(`${message.author.id}${command.name}`)
                setTimeout(() => {
                    Timeout.delete(`${message.author.id}${command.name}`)
                }, command.timeout);
                const webhook = new WebhookClient('id', 'token')
                const embed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setColor('#fab20a')
                .addFields(
                    {
                        name: "Guild Name:",
                        value: message.guild.name
                    },
                    {
                        name: "Guild ID:",
                        value: message.guild.id
                    },
                    {
                        name: "Command Runs:",
                        value: command.name
                    },
                    {
                        name: "Channel Name:",
                        value: message.channel.name
                    },
                    {
                        name: "Channel ID:",
                        value: message.channel.id
                    }
                )
                await webhook.send('', {
                    username: bot.user.username,
                    avatarURL: bot.user.displayAvatarURL(),
                    embeds: [embed]
                })
            }
        } else {
            command.run(bot,message,args)
        }
    }
}