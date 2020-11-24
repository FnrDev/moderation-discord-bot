const { MessageEmbed } = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "hug",
    run: async(client, message, args) => {
        const url = 'https://some-random-api.ml/animu/hug'

        let response, data
        try {
            response = await axios.get(url)
            data = response.data
        } catch (e) {
            return message.channel.send('There was an error!')
        }
        const mentionMember = message.mentions.members.first()
        if (!mentionMember) {
            return message.channel.send("You can't hug yourself")
        }
        if (message.author.id == mentionMember.id) {
            return message.channel.send("You can't hug yourself")
        }
        const embed = new MessageEmbed()
        .setDescription(`<@${message.author.id}> hugs ${mentionMember}`)
        .setImage(data.link)
        .setColor('RANDOM')
        await message.channel.send(embed)
    }
}