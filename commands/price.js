const Discord = require('discord.js')
const { Intents, Client, Message } = require('discord.js')
const MessageEmbed = require('discord.js')
const myIntents = new Intents();
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

module.exports = {
    price
}

function price(message) {
    const embed = new Discord.MessageEmbed()
        .setTitle('Pricing')
        .setColor(0x00ffff)
        .setDescription(`Here is the pricing:
        Vital:
        Blah Blah
        
        Elite:
        Blah Blah`)
    message.channel.send({ embeds: [embed]});
    };