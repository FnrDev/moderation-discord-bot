const { MessageAttachment } = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "change",
    run: async(client, message, args) => {
        const mentionMember = message.mentions.members.first() || message.author
        const url = `https://some-random-api.ml/canvas/color?color=%23000000&avatar=${mentionMember.user.displayAvatarURL({ format: 'png'})}`

        let response, data
        try {
            response = await axios.get(url)
            data = response.data
        } catch (e) {
            return message.channel.send('There was an error please try again')
        }
        message.channel.send({
            files:
            [url]
        })
    }
}