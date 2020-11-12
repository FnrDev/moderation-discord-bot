const Discord = require('discord.js')

module.exports = {
    name: "addrole",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.channel.send('You dont have permission to do this command!')
        }
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!mentionMember) {
            return message.channel.send("Wrong usage `addrole @user`")
        }
        if (!args[1]) {
            return message.channel.send('Please enter role name')
        }
        const RoleName = message.guild.roles.cache.find(r => (r.name === args[1].toLocaleString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));
        const UserAlreadyHaveRole = mentionMember._roles.includes(RoleName.id);
        if (UserAlreadyHaveRole) {
            return message.channel.send('User already have this role!')
        }
        mentionMember.roles.add(RoleName)
        .then(message.channel.send(`Successfully added **${RoleName.name}** role to ${mentionMember}`))
        .catch(err => {
            return message.channel.send('There was an error')
        })
    }
}