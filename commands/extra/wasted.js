const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "wasted",
    run: async(client, message, args) => {
        const mentionMember = message.mentions.members.first()
        const url = `https://some-random-api.ml/canvas/wasted?avatar=${mentionMember.user.displayAvatarURL({ format: 'png'})}`
        let response, data
        try {
            response = await axios.get(url)
            data = response.data
        } catch (e) {
            return message.channel.send('There was an error')
        }
        message.channel.send({
            files:
            [url]
        })
    }
}