const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const Discord = require('discord.js');
const { Intents, Client, Message } = require('discord.js');
const logo = ('https://pbs.twimg.com/profile_images/1434037784931602434/Zdq0N7y7_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');
const fetch = require('node-fetch')

module.exports = {
    att,
    all
}

async function att(message, args) {
    const checking = new Discord.MessageEmbed()
        .setTitle(`Checking \`\`${args[1]}\`\` stock...`)
        .setColor('PURPLE')
    const inStock = new Discord.MessageEmbed()
        .setTitle(`\`\`${args[1]}\`\` Subnet is in stock :white_check_mark:`)
        .setColor('GREEN')
    const outOfStock = new Discord.MessageEmbed()
        .setTitle(`\`\`${args[1]}\`\` Subnet is out of stock. :x:`)
        .setColor('RED')
    const status = await message.channel.send({embeds: [checking]})
    puppeteer.launch({headless: true}, { args: ['--no-sandbox'] }).then(async browser => {
    const page = await browser.newPage()
    await page.setViewport({ width: 1400, height: 1000 })
    try {
        await page.goto(`https://proxycue.com/whmcs/index.php?rp=/store/ip-services/${args[1]}-24`)
        await page.waitForTimeout(2500)
        if((await page.$('#order-standard_cart > div > div.cart-body > div.row > div.secondary-cart-body > form > div.view-cart-items > div > div > div.col-sm-7 > span.item-title')) !== null) {
            await status.edit({embeds:[inStock]});
        } else {
            await status.edit({embeds:[outOfStock]});
        }
    } catch(err) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Uh Oh!')
        .setColor('RED')
        .setDescription(`An error has occured:\n\`\`\`${err}\`\`\``)
        await message.channel.send({embeds: [embed]})    
        }
    browser.close()
    })
};
async function all(message) {
puppeteer.launch({headless: true}, { args: ['--no-sandbox'] }).then(async browser => {
    const page = await browser.newPage()
    await page.setViewport({ width: 1400, height: 1000 })
    const checking = new Discord.MessageEmbed() 
        .setTitle('Checking Subnets')
        .setColor('PURPLE')
        .setThumbnail('https://images-ext-1.discordapp.net/external/V2Pgq3aejfvrTrBz_PG4EcTYRCQLJ22h6tKTbAOPUtM/https/upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_%28wobbly%29.gif')
    const checked1 = new Discord.MessageEmbed() 
        .setTitle('Checked :white_check_mark:')
        .setColor('GREEN') 
        const status = await message.channel.send({embeds: [checking]})
        try {
        await page.goto(`https://proxycue.com/whmcs/index.php?rp=/store/ip-services/att-24`)
        await page.waitForTimeout(2500)
        if((await page.$('#order-standard_cart > div > div.cart-body > div.row > div.secondary-cart-body > form > div.view-cart-items > div > div > div.col-sm-7 > span.item-title')) !== null) {
        var first = (':white_check_mark:')
            } else {
        var first = (':x:')
            } 
        await page.goto(`https://proxycue.com/whmcs/index.php?rp=/store/ip-services/verizon-24/`)
        if((await page.$('#order-standard_cart > div > div.cart-body > div.row > div.secondary-cart-body > form > div.view-cart-items > div > div > div.col-sm-7 > span.item-title')) !== null) {
            var second = (':white_check_mark:')
        } else {
            var second = (':x:')
        }
        await page.goto(`https://proxycue.com/whmcs/index.php?rp=/store/ip-services/sprint-24/`)
        if((await page.$('#order-standard_cart > div > div.cart-body > div.row > div.secondary-cart-body > form > div.view-cart-items > div > div > div.col-sm-7 > span.item-title')) !== null) {
            var third = (':white_check_mark:')
        } else {
            var third = (':x:')
        }
        await page.goto(`https://proxycue.com/whmcs/index.php?rp=/store/ip-services/ws-24/`)
        if((await page.$('#order-standard_cart > div > div.cart-body > div.row > div.secondary-cart-body > form > div.view-cart-items > div > div > div.col-sm-7 > span.item-title')) !== null) {
            var sixth = (':white_check_mark:')
        } else {
            var sixth = (':x:')
        }
        await page.goto(`https://proxycue.com/whmcs/index.php?rp=/store/ip-services/fs-restock-24/`)
        if((await page.$('#order-standard_cart > div > div.cart-body > div.row > div.secondary-cart-body > form > div.view-cart-items > div > div > div.col-sm-7 > span.item-title')) !== null) {
            var seventh = (':white_check_mark:')
        } else {
            var seventh = (':x:')
        }
        await page.goto(`https://proxycue.com/whmcs/index.php?rp=/store/ip-services/comcast-24/`)
        if((await page.$('#order-standard_cart > div > div.cart-body > div.row > div.secondary-cart-body > form > div.view-cart-items > div > div > div.col-sm-7 > span.item-title')) !== null) {
            var eighth = (':white_check_mark:')
        } else {
            var eighth = (':x:')
        }
        const checked = new Discord.MessageEmbed()
            .setTitle('Subnet Stock')
            .setDescription(`**ATT - ${first}\n\nVerizon - ${second}\n\nSprint - ${third}\n\nComcast - ${eighth}\n\nWindstream - ${sixth}\n\n Footsites - ${seventh}** `)
            .setColor('PURPLE')
            .setFooter('Powered by Skhinda#4392')
            status.edit({embeds:[checked1]})
            await message.channel.send({embeds : [checked]})
    } catch(err) {
        console.log(err)
    }
})};
