const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const Discord = require('discord.js');
const { Intents, Client, Message } = require('discord.js');
const logo = ('https://pbs.twimg.com/profile_images/1434037784931602434/Zdq0N7y7_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');
const fetch = require('node-fetch')

const {
    email,
    password,
    ccNumber,
    expiry,
    cvc,
    firstName,
    lastName,
    billingLine1,
    city,
    state,
    zipCode,
    phoneNumber,
    dashboard,
    dashboardAPI,
    coupon,
    fakeCCNumber,
    fakeEmail,
    fakeName,
    prefix,
    eliteDataCheck
} = require('./config.json');

module.exports = {
    purchase,
    topup
}

async function topup(message) {
    var myHeaders = new fetch.Headers();
    myHeaders.append("X-Access-Token", "Bearer " + dashboardAPI);

    var requestOptions = {
         method: 'GET',
         headers: myHeaders,
            redirect: 'follow'
    };

    const response = await fetch(eliteDataCheck, requestOptions)
    const result = await response.text()
    const result2 = await JSON.parse(result)
    var currentBalance = ((result2.availableTraffic).toFixed(0))
    var currentBalance2 = ((result2.availableTraffic).toFixed(2))
    const result3 = (21 - (currentBalance))
    var neededBalance = (JSON.stringify(result3))
    const orderEmbed = message.embeds[0];
    const orderInit = new Discord.MessageEmbed(orderEmbed)
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const loggedIn = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB\nLogged In!`)
        .setColor(0x8A2BE2)
        .setTimestamp()  
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const accessingElite = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB\nLogged In!\nAccessing Elite Plan`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const addingCoupon = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const changingQuantity = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const initiatingPayPal = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity\nInitiating PayPal Checkout`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const submittingBilling = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const submittingOrder = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing\n__Submitting Order__`)
        .setColor(0xFFAE42)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    puppeteer.launch({headless: false}, { args: ['--no-sandbox'] }).then(async browser => {
        let orderInitEmbed1 = await message.channel.send({embeds: [orderInit]})
        const page = await browser.newPage();
        await page.setViewport({ width: 1400, height: 1000 });
        try {    
        await page.goto(dashboard);
        await page
            .waitForSelector('form > div.input-group.mb-3 > input')
            .then(() => page.type('form > div.input-group.mb-3 > input', email))
            .then(() => page.type('form > div.input-group.mb-4 > input', password))
            .then(() => page.click('form > div.row > div.col-4 > button'))
        await orderInitEmbed1.edit({embeds:[loggedIn]});
        await console.log('Logged In')
        await page.waitForTimeout(2000)
        await page
            .waitForSelector('#sidebar > ul > li:nth-child(4) > a')
            .then(() => page.click('#sidebar > ul > li:nth-child(4) > a'))
        await console.log('Accessing Elite Plan...')
        await orderInitEmbed1.edit({embeds:[accessingElite]});
        await page.waitForTimeout(5000)
        await page
            .waitForSelector('body > div.c-wrapper > div > main > div > div > div > div > div > a:nth-child(1)')
            .then(() => page.click('body > div.c-wrapper > div > main > div > div > div > div > div > a:nth-child(1)'))
        await page
            .waitForSelector('#coupon_code')
            .then(() => page.type('#coupon_code', 'max10'))
            .then(() => page.click('#coupon_submit_button'))
        await console.log('Adding Coupon Code...')
        await orderInitEmbed1.edit({embeds:[addingCoupon]});
        await page.waitForTimeout(5000)
        await page 
            .waitForSelector('#quantity')
            .then(() => page.click('#quantity'))
            .then(() => page.keyboard.press('Backspace'))
            .then(() => page.type('#quantity', (neededBalance)))
        await console.log('Changing GB Quantity...')
        await orderInitEmbed1.edit({embeds:[changingQuantity]});
        await page.waitForTimeout(1000)
        await page
            .waitForSelector('#submit_button')
            .then(() => page.click('#submit_button'))
        await page.waitForTimeout(5000)
        await page
            .waitForSelector('#paypal')
            .then(() => page.click('#paypal'))
            .then(() => page.click('#payButton'))
        await page.waitForTimeout(5000)
        await console.log('Initiated PayPal Checkout')
        await orderInitEmbed1.edit({embeds:[initiatingPayPal]});
        await page
            .waitForSelector('#startGuestOnboardingFlow')
            .then(() => page.click('#startGuestOnboardingFlow'))
        await page.waitForTimeout(2000)
        await console.log('Entering Email Address...')
        await page
            .waitForSelector('#onboardingFlowEmail')
            .then(() => page.type('#onboardingFlowEmail', email))
            .then(() => page.keyboard.press('Enter'))
        await page.waitForTimeout(3000)
        await console.log('Entering Billing Info...')
        await orderInitEmbed1.edit({embeds:[submittingBilling]});
        await page
            .waitForSelector('#cardNumber')
            .then(() => page.type('#cardNumber', ccNumber))
            .then(() => page.type('#cardExpiry', expiry))
            .then(() => page.type('#cardCvv', cvc))
            .then(() => page.type('#firstName', firstName))
            .then(() => page.type('#lastName', lastName))
            .then(() => page.type('#billingLine1', billingLine1))
            .then(() => page.type('#billingCity', city))
            .then(() => page.type('#billingState', state))
            .then(() => page.type('#billingPostalCode', zipCode))
            .then(() => page.type('#phone', phoneNumber))
        await console.log('Submitting Order')
        await orderInitEmbed1.edit({embeds:[submittingOrder]});
        await page.waitForTimeout(2000)
        await page
            .waitForSelector('#root > div > div.css-ltr-197ljhr > main > div > form > div:nth-child(8) > button')
            .then(console.log('Submitting Checkout!'))
            .then(() => page.click('#root > div > div.css-ltr-197ljhr > main > div > form > div:nth-child(8) > button'))
        await page.waitForTimeout(1800)
        await page
            .waitForSelector('body > div.c-wrapper > div > main > div > div > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(1)')
            .then(console.log(`Successfully Checked Out!`))
        const checkedOut = new Discord.MessageEmbed()
            .setTitle(`Successfully Checked Out!`)
            .setDescription(`**Status:**\nInitiating  order of \`\`${neededBalance}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing\n__Submitting Order__\n\n **Order Information:**\n\nAmount Purchased: \`\`${neededBalance}\`\` GB\nUpdated Balance: \`\`${(neededBalance) += (currentBalance2)}\`\``)
            .setColor(0x00FF00)
            .setTimestamp()
            .setThumbnail('https://toppng.com/uploads/preview/best-free-checkmark-check-mark-transparent-background-free-11562873601nxp1ox2tft.png')
            .setFooter(footer, logo)
        await orderInitEmbed1.edit({embeds:[checkedOut]});
        await page.waitForTimeout(2000)
        } catch(err) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Uh Oh!')
                .setColor('RED')
                .setDescription(`An error has occured:\n\`\`\`${err}\`\`\``)
            message.channel.send({embeds: [embed]});
            }
    browser.close()
        }) 
};

function purchase(message, args) {
    const orderEmbed = message.embeds[0];
    const orderInit = new Discord.MessageEmbed(orderEmbed)
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const loggedIn = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB\nLogged In!`)
        .setColor(0x8A2BE2)
        .setTimestamp()  
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const accessingElite = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Elite Plan`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const addingCoupon = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const changingQuantity = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const initiatingPayPal = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity\nInitiating PayPal Checkout`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const submittingBilling = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const submittingOrder = new Discord.MessageEmbed()
        .setTitle(`New Elite Order`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing\n__Submitting Order__`)
        .setColor(0xFFAE42)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const checkedOut = new Discord.MessageEmbed()
        .setTitle(`Successfully Checked Out!`)
        .setDescription(`**Status:**\nInitiating  order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Elite Plan\nAdding Coupon Code\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing\n__Submitting Order__\n\n **Order Information:**\n\nAmount Purchased: \`\`${args[1]}\`\` GB\nEmail used: \`\`${email}\`\``)
        .setColor(0x00FF00)
        .setTimestamp()
        .setThumbnail('https://toppng.com/uploads/preview/best-free-checkmark-check-mark-transparent-background-free-11562873601nxp1ox2tft.png')
        .setFooter(footer, logo)
    puppeteer.launch({headless: false}, { args: ['--no-sandbox'] }).then(async browser => {
        let orderInitEmbed1 = await message.channel.send({embeds: [orderInit]})
        const page = await browser.newPage();
        await page.setViewport({ width: 1400, height: 1000 });
        try {
        await page.goto(dashboard);
        await page
            .waitForSelector('form > div.input-group.mb-3 > input')
            .then(() => page.type('form > div.input-group.mb-3 > input', email))
            .then(() => page.type('form > div.input-group.mb-4 > input', password))
            .then(() => page.click('form > div.row > div.col-4 > button'))
        await orderInitEmbed1.edit({embeds:[loggedIn]});
        await console.log('Logged In')
        await page.waitForTimeout(2000)
        await page
            .waitForSelector('#sidebar > ul > li:nth-child(4) > a')
            .then(() => page.click('#sidebar > ul > li:nth-child(4) > a'))
        await console.log('Accessing Elite Plan...')
        await orderInitEmbed1.edit({embeds:[accessingElite]});
        await page.waitForTimeout(5000)
        await page
            .waitForSelector('body > div.c-wrapper > div > main > div > div > div > div > div:nth-child(2) > a:nth-child(1)')
            .then(() => page.click('body > div.c-wrapper > div > main > div > div > div > div > div:nth-child(2) > a:nth-child(1)'))
        await page
            .waitForSelector('#coupon_code')
            .then(() => page.type('#coupon_code', 'max10'))
            .then(() => page.click('#coupon_submit_button'))
        await console.log('Adding Coupon Code...')
        await orderInitEmbed1.edit({embeds:[addingCoupon]});
        await page.waitForTimeout(5000)
        await page 
            .waitForSelector('#quantity')
            .then(() => page.click('#quantity'))
            .then(() => page.keyboard.press('Backspace'))
            .then(() => page.type('#quantity', args[1]))
        await console.log('Changing GB Quantity...')
        await orderInitEmbed1.edit({embeds:[changingQuantity]});
        await page.waitForTimeout(1000)
        await page
            .waitForSelector('#submit_button')
            .then(() => page.click('#submit_button'))
        await page.waitForTimeout(5000)
        await page
            .waitForSelector('#paypal')
            .then(() => page.click('#paypal'))
            .then(() => page.click('#payButton'))
        await page.waitForTimeout(5000)
        await console.log('Initiated PayPal Checkout')
        await orderInitEmbed1.edit({embeds:[initiatingPayPal]});
        await page
            .waitForSelector('#startGuestOnboardingFlow')
            .then(() => page.click('#startGuestOnboardingFlow'))
        await page.waitForTimeout(2000)
        await console.log('Entering Email Address...')
        await page
            .waitForSelector('#onboardingFlowEmail')
            .then(() => page.type('#onboardingFlowEmail', email))
            .then(() => page.keyboard.press('Enter'))
        await page.waitForTimeout(3000)
        await console.log('Entering Billing Info...')
        await orderInitEmbed1.edit({embeds:[submittingBilling]});
        await page
            .waitForSelector('#cardNumber')
            .then(() => page.type('#cardNumber', ccNumber))
            .then(() => page.type('#cardExpiry', expiry))
            .then(() => page.type('#cardCvv', cvc))
            .then(() => page.type('#firstName', firstName))
            .then(() => page.type('#lastName', lastName))
            .then(() => page.type('#billingLine1', billingLine1))
            .then(() => page.type('#billingCity', city))
            .then(() => page.type('#billingState', state))
            .then(() => page.type('#billingPostalCode', zipCode))
            .then(() => page.type('#phone', phoneNumber))
        await console.log('Submitting Order')
        await orderInitEmbed1.edit({embeds:[submittingOrder]});
        await page.waitForTimeout(2000)
        await page
            .waitForSelector('#root > div > div.css-ltr-197ljhr > main > div > form > div:nth-child(8) > button')
            .then(console.log('Submitting Checkout!'))
            .then(() => page.click('#root > div > div.css-ltr-197ljhr > main > div > form > div:nth-child(8) > button'))
        await page.waitForTimeout(1800)
        await page
            .waitForSelector('body > div.c-wrapper > div > main > div > div > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(1)')
            .then(console.log(`Successfully Checked Out!`))
        await orderInitEmbed1.edit({embeds:[checkedOut]});
        await page.waitForTimeout(2000)
        } catch(err) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Uh Oh!')
                .setColor('RED')
                .setDescription(`An error has occured:\n\`\`\`${err}\`\`\``)
            message.channel.send({embeds: [embed]});
            }
    browser.close()
    })
};