const Discord = require('discord.js')
const { Intents, Client, Message } = require('discord.js')
const MessageEmbed = require('discord.js')
const myIntents = new Intents();
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const prefix = ('!');
const dataChecker = require('./commands/dataChecker.js');
const subnetStatus = require('./commands/subnetstatus.js');
const misc = require('./commands/miscellaneous.js')
const buyElite = require('./commands/buyElite.js')
const pricing = require('./commands/price.js');
const buyVital = require('./commands/buyVital.js');
const admin = require('./commands/admin.js');
const {
    ownerID,
    supportID,
    token,
} = require(`./commands/config.json`);
const logo = ('https://pbs.twimg.com/profile_images/1340499493775699968/fpXEBDud_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');
const coupon = require('./commands/coupon.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        activity: {
            name: "Lethal Proxies",  // The message shown
            type: "PLAYING"
        }
    })
});

client.on('messageCreate', message => {
    if(message.content === prefix + 'pricing') {
        pricing.price(message);
    }
});

client.on('messageCreate', message => {
    if(message.content === prefix + 'unlock') { //Unlocked Subnet
        if(message.member.roles.cache.has(ownerID)) {
        subnetStatus.unlocked(message);
        } else {
            misc.notAuthorized(message);
        }
    }
});

client.on('messageCreate', message => { //Locked Subnet
    if(message.content === prefix + 'lock') {
        if(message.member.roles.cache.has(ownerID)) {
        subnetStatus.locked(message);
        } else {
            misc.notAuthorized(message);
        }
    }
});



client.on('messageCreate', message => { //Check Elite Balance
    if(message.content === prefix + 'checkelite') {
        if(message.member.roles.cache.has(supportID)) {
        dataChecker.checkElite(message)
        } else {
            misc.notAuthorized(message);
        }
    }
});

client.on('messageCreate', message => { //Check Vital Balance
    if(message.content === prefix + 'checkvital') {
        if(message.member.roles.cache.has(supportID)) {
        dataChecker.checkVital(message)
        } else {
            misc.notAuthorized(message);
        }
    }
});

client.on('messageCreate', message => {   //Buy Elite
    const args = message.content.split(' ')
    if(args[0] === prefix + 'buyelite') {
        if(message.member.roles.cache.has(supportID)) {
        buyElite.purchase(message, args);
            } else {
                misc.notAuthorized(message);
        }
    }
});

client.on('messageCreate', message => {   //Buy Vital
    const args = message.content.split(' ')
    if(args[0] === prefix + 'buyvital') {
        if(message.member.roles.cache.has(supportID)) {
        buyVital.purchase(message, args);
            } else {
                misc.notAuthorized(message);
        }
    }
});

client.on('messageCreate', message => { //Discount Code
    if(message.content === prefix + 'coupon') {
        coupon.couponCode(message);
    }
});

client.on('messageCreate', message => {
    if(message.content === prefix + 'adminhelp') {
        message.delete({timeout : 2000})
        if(message.member.roles.cache.has(supportID)) {
            admin.commands(message);
        } else {
            misc.notAuthorized(message);
        }
    }
});
client.login(token);