const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    run: async (client, message, args) => {
        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 
          let avatar = mentionMember.user.displayAvatarURL({size: 4096, dynamic: true});
          const embed = new MessageEmbed()
          .setTitle(`${mentionMember.user.tag} Avatar`)
          .setDescription(`[Avatar URL](${avatar})`)
          .setColor('RANDOM')
          .setImage(avatar)
          .setFooter(`Requested by ${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
          return message.channel.send(embed);     
    }
}