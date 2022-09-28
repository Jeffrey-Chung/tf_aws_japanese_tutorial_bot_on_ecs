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
    if (!message.member.roles.cache.has('1024671967846080613')) {
        if (message.content === '!add-beginner') {
            message.member.roles.add("1024671967846080613"); //add appropriate role ID for beginner role in JASS server
            message.reply('beginner class role added'); //feedback
        }

    }

     //add intermediate role
     if (!message.member.roles.cache.has('1024672039585460224')) {
        if (message.content === '!add-intermediate') {
            message.member.roles.add("1024672039585460224"); //add appropriate role ID for intermediate role in JASS server
            message.reply('intermediate class role added'); //feedback
        }

     }
    
     //add advanced role
     if (!message.member.roles.cache.has('1024672057855844392')) {
        if (message.content === '!add-advanced') {
            message.member.roles.add("1024672057855844392"); //add appropriate role ID for advanced role in JASS server
            message.reply('advanced class role added'); //feedback
        }
     }
     
     //add english/study group role
     if (!message.member.roles.cache.has('1024672075526438922')) {
        if (message.content === '!add-english') {
            message.member.roles.add("1024672075526438922"); //add appropriate role ID for english role in JASS server
            message.reply('english/study group class role added'); //feedback
        }
     }
     
     //remove beginner role
     if (message.member.roles.cache.has('1024671967846080613')) {
        if (message.content === '!remove-beginner') {
            message.member.roles.remove("1024671967846080613"); //add appropriate role ID for beginner role in JASS server
            message.reply('beginner class role removed'); //feedback
        }  
     }
    
    //remove intermediate role
    if (message.member.roles.cache.has('1024672039585460224')) {
        if (message.content === '!remove-intermediate') {
            message.member.roles.remove("1024672039585460224"); //add appropriate role ID for intermediate role in JASS server
            message.reply('intermediate class role removed'); //feedback
        }

    }
    
    //remove advanced role
    if (message.member.roles.cache.has('1024672057855844392')) {
        if (message.content === '!remove-advanced') {
            message.member.roles.remove("1024672057855844392"); //add appropriate role ID for advanced role in JASS server
            message.reply('advanced class role removed'); //feedback
        }
    }
  
    //remove english/study group role
    if (message.member.roles.cache.has('1024672075526438922')) {
        if (message.content === '!remove-english') {
            message.member.roles.remove("1024672075526438922"); //add appropriate role ID for english role in JASS server
            message.reply('english/study group class role removed'); //feedback
        }
    }
    
});

client.login(process.env.BOT_TOKEN)