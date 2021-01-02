const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
const client = new Discord.Client({
    disableEveryone: true,
  });
const config = require('./config.json');
const token = config.token;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;


["handlers", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
 

client.login(token);