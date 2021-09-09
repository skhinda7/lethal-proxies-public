const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const Discord = require('discord.js');
const { Intents, Client, Message } = require('discord.js');
const logo = ('https://pbs.twimg.com/profile_images/1340499493775699968/fpXEBDud_400x400.jpg');
const footer = ('Lethal Proxies | Powered by Skhinda#0001');

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
    coupon
} = require('./config.json');

module.exports = {
    purchase
}

function purchase(message, args) {
    message.channel.send(`Initializing \`\`Elite\`\` order of \`\`${args[1]}\`\` GB...`)
    puppeteer.launch({headless: false}, { args: ['--no-sandbox'] }).then(async browser => {
        const page = await browser.newPage();
        await page.setViewport({ width: 1400, height: 1000 });
        await page.goto(dashboard);
        await page
            .waitForSelector('form > div.input-group.mb-3 > input')
            .then(() => page.type('form > div.input-group.mb-3 > input', email))
            .then(() => page.type('form > div.input-group.mb-4 > input', password))
            .then(() => page.click('form > div.row > div.col-4 > button'))
        await console.log('Logged In')
        await message.channel.send('Logged In!')
        await page.waitForTimeout(2000)
        await page
            .waitForSelector('#sidebar > ul > li:nth-child(4) > a')
            .then(() => page.click('#sidebar > ul > li:nth-child(4) > a'))
        await console.log('Accessing Elite Plan...')
        await message.channel.send('Accessing Elite Plan...')
        await page.waitForTimeout(5000)
        await page
            .waitForSelector('body > div.c-wrapper > div > main > div > div > div > div > div:nth-child(2) > a:nth-child(1)')
            .then(() => page.click('body > div.c-wrapper > div > main > div > div > div > div > div:nth-child(2) > a:nth-child(1)'))
        await page
            .waitForSelector('#coupon_code')
            .then(() => page.type('#coupon_code', 'max10'))
            .then(() => page.click('#coupon_submit_button'))
        await console.log('Adding Coupon Code...')
        await message.channel.send('Applying Coupon Code...')
        await page.waitForTimeout(5000)
        await page 
            .waitForSelector('#quantity')
            .then(() => page.click('#quantity'))
            .then(() => page.keyboard.press('Backspace'))
            .then(() => page.type('#quantity', args[1]))
        await console.log('Changing GB Quantity...')
        await message.channel.send('Changing Bandwidth Quantity')
        await page.waitForTimeout(1000)
        await page
            .waitForSelector('#submit_button')
            .then(() => page.click('#submit_button'))
        await console.log('Picking Payment Method...')
        await message.channel.send('Selecting Payment Method...')
        await page.waitForTimeout(5000)
        await page
            .waitForSelector('#paypal')
            .then(() => page.click('#paypal'))
            .then(() => page.click('#payButton'))
        await page.waitForTimeout(5000)
        await console.log('Initiated PayPal Checkout')
        await message.channel.send('Initiated PayPal Checkout')
        await page
            .waitForSelector('#startGuestOnboardingFlow')
            .then(() => page.click('#startGuestOnboardingFlow'))
        await page.waitForTimeout(2000)
        await console.log('Entering Email Address...')
        await message.channel.send('Entering Email Address...')
        await page
            .waitForSelector('#onboardingFlowEmail')
            .then(() => page.type('#onboardingFlowEmail', email))
            .then(() => page.keyboard.press('Enter'))
        await page.waitForTimeout(3000)
        await console.log('Entering Billing Info...')
        await message.channel.send('Submitting Billing...')
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
        await message.channel.send('Await Checkout...')
        await page.waitForTimeout(2000)
        await page
            .waitForSelector('#root > div > div.css-ltr-197ljhr > main > div > form > div.css-ltr-1wrbn70 > button')
            .then(console.log('Submitting Checkout!'))
            .then(() => page.click('#root > div > div.css-ltr-197ljhr > main > div > form > div.css-ltr-1wrbn70 > button'))
        await page.waitForTimeout(1800)
        await page
            .waitForSelector('body > div.c-wrapper > div > main > div > div > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(1)')
            .then(console.log(`Successfully Checked Out!`))
        const embed = new Discord.MessageEmbed()
            .setTitle('Successfully Checked Out!')
            .setColor(0x00ff00)
            .setDescription(`Order Information:\n\nAmount Purchased: \`\`${args[1]}\`\` GB\nEmail used: \`\`${email}\`\``)
            .setFooter(footer, logo)
        await message.channel.send({embeds: [embed]})
        await page.waitForTimeout(2000)
    browser.close()
    })
}