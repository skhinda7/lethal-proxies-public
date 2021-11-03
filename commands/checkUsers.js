const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const Discord = require('discord.js');
const { Intents, Client, Message } = require('discord.js');
const logo = ('https://pbs.twimg.com/profile_images/1434037784931602434/Zdq0N7y7_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');
const fetch = require('node-fetch')
const{
    dashboardAPI,
    vitalSingleUser
} = require('./config.json')

module.exports = {
    checkVitalUser
}

async function checkVitalUser(message, args) {
    var myHeaders = new fetch.Headers();
myHeaders.append("X-Access-Token", "Bearer " + dashboardAPI);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": args[1]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

try {
var response = await fetch(vitalSingleUser, requestOptions) //Single Vital User
const result = await response.json()
var embed = new Discord.MessageEmbed()
        .setTitle('Vital Balance')
        .setColor(0x00ffff)
        .setDescription(`\`\`${args[1]}\`\` has \`\`${(result.data.balance)/100}\`\` GB.`)
        .setTimestamp()
 message.channel.send({embeds:[embed]});
    } catch(err) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Uh Oh!')
            .setColor('RED')
            .setDescription(`An error has occured:\n\`\`\`${err}\`\`\``)
        message.channel.send({embeds: [embed]});
    }
}
