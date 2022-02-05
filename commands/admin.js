const Discord = require('discord.js')
const { Intents, Client, Message } = require('discord.js')
const MessageEmbed = require('discord.js')
const myIntents = new Intents();
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const logo = ('https://pbs.twimg.com/profile_images/1434037784931602434/Zdq0N7y7_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');
const fetch = require('node-fetch');
const request = require('request')

module.exports = {
    commands,
    sol
};

function commands(message) {
    const embed = new Discord.MessageEmbed()
        .setTitle('Admin Commands')
        .setColor(0x00ffff)
        .setDescription(`\`\`!topelite\`\` - Tops up Elite data back to ~20 GB\n\n\`\`!topvital\`\` - Tops up Vital data back to ~20 GB\n\n\`\`!buytoxic <amount of IPs>\`\` - Purchases X amount of Toxic ISP's.
        \n\`\`!check\`\` Checks data for Elite/Vital\n\n\`\`!info <sub-user>\`\` - Sends the ID, available/used data for sub-user\n\n\`\`!addelite <user-id> <amount of GB>\`\` - Adds Elite data to sub-user\n\n \`\`!addvital <sub-user> <amount of GB>\`\` - Adds Vital data to sub-user\n\n\n**Please use these commands wisely and only in staff channels.**`)
        .setFooter(footer, logo)
        message.channel.send({embeds : [embed]})
};

async function sol(message, args) {
    response = await fetch(new request("https://api.livecoinwatch.com/coins/single"), {
            method: "POST",
            headers: new fetch.Headers({
              "content-type": "application/json",
              "x-api-key": 'f2267d3f-bca3-443a-b2f6-c16484753caf',
            }),
            body: JSON.stringify({
              currency: "USD",
              code: "SOL",
              meta: true,
            }),
          });
    console.log(response)
}