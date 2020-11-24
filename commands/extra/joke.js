const { MessageEmbed } = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "joke",
    run: async(client, message, args) => {
        const url = 'https://some-random-api.ml/joke'
        let joke, response;
        try {
            response = await axios.get(url)
            joke = response.data
        } catch (e) {
            return message.channel.send('There was an error!')
        }
        const embed = new MessageEmbed()
        .setTitle('Joke: ')
        .setColor('RANDOM')
        .setDescription(`Joke: ${joke.joke}`)
        await message.channel.send(embed)
    }
}