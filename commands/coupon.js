const Discord = require('discord.js')
const { Intents, Client, Message } = require('discord.js')
const MessageEmbed = require('discord.js')
const myIntents = new Intents();
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const logo = ('https://pbs.twimg.com/profile_images/1340499493775699968/fpXEBDud_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');

module.exports = {
    couponCode
}

function couponCode(message) {
    const embed = new Discord.MessageEmbed()
        .setTitle('Discount Code')
        .setColor(0x00ffff)
        .setDescription('Use \`\`LETHAL\`\` for 15% off on all residential plans!\n\n For a higher percentage, or ISP discounts, please check <#884648905793495050> for any active discounts.')
        .setFooter(footer, logo)
    message.channel.send({embeds: [embed]})
};