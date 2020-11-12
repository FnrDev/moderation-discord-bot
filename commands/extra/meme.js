const { MessageEmbed } = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "meme",
    run: async(client, message, args) => {
        const url = 'https://meme-api.herokuapp.com/gimme'

        let data, response;
        try {
            response = await axios.get(url)
            data = response.data
        } catch (e) {
            return message.channel.send('There was an error')
        }
        const embed = new MessageEmbed()
        .setTitle('Meme URL')
        .setURL(data.postLink)
        .setDescription(`Meme Title: **${data.title}**`)
        .setColor('RANDOM')
        .setImage(data.url)
        await message.channel.send(embed)
    }
}