const { MessageEmbed } = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "yt",
    run: async(client, message, args) => {
        let comment = args.join(" ")
        if (!comment) {
            return message.channel.send('You need to input your comment')
        }
        const url = `https://some-random-api.ml/canvas/youtube-comment?comment=${comment}&username=${message.author.username}&avatar=${message.author.displayAvatarURL({ format: 'png'})}`

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