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
    vitalSubtractLink
} = require('./config.json')

module.exports = {
    removeVital
}

function removeVital(message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle('Data removed!')
    .setDescription(`\`\`${args[2]}\`\` GB of Vital has been removed from \`\`${args[1]}\`\``)
    .setFooter(footer, logo)
    .setColor(0x00ffff)
    .setTimestamp()
var myHeaders = new fetch.Headers();
myHeaders.append("X-Access-Token", "Bearer " + dashboardAPI);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": args[1],
  "amount_usd_cents": (args[2]*100)
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
try {
fetch(vitalSubtractLink, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(result => message.channel.send({embeds: [embed]}))
  .catch(error => console.log('error', error));
    } catch(err) {
    const embed = new Discord.MessageEmbed()
            .setTitle('Uh Oh!')
            .setColor('RED')
            .setDescription(`An error has occured:\n\`\`\`${err}\`\`\``)
        message.channel.send({embeds: [embed]});
    }
}
