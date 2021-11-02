const Discord = require('discord.js')
const { Intents, Client, Message } = require('discord.js')
const MessageEmbed = require('discord.js')
const myIntents = new Intents();
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

const {
    spam,
    subnetRole,
    ownerID
} = require('./config.json')

module.exports = {
    unlocked,
    locked,
}

function unlocked(message) {
    message.delete({timeout : 10000})
    message.channel.send('<@&874895237217124352>');
    const embed = new Discord.MessageEmbed()
        .setTitle('Subnet Status')
        .setColor(0x00ffff)
        .setDescription('Proxies Unlocked :unlock:')
        .setFooter('Lethal Proxies | Powered by Skhinda#0001', 'https://pbs.twimg.com/profile_images/1434037784931602434/Zdq0N7y7_400x400.jpg')
    message.channel.send({ embeds : [embed]});
    
};

function locked(message) {
    message.delete({timeout : 10000})
    message.channel.send('<@&874895237217124352>');
    const embed = new Discord.MessageEmbed()
        .setTitle('Subnet Status')
        .setColor(0x00ffff)
        .setDescription('Proxies Locked :lock:')
        .setFooter('Lethal Proxies | Powered by Skhinda#0001', 'https://pbs.twimg.com/profile_images/1340499493775699968/fpXEBDud_400x400.jpg')
    message.channel.send({ embeds : [embed]});
    
};