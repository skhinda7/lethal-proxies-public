const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const Discord = require('discord.js');
const { Intents, Client, Message } = require('discord.js');
const logo = ('https://pbs.twimg.com/profile_images/1434037784931602434/Zdq0N7y7_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');
const fetch = require('node-fetch')
const {
    dashboardAPI,
    eliteAddLink,
    vitalAddLink,
} = require('./config.json')

module.exports = {
    addVital,
    addEliteToUser
}

async function addEliteToUser(message, args) {
  var myHeaders = new fetch.Headers();
myHeaders.append("X-Access-Token", "Bearer " + dashboardAPI);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "amount": args[2]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

try {
const response2 = await fetch(eliteAddLink + args[1] + `/give-traffic`, requestOptions)
const result2 = await response2.text()
const result3 = await JSON.parse(result2)
const embed1 = new Discord.MessageEmbed()
    .setTitle(`Added data!`)
    .setDescription(`Added \`\`${args[2]}\`\` to \`\`${args[1]}\`\`\n\nUpdated Balance: \`\`${result3.availableTraffic}\`\` GB`)
    .setColor(0x8A2BE2)
    .setTimestamp()
message.channel.send({embeds:[embed1]})

} catch(err) {
  const embed = new Discord.MessageEmbed()
      .setTitle('Uh Oh!')
      .setColor('RED')
      .setDescription(`An error has occured:\n\`\`\`${err}\`\`\``)
  message.channel.send({embeds: [embed]});
  console.log(err)
}};

function addVital(message, args) { //Add Vital to Sub-User
  const embed = new Discord.MessageEmbed()
    .setTitle('Data added!')
    .setDescription(`\`\`${args[2]}\`\` GB of Vital has been added to \`\`${args[1]}\`\``)
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
fetch(vitalAddLink, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(result => message.channel.send({embeds: [embed]}))
  .catch(error => message.channel.send('error', error));
} catch(err) {
  const embed = new Discord.MessageEmbed()
            .setTitle('Uh Oh!')
            .setColor('RED')
            .setDescription(`An error has occured:\n\`\`\`${err}\`\`\``)
        message.channel.send({embeds: [embed]});
  }
};