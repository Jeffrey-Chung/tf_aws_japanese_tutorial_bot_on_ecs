require('dotenv/config');

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
	],
});

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', message => {
    if (message.content === 'ping') {
        //message.reply('pong'); //tags you
        message.channel.send('pong')
    }
    
    //add beginner role
    if (message.content === '!add-beginner') {
        message.member.roles.add("1024671967846080613"); //add appropriate role ID for beginner role in JASS server
        message.reply('beginner class role added'); //feedback
    }

     //add intermediate role
     if (message.content === '!add-intermediate') {
        message.member.roles.add("1024672039585460224"); //add appropriate role ID for intermediate role in JASS server
        message.reply('intermediate class role added'); //feedback
    }

     //add beginner role
     if (message.content === '!add-advanced') {
        message.member.roles.add("1024672057855844392"); //add appropriate role ID for advanced role in JASS server
        message.reply('advanced class role added'); //feedback
    }

     //add beginner role
     if (message.content === '!add-english') {
        message.member.roles.add("1024672075526438922"); //add appropriate role ID for english role in JASS server
        message.reply('english/study group class role added'); //feedback
    }
});

client.login(process.env.BOT_TOKEN)