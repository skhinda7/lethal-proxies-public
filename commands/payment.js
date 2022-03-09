const Discord = require('discord.js')
const { Intents, Client, Message } = require('discord.js')
const MessageEmbed = require('discord.js');
const myIntents = new Intents();
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const {
    token,
    prefix,
    logo,
    footer,
    myZelle,
    myCashapp,
    myVenmo,
    myPayPal
} = require('./config.json');

module.exports = {
    payment
}

function payment(message, args) {
    const embed = new Discord.MessageEmbed() 
        .setTitle('Payment Methods')
        .setColor(0x00ffff)
        .setDescription(`**Please pay \`\`$${args[1]}.00\`\` to one of the following:**\n\nZelle (Preferred): \`\`${myZelle}\`\`\nCashapp: \`\`${myCashapp}\`\`\nVenmo: \`\`${myVenmo}\`\`\n\n*After you've paid, please send a screenshot as proof of payment.*`)
        .setFooter(footer, logo)
    message.channel.send({embeds: [embed]});
}