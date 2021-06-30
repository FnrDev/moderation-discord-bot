const fs = require('fs');
const Developer = ['596227913209217024']

module.exports = {
    name: "reload",
    run: async(client, message, args, msg) => {
        if (!Developer.includes(message.author.id)) return;
        if (!args[0]) {
            return message.channel.send(':x: **Missing file name!**')
        }
        const cmd = args[0].toLowerCase();
        const command = message.client.commands.get(cmd)
        if (!command) {
            return message.channel.send(`There is no command with name or alias \`${cmd}\`, ${message.author}!`);
        }
        const commandFolders = fs.readdirSync('./commands');
        const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${cmd}.js`));
        delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];
        try {
            const newCommand = require(`../${folderName}/${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${command.name}\` was reloaded!`);
        } catch (error) {
            return message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }
    },
};