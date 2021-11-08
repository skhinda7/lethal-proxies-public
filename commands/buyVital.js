const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const Discord = require('discord.js');
const { Intents, Client, Message } = require('discord.js');
const logo = ('https://pbs.twimg.com/profile_images/1434037784931602434/Zdq0N7y7_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');
const fetch = require('node-fetch');

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
    coupon,
    vitalPurchaseLink,
    dashboardAPI,
    vitalAPILink
} = require('./config.json');

module.exports = {
    topup,
    purchase
};

async function topup(message) {
    var myHeaders = new fetch.Headers();
    myHeaders.append("X-Access-Token", "Bearer " + dashboardAPI);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
            const response = await fetch(vitalAPILink, requestOptions)
            const result = await response.json()
            var currentBalance = await ((21 - (result.data.balance)/200).toFixed(0))
            const currentBalance2 = await (JSON.stringify(currentBalance))   
    const orderEmbed = message.embeds[0];
    const orderInit = new Discord.MessageEmbed(orderEmbed)
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${currentBalance2}\`\` GB`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const loggedIn = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${currentBalance2}\`\` GB\nLogged In!`)
        .setColor(0x8A2BE2)
        .setTimestamp()  
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const changingQuantity = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${currentBalance2}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const initiatingPayPal = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${currentBalance2}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity\nInitiating PayPal Checkout`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const submittingBilling = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${currentBalance2}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const submittingOrder = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${currentBalance2}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing\n__Submitting Order__`)
        .setColor(0xFFAE42)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const checkedOut = new Discord.MessageEmbed()
        .setTitle(`Successfully Checked Out!`)
        .setDescription(`**Status:**\nInitiating order of \`\`${currentBalance2}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing\n__Submitting Order__\n\n **Order Information:**\n\nAmount Purchased: \`\`${currentBalance2}\`\` GB\nUpdated Balance: \`\`Undefined\`\``)
        .setColor(0x00FF00)
        .setTimestamp()
        .setThumbnail('https://toppng.com/uploads/preview/best-free-checkmark-check-mark-transparent-background-free-11562873601nxp1ox2tft.png')
        .setFooter(footer, logo)
    puppeteer.launch({ headless: false }).then(async browser => {
        let orderInitEmbed1 = await message.channel.send({embeds: [orderInit]})
        const page = await browser.newPage();
        await page.setViewport({ width: 1400, height: 1000 });
        try{
        await page.goto(vitalPurchaseLink);
        await page //Login Page
            .waitForSelector('form > div.input-group.mb-3 > input')
            .then(() => page.type('form > div.input-group.mb-3 > input', email))
            .then(() => page.type('form > div.input-group.mb-4 > input', password))
        await page.waitForTimeout(1000)
        await page
            .waitForSelector('body > div.container > div > div > div > div > div.card.card-accent-primary.p-4 > div > form > div.row > div.col-4 > button')
            .then(() => page.click('form > div.row > div.col-4 > button'))
        await console.log('Logged In')
        await orderInitEmbed1.edit({embeds:[loggedIn]});
        await page 
            .waitForSelector('#quantity')
            .then(() => page.click('#quantity'))
            .then(() => page.keyboard.press('Backspace'))
            .then(() => page.type('#quantity', currentBalance2))
        await orderInitEmbed1.edit({embeds:[changingQuantity]});
        await page.waitForTimeout(2000)
        await page
            .waitForSelector('#submit_button')
            .then(() => page.click('#submit_button'))
        await console.log('Picking Payment Method...')
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
        await console.log('Submitted Info... (Submit Checkout)')
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

function purchase(message, args) {
    const orderEmbed = message.embeds[0];
    const orderInit = new Discord.MessageEmbed(orderEmbed)
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${args[1]}\`\` GB`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const loggedIn = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${args[1]}\`\` GB\nLogged In!`)
        .setColor(0x8A2BE2)
        .setTimestamp()  
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const changingQuantity = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const initiatingPayPal = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity\nInitiating PayPal Checkout`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const submittingBilling = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing`)
        .setColor(0x8A2BE2)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const submittingOrder = new Discord.MessageEmbed()
        .setTitle(`New Vital Order`)
        .setDescription(`**Status:**\nInitiating order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing\n__Submitting Order__`)
        .setColor(0xFFAE42)
        .setTimestamp()
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif')
        .setFooter(footer, logo)
    const checkedOut = new Discord.MessageEmbed()
        .setTitle(`Successfully Checked Out!`)
        .setDescription(`**Status:**\nInitiating order of \`\`${args[1]}\`\` GB\nLogged In!\nAccessing Vital Plan\nChanging Bandwidth Quantity\nInitiating PayPal Checkout\nSubmitting Billing\n__Submitting Order__\n\n **Order Information:**\n\nAmount Purchased: \`\`${args[1]}\`\` GB\nEmail used: \`\`${email}\`\``)
        .setColor(0x00FF00)
        .setTimestamp()
        .setThumbnail('https://toppng.com/uploads/preview/best-free-checkmark-check-mark-transparent-background-free-11562873601nxp1ox2tft.png')
        .setFooter(footer, logo)
    puppeteer.launch({ headless: false }).then(async browser => {
        let orderInitEmbed1 = await message.channel.send({embeds: [orderInit]})
        const page = await browser.newPage();
        await page.setViewport({ width: 1400, height: 1000 });
        try{
        await page.goto(vitalPurchaseLink);
        await page //Login Page
            .waitForSelector('form > div.input-group.mb-3 > input')
            .then(() => page.type('form > div.input-group.mb-3 > input', email))
            .then(() => page.type('form > div.input-group.mb-4 > input', password))
        await page.waitForTimeout(1000)
        await page
            .waitForSelector('body > div.container > div > div > div > div > div.card.card-accent-primary.p-4 > div > form > div.row > div.col-4 > button')
            .then(() => page.click('form > div.row > div.col-4 > button'))
        await console.log('Logged In')
        await orderInitEmbed1.edit({embeds:[loggedIn]});
        await page 
            .waitForSelector('#quantity')
            .then(() => page.click('#quantity'))
            .then(() => page.keyboard.press('Backspace'))
            .then(() => page.type('#quantity', args[1]))
        await orderInitEmbed1.edit({embeds:[changingQuantity]});
        await page.waitForTimeout(2000)
        await page
            .waitForSelector('#submit_button')
            .then(() => page.click('#submit_button'))
        await console.log('Picking Payment Method...')
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
        await console.log('Submitted Info... (Submit Checkout)')
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
}

