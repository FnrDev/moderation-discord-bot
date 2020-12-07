const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "gay",
    run: async(client, message, args) => {
        const mentionMember = message.mentions.members.first() || message.author
        const url = `https://some-random-api.ml/canvas/gay?avatar=${mentionMember.user.displayAvatarURL({ format: 'png'})}`

        let response, data
        try {
            response = await axios.get(url)
            data = response.data
        } catch (e) {
            return message.channel.send('There was an error!')
        }
        await message.channel.send({
            files:
            [url]
        })
    }
}