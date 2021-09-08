const Discord = require('discord.js')
const { Intents, Client, Message } = require('discord.js')
const MessageEmbed = require('discord.js')
const myIntents = new Intents();
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const logo = ('https://pbs.twimg.com/profile_images/1340499493775699968/fpXEBDud_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');

module.exports = {
    commands
};

function commands(message) {
    const embed = new Discord.MessageEmbed()
        .setTitle('Admin Commands')
        .setColor(0x00ffff)
        .setDescription(`Here is a list of admin commands:\n\n\`\`!buyelite <amount of GB>\`\` - This will purchase X amount of Elite data and put it in the main user balance.\n\n\`\`!buyvital <amount of GB>\`\` - This will purchase X amount of Vital data and put it in the main user balance.
        \n\`\`!checkelite\`\` - This will check the main user balance for Elite\n\n\`\`!checkvital\`\` - This will check the main user balance for Vital.\n\n**Please use these commands wisely and only in staff channels.**`)
        .setFooter(footer, logo)
        message.channel.send({embeds : [embed]})
};