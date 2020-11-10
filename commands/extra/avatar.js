const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "av",
    run: async (client, message, args) => {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
          } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
          } else {
            user = message.author;
          }
          
          let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
          
          const embed = new MessageEmbed()
          .setTitle(`${user.tag} Avatar`)
          .setDescription(`[Avatar URL](${avatar})`)
          .setColor('RANDOM')
          .setImage(avatar)
          .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}` , message.author.displayAvatarURL({dynamic: true}))
          return message.channel.send(embed);
        
    }
}